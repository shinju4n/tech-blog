---
title: "포트원 인증 결제 모듈 사용기 in Next.js 13"
date: "2024-02-25"
category: ["FE", "Next.js"]
summary: "인증결제는 신용카드 결제시 PG사로 부터 결제에 대한 인증 결과 수신 이후 해당 인증키로 결제를 요청하는 결제 방식을 지칭한다. 
국내에서 제일 많이 볼수 있는 결제방식이며 결제 주문페이지에서 결제가 요청되면 각 PG사의.."
pinned: true
thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/832f8e48-19ae-4a60-8f41-a4d26d4aa923/image.png
---

![](https://velog.velcdn.com/images/shinju4n/post/832f8e48-19ae-4a60-8f41-a4d26d4aa923/image.png)

### 🧠 이 글을 쓰게 된 계기

이번 프로젝트에 결제 모듈을 사용하게 되었다.
간단하게 설명하자면 매달 결제하는 구독은 비인증 결제 (넷플릭스 참고),
크레딧은 인증 결제로 구현하게 되었다.(네이버 쿠키 참고)

우리 회사에서는 예전 프로젝트에서 포트원을 사용하였어서 포트원을 결제모듈로 채택하였다.

이번에 결제 시스템을 처음 구현해보아서 기록해두면 좋겠다고 생각해서 한번 작성해보려고 한다.

Stack : Next.js 13.5.6 / TypeScript
Module: PortOneV1 / 나이스페이먼츠

### ❓ 인증 결제란

![](https://velog.velcdn.com/images/shinju4n/post/60c8087e-4136-43cf-81d5-a4f090632ff1/image.png)
(출처 : 포트원 https://www.canva.com/design/DAFqFrw4MPs/1Oqjy8cBpKOIwS3z9leQ9w/view#4)

인증결제는 신용카드 결제시 PG사로 부터 결제에 대한 인증 결과 수신 이후 해당 인증키로 결제를 요청하는 결제 방식을 지칭한다.
국내에서 제일 많이 볼수 있는 결제방식이며 결제 주문페이지에서 결제가 요청되면 각 PG사의 결제창이 활성화되고 그후 고객이 선택한 카드사에 따른 카드사 전용 결제모듈에서 인증이 완료되면 해당 인증값을 바탕으로 결제를 요청하는 흐름으로 결제가 진행된다.

##### PG란?

PG는 "Payment Gateway"의 약자로, 전자상거래에서 결제 처리를 담당하는 시스템
온라인 상에서 상품이나 서비스를 구매하는 고객과 그들의 은행 또는 신용카드 회사 사이에 중계 역할
ex) 네이버페이, 카카오페이, KG이니시스, 나이스페이먼츠, KCP

### 🚀 인증 결제 Flow

![](https://velog.velcdn.com/images/shinju4n/post/d01d4e53-e28f-4651-b5f4-6957edfcb274/image.png)
(출처 : 포트원 https://portone.gitbook.io/docs/auth/guide/def)

위에 그림에서는 일반적인 결제요청을 나타낸다.
하지만 좀더 내가 실제로 느꼈던 결제 Flow는 다음과 같다.

1. 유저가 구매 페이지에 접근한다.
2. 구매 버튼 클릭 시, 가맹점(클라이언트)에서 포트원(결제 모듈)을 호출하여 상품 정보를 넘겨준다.
3. 결제창에서 유저가 PG사(ex: 나이스페이먼츠)에 결제 요청을 한다.
4. PG사에서 고객이 인증과 함께 결제를 진행한다.
5. 결제 진행 결과를 포트원에 보내준다.
6. 포트원이 콜백 함수로 결제 결과를 가맹점(클라이언트)에 보내준다.

### 👨‍💻 포트원을 사용하여 개발하기

1. 모듈 준비
   포트원 v1 모듈은 CDN을 지원하기 때문에 layout 페이지에 추가해주어야 한다.

```tsx
// layout.tsx
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Script src="https://cdn.iamport.kr/v1/iamport.js" />
        {children}
      </body>
    </html>
  );
}
```

또한 v1은 TS를 지원하지 않기 때문에 타입을 추가해주어야하는데,
감사하게도 다른 분께서 패키지를 배포해주셨다. 🙇‍♂️
https://github.com/junhoyeo/iamport-typings

```ruby
npm install -D iamport-typings
# Or using yarn
yarn add -D iamport-typings
```

```json
{
  {
  	...
    "types": ["iamport-typings"] // 추가
  },
}

```

2. 결제 로직
   내가 구현한 로직는 다음과 같다. 1. 결제창 호출 2. 서버에 사전 검증 API 호출 (결제 UID 받기) 3. 결제창 호출 4. 결제 완료 시 callback 함수로 사후 검증 api 호출 (성공, 실패 둘다)

```tsx
// Payment.tsx
import { type FC, useState } from "react";
import { type RequestPayResponse } from "iamport-typings";
import { requestCreditPayment } from "@/services/port-one-service";

type Item = {
  id: number;
  title: string;
};

const Payment: FC = () => {
  const [selected, setSelected] = useState<Item>({
    id: 1,
    title: "크레딧 100개",
  }); // 예시

  const callback = async (response: RequestPayResponse) => {
    // 사후 검증 API
  };
  const requestPayment = async () => {
    requestCreditPayment(selected, callback);
  };

  return <Button onClick={requestPayment}>결제하기</Button>;
};
```

```tsx
// services/port-one-service.ts
import { RequestPayParams, RequestPayResponse } from "iamport-typings";

// 결제창 호출
const usePortOneV1 = async (
  request: RequestPayParams,
  callback: (response: RequestPayResponse) => void
) => {
  if (!window.IMP) {
    return;
  }
  const { IMP } = window;
  IMP.init(process.env.NEXT_PUBLIC_PORTONE_CODE as string);
  IMP.request_pay(request, callback); // 실제 결제창 호출 로직
};

// request 생성
const createPaymentRequest = () => {
  const request: RequestPayParams = {
    pg: // PG_ID,
    pay_method: "card",
    merchant_uid: merchantUid // 서버에서 발행 해준 UID,
    name: 상품명,
    amount: 결제 가격,
    buyer_name: 유저 정보,
    buyer_tel: 유저 정보,
  };
  return request;
};


// 최종
export const requestCreditPayment = async (
  creditInfo: CreditInfoType,
  callback: (response: RequestPayResponse) => void
) => {
    const paymentRequest = createPaymentRequest(auth, creditInfo, merchantUid);
    await usePortOneV1(paymentRequest, callback);
};
```

### 💪 느낀점

주변에서 결제가 힘들다, 결제를 경험해보는 건 큰 경험이다 라는 소리를 엄청 많이 들었다.
확실히 결제와 관련된 것은 정말 많은 에너지를 할당해야했다.
수많은 케이스 테스트, 결제와 관련된 데이터 업데이트 등등.. 클라이언트쪽에 다루어야할 상태나 데이터가 많았다.
하지만 이로써 레벨업과 간단하지만 결제 개발을 해봤다는 것에 너무 큰 뿌듯함을 느꼈다.
