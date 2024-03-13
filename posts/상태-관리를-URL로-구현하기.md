---
title: "상태 관리를 URL로 구현하기"
date: "2023-12-16"
category: "FE"
tags: ["Next.js"]
summary: "이번에 프로젝트를 시작하면서 `페이지(page)`와 `페이지 수(size)`, 그리고 여러개의 `필터값`을 통해 인플루언서를 검색하는 페이지를 개발하게 되었다.
맨처음 개발에 들어갔을 때, 최대한 빨리 레이아웃과 API 연동을 완료한 결과물을 보여줘야할 상황이었기 때문에 내 나름대로 간단하게 구현하였다..."
pinned: true
thumbnailUrl: https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjlfNzYg/MDAxNTg4MTQ0NDU4MTY2.yI4L02gtOvHSsZV4r5WJi-PJI77MdEEL-xnLHBvLwDUg.nA8WEJkzHYByxzfA3kUyQHvtjKUu-pE8K07kS4djDlYg.JPEG.cream-b/IMG_2043.JPG?type=w800
---

### 🧠 이 글을 쓰게 된 계기

이번에 프로젝트를 시작하면서 `페이지(page)`와 `페이지 수(size)`, 그리고 여러개의 `필터값`을 통해 인플루언서를 검색하는 페이지를 개발하게 되었다.
맨처음 개발에 들어갔을 때, 최대한 빨리 레이아웃과 API 연동을 완료한 결과물을 보여줘야할 상황이었기 때문에 내 나름대로 간단하게 구현하였다.
그 간단하게란, API 호출 시 필요한 값들을 상태값(useState)를 통해 관리하여 API 호출하는 방식으로 구현하였다.
그렇게 빠르게 구현을 하고 다른 페이지를 개발하면서 진행하던 중, 어느날 자기전에 생각이 난 것이 있었다.

**"쇼핑몰이나 다른 검색페이지는 Query Params로 구현하지 않나?🤔"**

![](https://velog.velcdn.com/images/shinju4n/post/69a3e961-b9c9-478f-8230-dbfe8b1f69ea/image.png)

![](https://velog.velcdn.com/images/shinju4n/post/098e01d7-b39e-4cee-8390-2ef6be80a601/image.png)

물론 기능적으로는 둘다 잘 동작하지만 보편적으로 Query Params로 구현이 되어있는다는 생각이 들어 그 이유가 궁금해졌다.
그렇게 이유에 대해서 검색해보다가 유튜브에서 너무 마음에 드는 영상을 발견하였다.

[참고 유튜브 링크🚀](https://www.youtube.com/watch?v=ukpgxEemXsk)

![](https://velog.velcdn.com/images/shinju4n/post/cc300946-58dd-4ec5-bf09-d06e47f53f25/image.png)

해당 영상을 보고 실제 프로젝트에 직접 적용을 해보았는데,
프로젝트를 사용하는 직원들에게도 좋은 평을 받았고, 코드의 수도 많이 줄었기 때문에 만족도가 높았다.

해당 영상에서 원하는 정보였던 **QueryParams를 사용하였을 때 이점**과 구현하는 방식도 단계별로 잘 설명해주었고 실제 프로젝트에 직접 적용을 해보았을 때,
프로젝트를 사용하는 직원들에게도 좋은 평을 받았고, 코드의 수도 많이 줄었기 때문에 만족도가 높았다.
이러한 경험을 잘 녹여내서 한번 작성해보려고 한다.

### ❓ Query Params

`Query Params`은 웹 요청(주로 HTTP 요청)에서 사용되는 매개변수(parameters) 중 하나로, 주로 URL에 포함되어 데이터를 전달하는 데 사용된다.
일반적으로는 "key=value" 형식으로 이루어져 있으며, 여러 개의 쌍을 연결하여 사용할 수 있다.

웹 개발에서는 주로 HTTP GET 요청에서 Query Parameters를 사용한다.
예를 들어 검색 기능을 구현할 때, 사용자가 입력한 검색어를 Query Parameters로 전달하여 서버에서 검색 결과를 반환할 수 있다.

> ###### 다른 HTTP 메서드(예: POST)를 사용하는 경우에도 Query Parameters를 사용할 수 있지만, 일반적으로는 GET 요청에서 더 많이 활용

### 🚀 QueryParams를 사용했을 때의 이점

한 유저가 검은색인 셔츠를 필터링 하였고, 두번째 페이지를 다른 유저에게 공유하려고 한다.

```js
category = shirt;
color = black;
page = 2;
```

1️⃣ URL에 상태 정보를 저장하지 않았을 때 URL : www.domain.com/shop

2️⃣ URL에 상태 정보를 저장한 URL: www.domain.com/shoppage=2&category=black&color=black

이 두가지 케이스로 한번 이점에 대해서 생각해보자.

#### 1. 유저가 채팅이나, SNS에 공유할 때 동일한 UI를 얻을 수가 있다.

만약에 1️⃣ **첫번째 케이스**에서 접속을 했었을 때 보여지는 UI는 무엇일까?
URL이든 상태값이든 지정된 정보가 없기 때문에
어떠한 필터링도 되지 않은 `/shop`의 초기페이지만 보일 것이다.
그러면 링크를 받고 섭속 한 유저는 동일한 정보를 얻기 위해서 필터를 하나하나 다시 설정하여 검색해야 할 것이다.

그렇다면 2️⃣ **url에 상태값을 저장하는 방식**은 어떻게 될까?

상태값이 저장된 링크를 공유하여 접속한 다른유저는 페이지에 접속하게 돼었을때
동일한 필터링이 적용된 페이지에 접속하게 되어 필터링을 설정하지 않아도 된다.
쇼핑몰이나 백오피스와 같이 다른 유저에게 정보를 전달할 케이스가 많은 경우에 매우 유리하게 작용할 수 있다.

#### 2. 유저는 저장된 필터값으로 북마크에 저장할수가 있다.

1️⃣ **첫번째 케이스**는 필터링된 페이지를 북마크했을때, 전과 마찬가지로 초기페이지가 저장될 것이다.
2️⃣ **두번째 케이스**는 필터링 값이 URL에 저장되어있기 때문에 필터링된 페이지 그대로 북마크하는 것이 가능하다.

#### 3. 유저가 앞으로 가기/뒤로 가기 버튼을 사용하여 이전의 UI로 돌아갈 수 있다.

만약에 유저가 검은색 셔츠를 선택하고, 주황색 셔츠를 선택했다.
그러다 검은색 셔츠를 다시 검색하기 위해 뒤로가기 버튼을 눌렀다.

1️⃣ **첫번째 케이스**는 유저가 생각하는 동작인 검은색 셔츠가 아닌 다른 페이지가 표시된다.
2️⃣ **두번째 케이스**는 유저가 생각하는 동작인 검은색 셔츠가 페이지에 표시된다.
뒤로가기 버튼을 눌렀을 때, 이전 페이지로 이동하는데 상태값이 저장된 페이지로 이동하기 때문이다.

#### etc..

4. 유저가 새로고침을 해도 필터값 그대로 적용되어있다.
5. 웹 기술에 능숙한 유저는 URL을 조작하여 원하는 정보를 가진 페이지로 이동 할 수 있다.
6. 검색 엔진 최적화 (SEO) - 구조화된 상태 데이터를 포함한 URL은 검색 엔진 순위를 향상시킬 수 있다.
7. 서버 컴포넌트로 구현 가능하다.

### 👍 간단하게 구현 해보기 in Next 13

내가 생각했을때 구현 하는 STEP은 3가지다.

1. 필터나 페이지를 선택했을 때 페이지 이동
2. 페이지에 진입 했을 때 QueryParams 가져오기
3. 데이터 패칭
   나는 useQueryParmas라는 커스텀 훅과 SWR을 구현하여 사용하였다.

```ts
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface UseQueryParamsOptions {
  isDirectPush?: boolean;
  isReplace?: boolean;
  isSetPageFirst?: boolean;
}

const useQueryParams = ({
  isDirectPush = false,
  isReplace = false,
  isSetPageFirst = false,
}: UseQueryParamsOptions = {}) => {
  const router = useRouter();
  const getPathname = usePathname();
  const searchParams = useSearchParams();
  const query = new URLSearchParams(searchParams);

  const updateQueryAndNavigate = () => {
    if (isSetPageFirst) {
      query.set("page", "1");
    }
    if (isDirectPush) {
      if (isReplace) {
        router.replace(`?${query.toString()}`);
      } else {
        router.push(`?${query.toString()}`);
      }
    }
    return query.toString();
  };

  const set = (key: string, value: string) => {
    query.set(key, value);
    return updateQueryAndNavigate();
  };

  const remove = (key: string) => {
    query.delete(key);
    return updateQueryAndNavigate();
  };

  const setAll = (params: Record<string, string | string[]>) => {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== "" && !(Array.isArray(value) && value.length === 0)) {
        query.set(key, value.toString());
      }
    });
    return updateQueryAndNavigate();
  };

  const push = (url: string) => {
    router.push(url);
  };

  const get = (key: string) => {
    return query.get(key);
  };

  const getAll = query.toString();

  const queryStringToObject = (queryString: string) => {
    const result: Record<string, string> = {};
    const pairs = queryString.slice(0).split("&");

    pairs.forEach((pair) => {
      const [key, value] = pair.split("=");
      result[key] = value;
    });

    return result;
  };

  return {
    get,
    getAll,
    set,
    setAll,
    remove,
    push,
    getPathname,
    queryStringToObject,
  };
};

export default useQueryParams;
```

#### 1. 필터나 페이지를 선택했을 때 페이지 이동

```ts
const query = useQueryParams({
  isDirectPush: true,
  isReplace: true,
  isSetPageFirst: true,
});

const handleColor = (value: string) => {
  if (value === "ALL") {
    query.remove("color");
  } else {
    query.set("color", value);
  }
};
```

#### 2. 페이지에 진입 했을 때 QueryParams 가져오기

```ts
import { useSearchParams } from "next/navigaiton"

export default function ShopPage(){
  const searchParmas = useSearchParams();
  const selectedColor = searchParams.get("color")
  const selectedCategory = searchParams.get("category")
  ...
}
```

#### 3. 데이터 패칭

```ts
const query = useQueryParams({ isDirectPush: false, isReplace: false });
const { data, error, isLoading, mutate } = useSWR<ShopResponse>(
  `/shop?` + query.getAll,
  fetcher,
  {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    keepPreviousData: true,
  }
);
```

### 💪 느낀점

이렇게 URL에 상태값을 저장했을때 유저들의 경험이 더 좋아진다는 것을 알게 되었다.
내가 여태까지 너무 상태 저장을 state에 저장하려고 하지 않았나라고 나를 돌아보는 계기가 된 일이 었다.
나는 지금 프론트엔드 개발을 혼자서 하고 있으니, 다른 사람이 구현한 방식에 대해 생각해보고
프로젝트에 계속 적용해보면 더 크게 레벨업을 할 수 있지 않을까 생각한다.
언제나 이런 레벨업은 항상 즐거운 것 같다.
