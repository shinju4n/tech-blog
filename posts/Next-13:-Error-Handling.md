---
title: "Next 13: Error Handling"
date: "2024-02-18"
category: "FE"
tags: ["Next.js"]
summary: "예상치 못한 런타임 오류를 우아하게 처리:
error.js 파일 규약을 사용하면 중첩된 라우트에서 예상치 못한 런타임 오류를 우아하게 처리할 수 있다."
pinned: true
thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/f6dcb716-785e-43c9-8479-fef9758968d4/image.png
---

![](https://velog.velcdn.com/images/shinju4n/post/f6dcb716-785e-43c9-8479-fef9758968d4/image.png)

### 예상치 못한 런타임 오류를 우아하게 처리:

error.js 파일 규약을 사용하면 중첩된 라우트에서 예상치 못한 런타임 오류를 우아하게 처리할 수 있다.

### React 에러 바운더리를 사용해 라우트 세그먼트와 해당 중첩 자식을 자동으로 감싸기

![](https://velog.velcdn.com/images/shinju4n/post/e61a04b3-8916-4be6-b334-319c16d68b2b/image.png)

### error.js 동작 방식

### 오류 복구하기 reset()

가끔 오류의 원인은 일시적일 수 있다. 이러한 경우에 단순히 다시 시도함으로써 문제가 해결될 수 있다.

오류 컴포넌트는 **reset()** 함수를 사용하여 사용자에게 오류를 복구하도록 시도하도록 유도할 수 있다. 이 함수가 실행되면, 해당 내용을 다시 렌더링하려고 시도한다.
성공적으로 완료되면, 대체 에러 컴포넌트가 다시 렌더링된 결과로 대체된다.

```ts
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
```

### 중첩된 라우트 Nested Route

특수 파일을 통해 생성된 React 컴포넌트는 특정 중첩된 계층 구조에 렌더링된다.

![](https://velog.velcdn.com/images/shinju4n/post/f6a0b775-7fe1-4d2c-b409-b0fd8995ed37/image.png)

예를 들어, layout.js 및 error.js 파일을 모두 포함하는 두 개의 세그먼트가 있는 중첩된 라우트는 다음과 같이 단순화된 컴포넌트 계층 구조에서 렌더링된다.

#### 중첩된 오류 컴포넌트 계층 구조

중첩된 컴포넌트 계층 구조는 중첩된 경로에서 error.js 파일의 동작에 영향을 미친다.

오류는 가장 가까운 부모 오류 경계로 전파된다. 이는 error.js 파일이 모든 중첩된 하위 세그먼트의 오류를 처리할 것을 의미다. 경로의 중첩된 폴더 수준에 따라 더 또는 덜 세분화된 오류 UI를 얻을 수 있다.

### 루트 레이아웃에서 오류 처리하기

루트 app/error.js 경계는 루트 app/layout.js 또는 app/template.js 컴포넌트에서 발생한 오류를 잡지 않습니다.

이러한 루트 컴포넌트에서 오류를 특별히 처리하려면, 루트 앱 디렉터리에 위치한 error.js의 변형인 app/global-error.js를 사용해야한다.

루트 error.js와는 달리, global-error.js 오류 경계는 전체 애플리케이션을 둘러싸며, 활성화될 때 루트 레이아웃을 대체하는 대체 컴포넌트를 제공한다. 이로 인해, global-error.js는 자체 <html> 및 <body> 태그를 정의해야 합니다.

global-error.js는 가장 세분화된 오류 UI가 아니며, 전체 애플리케이션에 대한 "catch-all" 오류 처리로 간주될 수 있

global-error.js가 정의되어 있더라도, 전역 UI와 브랜딩이 포함된 루트 레이아웃 내에서 렌더링될 fallback 컴포넌트를 정의하는 것이 좋다.

```tsx
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
```
