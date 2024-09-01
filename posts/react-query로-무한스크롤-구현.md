---
title: 'react-query로 무한스크롤 구현'
date: '2024-09-01'
category: 'FE'
tags: ['React-Query']
summary: 'rq의 useInfiniteQuery와 IntersectionObserver를 사용해서 무한스크롤을 구현한 내용을 기록'
pinned: true
thumbnailUrl: 'https://velog.velcdn.com/images/shinju4n/post/1f40fef3-ba5d-4a24-bb39-01e5874f39a2/image.png'
---

![](https://velog.velcdn.com/images/shinju4n/post/1f40fef3-ba5d-4a24-bb39-01e5874f39a2/image.png)

react query의 useInfiniteQuery로 무한 스크롤 구현한 내용을 기록하고자 한다.

https://tanstack.com/query/latest/docs/framework/react/examples/load-more-infinite-scroll

### useInfiniteQuery 사용해보기

(기본적으로 react-query에 대한 세팅은 되어있다고 가정하고 시작)

- useInfininateQuery는 다음과 같이 사용할 수 있다.

리액트 쿼리 공식문서에는 다음과 같이 예시가 나와있다.

```jsx
useInfiniteQuery({
  queryKey: ['projects'],
  queryFn: fetchProjects,
  initialPageParam: 0,
  getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor,
  maxPages: 3,
});
```

서버에서 pagination에 대한 정보를 제공한다고 가정했을때 (currentPage, totalPage, pageSize 등) 다음과 같이 파라미터를 넘길 수 있다.

서버에서 제공하는 데이터가 아래와 같다면

```jsx
{
  "currentPage": 1,
  "totalPage": 10,
  "pageSize": 20,
  "data": [ /* 현재 페이지의 데이터들 */ ]
}
```

다음과 같이 파라미터를 넘길 수 있다.

```jsx
useInfiniteQuery({
  queryKey: ['projects'], // 쿼리 키
  queryFn: fetchProjects, // 데이터 가져오기 함수
  initialPageParam: 1, // 초기 페이지 파라미터, 보통 1로 시작

  // 다음 페이지 번호를 계산하여 반환
  getNextPageParam: (lastPage, pages) => {
    const { currentPage, totalPage } = lastPage;
    if (currentPage < totalPage) {
      return currentPage + 1; // 다음 페이지 번호
    } else {
      return undefined; // 더 이상 페이지가 없을 때
    }
  },

  // 이전 페이지 번호를 계산하여 반환 (필요할 경우)
  getPreviousPageParam: (firstPage, pages) => {
    const { currentPage } = firstPage;
    if (currentPage > 1) {
      return currentPage - 1; // 이전 페이지 번호
    } else {
      return undefined; // 첫 페이지일 때
    }
  },
});
```

## useInfiniteQuery 반환 속성

`useInfiniteQuery`는 다음과 같은 유용한 속성들을 반환한다:

- `data`: 페이지별로 가져온 데이터
- `fetchNextPage`: 다음 페이지를 가져오는 함수
- `hasNextPage`: 다음 페이지 존재 여부
- `isFetchingNextPage`: 다음 페이지 fetching 상태
- `status`: 쿼리의 전체 상태

## IntersectionObserver를 이용한 무한 스크롤 구현

무한 스크롤을 구현하기 위해 `IntersectionObserver`를 사용한다. 이는 특정 요소가 뷰포트에 들어왔는지 감지하는 API다.

```jsx
import React, { useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';

function InfiniteScrollList() {
  const observerTarget = useRef(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    getNextPageParam: /* ... 이전에 정의한 대로 ... */,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error fetching data</div>;

  return (
    <div>
      {data.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.data.map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
        </React.Fragment>
      ))}
      <div ref={observerTarget}>
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : 'Nothing more to load'}
      </div>
    </div>
  );
}

```

이 예제에서는 `IntersectionObserver`를 사용해 리스트의 마지막 요소가 화면에 보이면 자동으로 다음 페이지를 로드한다.

## 결론

React Query의 `useInfiniteQuery`와 `IntersectionObserver`를 조합하면 효율적이고 사용자 친화적인 무한 스크롤을 쉽게 구현할 수 있다. 이 방식은 데이터 fetching과 UI 업데이트를 최적화하여 부드러운 스크롤 경험을 제공한다.
