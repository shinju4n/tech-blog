---
title: "Next.js 이미지 최적화"
date: "2024-03-03"
category: "FE"
tags: ["Next.js","웹 최적화","이미지"]
summary: "
Next.js에서는 기본적으로 `<Image>` 컴포넌트를 제공해준다.이 이미지 컴포넌트는 이미지를 자동으로 최적화시켜준다. 1.최신 이미지 형식을 사용, 각 디바이스에 대응한 크기의 이미지
2.layout shift 방지
3.lazy loading"
pinned: true
thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/c4334f7e-183f-492e-9ccb-9cb9249449e4/image.png
---

![](https://velog.velcdn.com/images/shinju4n/post/c4334f7e-183f-492e-9ccb-9cb9249449e4/image.png)

### Next.js의 <Image> 컴포넌트

Next.js에서는 이미지 최적화를 위한 <Image> 컴포넌트를 제공해준다. 이 컴포넌트를 사용하면 자동으로 이미지 최적화가 이루어지며, 다음과 같은 장점이 있다.

1. **최신 이미지 형식 사용 및 디바이스에 대응한 크기 제공**:
   - WebP 및 AVIF와 같은 최신 이미지 형식을 지원하고, 각 디바이스에 최적화된 크기의 이미지를 자동으로 제공하여 성능을 최적화해준다.
2. **Layout Shift 방지**:

   - 레이아웃이 변경되지 않도록 이미지를 로드할 때 고정된 공간을 예약하여 사용자가 페이지를 스크롤할 때 예기치 않은 레이아웃 변경을 방지해준다.

3. **Lazy Loading**:
   - 필요한 시점에만 이미지를 로드하여 초기 페이지 로딩 속도를 향상시키고 불필요한 데이터 전송을 줄여준다.

아래 예시는 최적화 전후의 차이를 보여준다

**최적화 전**:
![최적화 전](https://velog.velcdn.com/images/shinju4n/post/42c674b2-ab58-444a-be84-cbb7576d838d/image.png)

**최적화 후**:
![최적화 후](https://velog.velcdn.com/images/shinju4n/post/ae4bf80b-75bb-48b1-bcac-2fef8744aa59/image.png)

### 이미지 포맷 형식 변경 (WebP, AVIF)

이미지 포맷은 주로 무손실 및 손실 형식으로 나뉜다.

1. **무손실 형식**:
   - 원본 이미지의 모든 세부 정보를 보존하면서 압축하는 방식이다.
2. **손실 형식**:
   - 압축 시 일부 정보를 제거하여 파일 크기를 줄이는 방식으로, 약간의 품질 손실이 발생할 수 있다. 대표적인 예로 JPEG가 있다.

최적화된 이미지 포맷인 WebP와 AVIF는 특히 유용하다.

- **WebP**: JPEG 및 PNG 대비 뛰어난 압축률과 품질을 제공한다.
- **AVIF**: JPEG 대비 50-75% 더 나은 압축률을 제공하여 더 작은 파일 크기로 동일한 품질의 이미지를 저장할 수 있다.

Next.js에서는 기본적으로 WebP로 자동 변환되지만, AVIF를 사용하고 싶다면 `next.config.ts`에서 설정을 변경할 수 있다:

```ts
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};
```

### Lazy Loading

Lazy Loading은 웹 페이지의 성능을 향상시키는 기술로, 필요한 이미지만 로드하여 초기 페이지 로딩 시간을 단축시킨다. 이는 사용자가 스크롤하면서 이미지를 로드하게 함으로써 사용자 경험을 향상시킨다. Next.js의 `<Image>` 컴포넌트에서 `loading` 속성을 `lazy`로 설정하여 쉽게 적용할 수 있다.

```tsx
<Image width={300} height={300} src="..." alt="..." loading="lazy" />
```

### 이미지 리사이징

Next.js의 `<Image>` 컴포넌트는 다양한 화면 크기에 맞춰 이미지를 자동으로 리사이징할 수 있다. `sizes` 속성을 사용하여 미디어 조건마다 어떤 크기의 이미지를 로드할지 지정할 수 있다.

```tsx
<Image
  sizes="(max-width: 320px) 280px,
         (max-width: 480px) 440px,
         800px"
  src="..."
  alt="..."
  width={800}
  height={600}
/>
```

또는 `next.config.ts` 파일에서 전역 설정으로 지정할 수도 있다.

```ts
module.exports = {
  images: {
    deviceSizes: [320, 480, 800],
  },
};
```

이렇게 하면 Next.js는 각 미디어 조건에 맞춰 최적화된 이미지를 제공해준다.
