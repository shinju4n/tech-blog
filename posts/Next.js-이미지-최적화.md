---
title: "Next.js 이미지 최적화"
date: "2024-03-03"
category: ["Next.js","웹 최적화","이미지"]
summary: "1.최신 이미지 형식을 사용, 각 디바이스에 대응한 크기의 이미지
2.layout shift 방지
3.lazy loaidng"
pinned: trueㅛㅁ구
thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/c4334f7e-183f-492e-9ccb-9cb9249449e4/image.png
---

![](https://velog.velcdn.com/images/shinju4n/post/c4334f7e-183f-492e-9ccb-9cb9249449e4/image.png)

### Next/image에 대해서

Next.js에서는 기본적으로 `<Image>` 컴포넌트를 제공해준다.이 이미지 컴포넌트는 이미지를 자동으로 최적화시켜준다

```ts
import Image from "next/image";
```

간단하게 장점을 설명하자면,

1.최신 이미지 형식을 사용, 각 디바이스에 대응한 크기의 이미지
2.layout shift 방지
3.lazy loaidng

위의 장점을 활용하여 이미지 최적화를 적용해보았다.

**최적화 전**
![](https://velog.velcdn.com/images/shinju4n/post/42c674b2-ab58-444a-be84-cbb7576d838d/image.png)
**최적화 후**
![](https://velog.velcdn.com/images/shinju4n/post/ae4bf80b-75bb-48b1-bcac-2fef8744aa59/image.png)

### 이미지 포맷 형식 변경 WebP,Avif

이미지 형식은 주로 무손실 형식, 손실 형식으로 나뉜다. 1.무손실 형식
무손실 이미지 압축은 이미지를 압축하면서도 원본 이미지의 모든 세부 정보를 보존하는 방식 2. 손실 형식
손실 형식은 이미지를 압축 할 때 일부 정보를 제거하여 파일 크기를 줄이는 방식이다.
이미지의 세부 정보를 압축함으로써 파일 크기를 줄이지만, 이 과정에서 약간의 품질 손실이 발생 할 수 있다.
댸표적으로 JPEG 형식이 있다.

결론적으로 말하면 WebP, avif 포맷이 이미지 최적화에 유리하다.
일반적으로 avif는 jpeg에 비해 약 50%에서 75% 정도 더 나은 압축률을 보여준다.
즉, 동일한 품질의 이미지를 저장할 때 AVIF는 더 작은 파일 크기를 가진다.

next/image를 사용하면 자동으로 포맷을 webp로 변환 해준다. 하지만 우리가 사용하고 싶은 포멧은 avif이기 때문에 avif 포맷을 사용하고 싶으면 next.config.ts에서 설정 해주면된다.

```ts
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
```

### Lazy loading

lazy loading 웹 페이지의 성능을 향상시키기 위한 기술 중 하나로, 페이지가 로드될 때 모든 이미지를 동시에 로드하는 대신에 필요한 이미지만 요청하는 방식이다. Lazy Loading을 사용하면 초기 페이지 로딩 시간을 단추갛고 사용자 경험을 향상시킬 수 있다.

```tsx
<Image width={300} height={300} src={...} alt={...} loading="lazy"/>
```

### 이미지 리사이징

next/image의 경우 sizes 값을 설정 할 수 있는데, 미디어 조건 마다 어떤 사이즈의 이미지를 로드할지 지정 할 수가 있다.

```tsx
<Image
  sizes="(max-width: 320px) 280px,
        (max-width: 480px) 440px,
        800px"
/>
```

또는

```ts
module.exports = {
  images: {
    sizes: "250px",
  },
};
```
