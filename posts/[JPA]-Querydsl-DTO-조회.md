---
title: "[JPA] Querydsl DTO 조회"
date: "2023-08-19"
category: "BE"
tags: ["JPA", "Spring Boot", "Querydsl"]
summary: "Querydsl DTO로 조회하는 방법은 4가지가 있다.
- Projection.bean
- Projection.fields
- Projection.constructor
- @QueryProjection"
pinned: false
thumbnailUrl: https://velog.velcdn.com/images/ewan/post/4d809000-30c0-48ed-b0d7-a0ded326b95d/querydsl.png
---

Querydsl DTO로 조회하는 방법은 4가지가 있다.

- Projection.bean
- Projection.fields
- Projection.constructor
- @QueryProjection

```java
// 공통으로 쓰일 DTO
public class ProductDTO {
    private String name;
    private BigDecimal price;
    // Getters and Setters
}
```

#### Projection.bean

Projection.bean 방법은 setter 메서드를 기반으로 동작하기 때문에 DTO 객체의 각 필드에 setter 선언 필요

단순조회용으로 사용되는 DTO라면 값이 변경되어도 상관이 없을 수 있겠지만, 만약 영속화된 데이터를 변경하는 책임을 가진 객체라면 문제가 될 수 있기 때문에 권장 X

```java
QProduct qProduct = QProduct.product;
List<ProductDTO> products = queryFactory
    .select(Projections.bean(ProductDTO.class, qProduct.name, qProduct.price))
    .from(qProduct)
    .fetch();
```

#### Projection.fields

Projections.fields를 이용한 방법은 getter, setter 메서드 필요 없이 field에 값을 매핑 해주는 방식
필드의 명칭과 Type이 다를 경우 매칭이 되지 않으며, 컴파일 시점에서는 에러를 잡지 못하고 런타임 시점에서 에러가 잡힘

```java
QProduct qProduct = QProduct.product;
List<ProductDTO> products = queryFactory
    .select(Projections.fields(ProductDTO.class, qProduct.name, qProduct.price))
    .from(qProduct)
    .fetch();
```

#### Projection.constructor

엔티티의 필드를 DTO의 생성자와 매핑하여 결과를 가져올 수 있다.
이 방식은 DTO에 생성자를 정의하고, 엔티티의 필드와 생성자의 파라미터 이름을 매칭시켜야 함
코드가 간결하며, DTO에 매핑 관련 로직을 직접 작성하지 않아됨
엔티티와 DTO 사이의 매핑이 명시적이므로 가독성이 좋음
생성자의 파라미터 이름이 엔티티 필드와 정확히 일치해야 함 리팩토링 시 주의가 필요

```java
QProduct qProduct = QProduct.product;
List<ProductDTO> products = queryFactory
    .select(Projections.constructor(ProductDTO.class, qProduct.name, qProduct.price))
    .from(qProduct)
    .fetch();
```

#### @QueryProjection

DTO 클래스의 생성자에 @QueryProjection 어노테이션을 붙여서 Querydsl이 이 생성자를 사용하도록 지정
Querydsl은 DTO의 생성자 파라미터 순서와 엔티티의 필드 순서를 기반으로 SQL 쿼리를 생성하고 결과를 DTO 생성자에 매핑
ProductDTO 클래스의 생성자 파라미터 순서와 QProductDTO 생성자의 파라미터 순서가 일치하면 됨
생성자의 파라미터 순서만 일치하면 되므로, 생성자 파라미터의 이름을 엔티티 필드와 정확하게 일치시킬 필요 X
생성자의 파라미터 순서만 유지하면 리팩토링에 더 안전
DTO가 Querydsl에 의존성을 가지기 때문에 아키텍처적으로 적용을 생각 필요

```java
import com.querydsl.core.annotations.QueryProjection;

public class ProductDTO {
    private String name;
    private BigDecimal price;
    // Getters and Setters

    @QueryProjection
    public ProductDTO(String name, BigDecimal price) {
        this.name = name;
        this.price = price;
    }
}
```

```java
Product qProduct = QProduct.product;
List<ProductDTO> products = queryFactory
    .select(new QProductDTO(qProduct.name, qProduct.price))
    .from(qProduct)
    .fetch();
```
