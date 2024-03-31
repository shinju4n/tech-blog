---
title: 'Suspense 사용하여 비동기 처리하기 (2)'
date: '2024-03-30'
category: 'FE'
tags: ['React.js']
summary: '데이터 패칭 라이브러리를 사용할 때 Suspense를 지원하는 라이브러리는 대표적으로 `React Query` 와 `Suspense` 가 있다. 이 둘을 사용하는 이유는 서버와의 API 통신과 비동기 데이터 관리가 편리하고 유리하기 때문이다.'
pinned: true
thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/ae54c525-7e02-439d-b083-c3d94d981054/image.gif
---

Suspense의 개념에 대해서는 이전글을 참고하세요!

## 데이터 패칭 라이브러리와 함께 사용하기

데이터 패칭 라이브러리를 사용할 때 Suspense를 지원하는 라이브러리는 대표적으로 `React Query` 와 `Suspense` 가 있다. 이 둘을 사용하는 이유는 서버와의 API 통신과 비동기 데이터 관리가 편리하고 유리하기 때문이다.

## React Query + Suspense

이전 버전에서는 옵션에서 `suspense: true` 를 설정해주면 suspense를 사용가능했다.

```jsx
// 전역
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
```

```jsx
// 개별적
import { useQuery } from '@tanstack/react-query';

useQuery({ queryKey, queryFn, suspense: true });
```

하지만 v5 버전부터는 아래의 전용 훅을 사용하면 된다.

- useSuspenseQuery
- useSuspenseInfiniteQuery
- useSuspenseQueries

```jsx
import { useSuspenseQuery } from '@tanstack/react-query';

const { data } = useSuspenseQuery({ queryKey, queryFn });
```

Suspense 모드를 사용할 때는 상태와 에러 객체가 필요하지 않고, Suspense 컴포넌트를 사용하여 오류를 catch하는 것으로 대체된다.

## 예시 코드

해당 코드는 https://github.com/wpcodevo/nextjs13-react-query 를 참고하여 작성하였습니다.

```jsx
// App.tsx
import ListUsers from './list-users';
import { Suspense } from 'react';

export default function App() {
  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>loading... on initial request</p>}>
        <ListUsers />
      </Suspense>
    </main>
  );
}
```

```jsx
// list-users.tsx
import { User } from "../types";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";

async function getUsers() {
  return (await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  )) as User[];
}

export default function ListUsers() {
  const { data } = useSuspenseQuery<User[]>({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => getUsers(),
    staleTime: 5 * 1000,
  });

  return (
    <>
      {
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data?.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ width: 180, height: 180 }}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      }
    </>
  );
}

```

위와 같이 코드를 작성하게 되면 밑에 화면과 같이 loading... on initial request이 먼저 뜨고 호출이 완료 되었을 때, 리스트를 보여준다.
![](https://velog.velcdn.com/images/shinju4n/post/ae54c525-7e02-439d-b083-c3d94d981054/image.gif)

참고 > https://medium.com/creditas-tech/react-suspense-swr-skeleton-e1979e9f32f0
