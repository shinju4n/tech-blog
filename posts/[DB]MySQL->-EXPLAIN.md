---
title: "[DB]MySQL > EXPLAIN"
date: "2023-09-22"
category: "Database"
tags: ["MySQL"]
summary: "`EXPLAIN`은 MySQL 서버가 어떠한 쿼리를 실행할 것인가, 즉 실행 계획이 무엇인지 알고 싶을 때 사용하는 가장 기본적인 명령어이다.
실행 하고자하는 쿼리 위에 explain을 붙여 주면 된다"
pinned: false
thumbnailUrl: https://velog.velcdn.com/images/leo3179/post/49f60233-840e-435d-a175-2d63d725c403/image.png
---

### EXPLAIN

`EXPLAIN`은 MySQL 서버가 어떠한 쿼리를 실행할 것인가, 즉 실행 계획이 무엇인지 알고 싶을 때 사용하는 가장 기본적인 명령어이다.
실행 하고자하는 쿼리 위에 explain을 붙여 주면 된다.

```sql
explain
select *
from User u
left join Activity a on u.id = a.userId
where u.id in (10 , 20 , 30)
```

그렇게 되면 해당 컬럼마다 분석에 대한 값을 알 수가 있다.

#### table

- 어떤 테이블에 대한 접근을 표시하고 있는지 나타낸다.

#### id

- idsms SELECT에 붙은 번호를 의미한다.MySQL은 조인을 하나의 단위로 실행하기 때문에 id는 그 쿼리에 실행 단위를 식별한다. 따라서 조인만 수행하는 쿼리에서는 id는 항상 1이 된다.

#### partitions

- partitions는 파티셔닝이 되어 있는 경우에 사용되는 필드, 파티셔닝이 되어 있는 경우 꼭 확인

#### type

- 접근 방식을 표시하는 필드
- 접근 방식이란 테이블에서 어떻게 행데이를 가져올 것인가를 뜻함
- const | eq_ref | ref | range | index | all
- ALL, index 두 가지는 테이블 또는 특정 인덱스가 전체 행에 접근하기 때문에 테이블의 크기가 크면 효율이 떨어짐
- ref_or_null의 경우 NUL이 들어있는 행은 인덱의 맨 앞에 모아서 저장하지만 그 건수가 많으면 MySQL 서버의 작업량이 방대해짐
- ALL 이외의 다른 접근 방식은 모두 인덱스를 사용한다.
  ![1](https://velog.velcdn.com/images/shinju4n/post/da56a8cf-0e30-4d3c-97f6-071f7db207de/image.png)
  (출처 https://cheese10yun.github.io/mysql-explian/)

#### possible_keys

- possible_keys 필드는 이용 가능성 있는 인덱스의 목록

#### key

- possible_keys 필드는 이용 가능성있는 인덱스의 목록 중에서 실제로 옵티마이저가 선택한 인덱스가 key가 됨.

#### key_len

- key_len 필드는 선택된 인덱스의 길이를 의미

#### rows

- rows는 이 접근 방식을 사용해 몇 행을 가져왔는가를 표시.
- 최초에 접근하는 테이블에 대해서 쿼리 전체에 의해 접근하는 행 수
- 그 이후에 테이블에 대해서는 1행의 조인으로 평균 몇행을 접근했는가 표시
- 단 통계갑승로 계산한 값이므로 실제 행수와 일치하지 않을 수 있음

#### filterd

- 행 데이터를 가져와 거기에서 where 구의 검색 조건이 적용되면 몇행이 남는지 표시한다.
- 이 값도 통계값 바탕이므로 항상 일치 X

#### extra

- 옵티마이저가 동작하는데 대해서 힌트
