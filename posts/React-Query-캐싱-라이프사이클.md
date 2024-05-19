---
title: 'React Query 캐싱 라이프사이클'
date: '2024-05-19'
category: 'FE'
tags: ['reactQuery']
summary: 'React Query 캐싱 라이프사이클에 대해서 알아보자.'
pinned: false
thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/8e296517-c101-4fea-bff7-231fdfb3cf8c/image.png
---

![출처 https://tkdodo.eu/blog/inside-react-query](https://velog.velcdn.com/images/shinju4n/post/8e296517-c101-4fea-bff7-231fdfb3cf8c/image.png)
[이미지출처](https://tkdodo.eu/blog/inside-react-query)

## 🐵 들어가며..

실무, 사이드프로젝트에서 데이터 fetching과 서버 생타 관리를 위해 React Query(이하 RQ)를 계속 사용해왔다.
어느날 깃헙에서 RQ에 대한 레포짓이 있어서 정독을 하다가 캐싱 라이프사이클에 대해 궁금해져서 한번 바로 잡고 가볼려고 한다.

리액트 쿼리 공식 문서를 참고하여 작성하였다.

> 참고
> [캐싱의 기본 동작 - 공식문서](https://tanstack.com/query/latest/docs/framework/react/guides/important-defaults?from=reactQueryV3) > [캐싱 예시 - 공식 문서](https://tanstack.com/query/latest/docs/framework/react/guides/caching?from=reactQueryV3)

## 기본 설정

RQ는 합리적인 기본 설정으로 구성되어있다.

#### useQuery 또는 useInfiniteQuery를 통해 생성된 쿼리 인스터스는 기본적으로 캐시된 데이터를 구식으로 간주한다.

- 이를 변경하려면 `staleTime` 옵션을 사용해 전역 또는 개별적으로 설정해야한다. `staleTime`을 길게 설정하면 쿼리가 데이터를 자주 가져오지 않는다.

#### 구식 쿼리는 다음 상황에서 자동으로 백그라운드에서 다시 패칭된다.

- 쿼리의 새 인스턴스가 마운트될 때
- 창이 다시 포커스될 때
- 네트워크가 재연결될 때
- 쿼리가 선택적으로 재페칭 간격으로 설정된 경우
- 이 기능을 변경하려면 `refetchOnMount`, `refetchOnWindowFocus`, `refetchOnReconnect`, `refetchInterval`을 사용하면 된다.

#### useQuery, useInfiniteQuery 또는 쿼리 옵저버의 활성 인스턴스가 없는 쿼리 결과는 "inactive"(비활성)으로 표시되며, 나중에 다시 사용될 경우를 대비해 캐시에 남아있는다.

- 기본적으로 "inactive" 쿼리는 5분 후에 가비지 컬렉션이 된다.
- 이를 변경할려면 쿼리의 기본 `gcTime`을 다른 값으로 설정해야한다. `기본값: 1000 * 60 *5 ms`

#### 실패한 쿼리는 3번까지 재시도되며, 지수 백오프 지연 후 (네트워크 통신 등에서 재시도 할 때 사용되는 알고리즘) UI에 오류를 표시한다.

- 이를 변경하기 위해서는 쿼리의 기본 `retry` 및 `retryDelay` 옵션을 다른 값으로 설정해야한다.

#### 쿼리 결과는 기본적으로 데이터가 실제로 변경되었는지 감지하기 위해 구조적으로 공유된다. 그렇지 않은 경우, 데이터 참조는 변경되지 않아 useMemo 및 useCallback과 관련된 값 안정화에 도움이 된다.

- 구조적 공유는 JSON 호환 값에만 작동하며, 다른 값 유형은 항상 변경된 것으로 간주된다.
- 큰 응답으로 인해 성능 문제가 발생하는 경우 `config.structuralSharing` 플래그로 이 기능을 비활성화할 수 있다.
- JSON 호환이 되지 않는 값을 처리하는 경우,`config.structuralSharing`으로 사용자 정의 함수를 제공하여 이전 및 새로운 응답에서 값을 계산하고 필요한 참조를 유지할 수 있다.

## 캐싱 예제

이 캐싱 예제는 다음 라이프사이클을 설명한다.

- 캐시 데이터가 있거나 없는 인스턴스
- 백그라운드 리페칭
- 비활성 쿼리 Inactive Queries
- 가비지 컬렉션

예를 들어, 기본 `gcTime`이 5분이고 `staleTime`이 0이라고 가정한다.

#### 1. useQuery({queryKey: ['todos'], queryFn: fetchTodos})의 새 인스턴스가 마운트된다.

- 처음이므로 로딩 상태를 표시하고 네트워크 요청을 보낸다.
- 데이터가 반환되면 ['todos']키로 캐시에 저장된다.
- `staleTime` 후 데이터는 구식으로 표시된다.

#### 2. 동일한 쿼리 키로 다른 인스턴스가 마운트된다.

- 캐시된 데이터가 즉시 반환되고, 백그라운드에서 새로운 네트워크 요청이 시작된다.
- 새 데이터가 성공적으로 받아지면 캐시가 갱신된다.

#### 3. 쿼리 인스턴스가 모두 언마운트되면 카비지 컬렉션 타이머가 시작된다.

- 5분 내에 다시 마운트되면 캐시된 데이터를 반환하고, 네트워크 요청을 백그라운드에서 실행한다.
- 마지막 인스턴스가 언마운트된 후 5분 동안 새로운 인스턴스가 없다면 캐시 데이터가 삭제된다.

### 정리

1. **초기 페칭**: 쿼리가 처음 실행될 때 데이터를 서버에서 가져와 캐시에 저장한다.
2. **캐싱** : 가져온 데이터는 쿼리 키를 기준으로 캐시에 저장되며, 일정기간 동안 유효하다.
3. **구식 상태**: `staleTime`이 지나면 데이터는 구식으로 간주된다.
4. **리페칭**: 구식데이터는 특정 조건에서 자동으로 백그라운드에서 리페칭된다.
5. **가비지 컬렉션**: 일정 시간(cacheTime)동안 사용되지 않은 데이터는 캐시에서 제거된다.

이를 통해서 데이터가 효율적으로 업데이트되며, 불필요한 서버 요청을 줄여 성능을 최적화 할 수 있다.
