---
title: "[JPA] N+1 문제"
date: "2023-08-31"
category: "BE"
tags: ["JPA", "Spring Boot", "에러"]
summary: "연관 관계가 설정된 엔티티를 조회 할 경우, 조회된 데이터 갯수(n)만큼 연관관계의 조회 쿼리가 추가로 발생하는 문제.
만약 쿠폰이라는 엔티티를 조회하는데, 연관 관계 유저와 미션을 조회한다고 가정해보자.
쿠폰 한개 행을 조회할 때 유저와 미션을 조회하는 쿼리가 같이 발생하기 때문에 한 행을 조회할때 쿼리가 3번 나간다."
pinned: true
thumbnailUrl: https://velog.velcdn.com/cloudflare/alswl689/105df2e3-cbbd-45c3-920b-68b65dc471d7/springbootImg.png
---

이번에 쿠폰 지급 받은 유저의 엑셀 다운로드 기능을 구현하다 마주친 N+1에 대해 기록해보려고한다.

### N+1 문제란

연관 관계가 설정된 엔티티를 조회 할 경우, 조회된 데이터 갯수(n)만큼 연관관계의 조회 쿼리가 추가로 발생하는 문제.
만약 쿠폰이라는 엔티티를 조회하는데, 연관 관계 유저와 미션을 조회한다고 가정해보자.
쿠폰 한개 행을 조회할 때 유저와 미션을 조회하는 쿼리가 같이 발생하기 때문에 한 행을 조회할때 쿼리가 3번 나간다.

### 발생원인?

jpaRepository에 정의된 메서드 find를 실행하면 JPA에서 JPQL을 생성하여 실행한다.
JPQL은 SQL에 종속 되지 않고 엔티티의 필드 이름을 가지고 쿼리를 실행시킨다.
그렇기 때문에 하위 엔티티를 추가로 조회하기 때문에 발생한다.

### 해결 방법

#### 1. @Query에서 fetch join

JpaRepository에서 @Query 어노테이션을 지정하여 쿼리를 작성하는데 join fetch를 실행해준다.

```java
@Query("select c from Coupon c join fetch c.user")
List<Coupon> findAllJoinFetch();
```

#### 2. @EntityGraph

```java
EntityGraph(attributePaths = {"user"})
@Query("select DISTINCT c from Coupon c")
List<Coupon> findAllEntityGraph();
```

@EntityGraph를 통해 attributePath에 설정해준 부분을 EAGER 전략으로 조회해올 수 있다.
따라서 user를 attributePaths에 넣어주어 설정해주면, 하나의 쿼리만 실행된다.

#### % 주의 사항

Fetch Join과 Entity Graph의 경우, 카테시안 곱이 발생하므로 중복 제거가 필요하다.

#### 3.QueryDsl

나같은 경우에는 그냥 QueryDsl로 수정하여 해결하였다.

```java
public List<CouponDto> findAllByQuerydsl() {

	return queryFactory.select(coupon.id, user.name)
	.from(coupon)
	.innerJoin(coupon.user).on(coupon.user.id.equals(user.id))
	.fetchJoin()
	.distinct()
	.fetch();
}
```
