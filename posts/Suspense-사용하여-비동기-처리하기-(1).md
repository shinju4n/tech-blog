---
title: "Suspense 사용하여 비동기 처리하기 (1)"
date: "2024-03-24"
category: "FE"
tags: ["React.js"]
summary: "`React Suspense`는 React.js 버전 16.6에서 소개된 기능이다.
이 기능을 사용하면 컴포넌트가 서버에서 데이터를 가져오거나 동적으로 코드를 불러오는 등의 비동기 작업이 완료될 때까지 렌더링을 일시적으로 일시 정지할 수 있다.
기존에는 React에서 비동기 작업을 처리하기 위해 `callback`, `Promise` 와 같은 방법으로 동작했다. 이러한 접근 방식은 작동하지만 여러 비동기 작업을 처리할 때 복잡하고 유지 관리하기 어려운 코드로 이어질 수 있다."
pinned: false
thumbnailUrl: https://velog.velcdn.com/images/seeh_h/post/eabee579-2bff-484c-8380-2e5d36cc12fa/image.png
---

![](https://velog.velcdn.com/images/seeh_h/post/eabee579-2bff-484c-8380-2e5d36cc12fa/image.png)

**이번편에서는 suspense, lazy loading, error boundary에 대한 내용을 다루고 있습니다.**

## 📝 Suspense란?

`React Suspense`는 React.js 버전 16.6에서 소개된 기능이다.

이 기능을 사용하면 컴포넌트가 서버에서 데이터를 가져오거나 동적으로 코드를 불러오는 등의 비동기 작업이 완료될 때까지 렌더링을 일시적으로 일시 정지할 수 있다.

기존에는 React에서 비동기 작업을 처리하기 위해 `callback`, `Promise` 와 같은 방법으로 동작했다. 이러한 접근 방식은 작동하지만 여러 비동기 작업을 처리할 때 복잡하고 유지 관리하기 어려운 코드로 이어질 수 있다.

`Suspense`는 컴포넌트 트리 내에서 비동기 작업을 직접 처리하기 위한 선언적인 방법을 제공하여 이를 단순한다. 컴포넌트는 데이터를 가져오기를 기다리는 동안 렌더링을 일시 중단할 수 있고, React는 자동으로 데이터를 사용 가능할 때까지 대체 UI를 표시한다.

## 🙈 Suspense의 주요 기능

### 🐵 Suspense 컴포넌트

`React Suspense`의 중요한 요소 중 하나는 `Suspense` 컴포넌트이다. 이 컴포넌트를 사용하면 비동기 작업이 대기 중일 때 대체 콘텐츠를 처리하는 방법을 선언하고 컴포넌트 트리의 어떤 부분이든 캡슐화 할 수 있다.

```jsx
<Suspense fallback={<div>로딩중...</div>}>
  <Component />
</Suspense>
```

위의 예시에서 Component가 준비되지 않는 경우, `로딩중...` 이라는 div를 보여준다.

### 🚀 Lazy Loading의 장점

1. 향상된 속도: 현재 뷰에 필요한 컴포넌트만 선택적으로 로드하고 모든 컴포넌트를 한 번에 로드하지 않기 때문에 컴포넌트의 게으른 로딩은 애플리케이션의 속도를 향상시킬 수 있다.
2. 향상된 사용자 경험: Suspense를 사용하여 로딩 표시를 표시함으로써 사용자에게 애플리케이션이 활발하게 자료를 로드하고 있음을 알려줌으로써 사용자 경험을 향상시킬 수 있다.
3. 코드 분할: lazy()의 주요 장점 중 하나는 코드 분할을 가능하게 한다. 코드 분할 과정은 애플리케이션의 코드를 더 작고 필요할 때만 요청되는 번들로 분할하는 것을 의미한다. 이는 초기 번들 크기를 최소화하고 애플리케이션의 로딩 시간을 빠르게 한다.

## 🔥 Lazy Loading 사용하기

React에는 lazy()라는 동적 import 메커니즘이 있다. 이를 사용하면 천천히 모듈을 임포트 할 수 있다.

`lazy loading` 은 컴포넌트 또는 코드 부분이 필요할 때만 로드되는 요구 사항을 의미한다. `Suspense`와 함께 사용되며 필요할 때만 컴포넌트를 로드하여 웹 애플리케이션의 속도를 향상시키는데 자주 사용된다.

이는 응용 프로그램의 로딩 속도를 최소화하고 초기 번들 크기를 줄이는 데 매우 하다.

```jsx
import Component from './Component';

// lazyLoading
const Component = React.lazy(() => import('./Component'));
```

## ⁉️ Error Boundaries

Error Boundary는 React 컴포넌트 자신의 하위 트리 안에서 발생하는 오류를 감지하고 관할 수 있다. 비동기 데이터를 기다리는 동안 발생하는 문제를 부드럽게 처리할 수 있기 때문에, suspense를 다루는데 중요한 역할을 한다.

```jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 에러 상태 업데이트
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 에러를 에러 보고 서비스에 로깅
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 여기서 대체 UI를 렌더링
      return <h1>오류가 발생했습니다.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

## 👣 Suspense 작동 방식

1. React가 로드된 후에 컴포넌트 트리가 렌더링된다.
2. React는 Suspense 컴포넌트를 만나면 자식 컴포넌트 중 어떤 것이 일시 중지 상태인지 확인한다.
3. 자식 컴포넌트가 데이터를 기다리는 경우(예: lazy()로 가져온 컴포넌트 || 데이터 가져오기), React는 데이터가 준비될 때까지 지정된 fallback을 표시한다.
4. 데이터가 준비되면 React는 실제 내용을 렌더링한다.

다음 포스팅에서는 실제 코드와 함께 어떻게 사용하는지에 대해서 알아보겠습니다.
