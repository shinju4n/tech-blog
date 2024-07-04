---
title: '[JPA] 이미지 순서 변경 API 만들다가 배운것들'
date: '2023-08-24'
category: 'BE'
tags: ['JPA', 'Spring Boot']
summary: '영속성이란? 정의 : 데이터를 오랜 기간 유지하거나 저장하는 속성 in JPA : 객체를 데이터베이스에 저장하고,필요할 때 다시 불러올 수 있는 속성 1. 비영속성 : JPA가 아직 모르는 상태. 새로운 객체를 생성하고, 영속성 컨텍스트나 데이터베이스와는 관련이없는 상태'
pinned: false
thumbnailUrl: https://velog.velcdn.com/images/dev_zzame/post/0491a410-cf2e-4e35-a26a-e33671955d9a/64585171-96511580-d3d2-11e9-947d-8f1e98e46100.png
---

캠페인의 썸네일 이미지 순서를 바꾸는 기능을 구현하게 됐었다. 사실 order 컬럼을 추가하면 되지만 앱쪽에서 지금 다른 기획 때문에 리소스가 많이 들어가고 있어서 어드민쪽에서만 수정해서 변경 가능하게 만들었다.
Request Body로 attachmentIds로 배열로 변경하고 싶은 순서대로 받았다.
해당 엔티티를 조회 -> 복사 -> 기존 엔티티 삭제 -> 복사본 저장 이런식으로 대충 로직을 잡아놓았다.
처음에는 attachmentIds 그대로 findAll하면 순서대로 entity가 리스트에 담겨 올줄 알았는데 id값으로 정렬되서 불러와졌다.
그래서 생각했던건 foreEach문으로 반복문을 두번 돌려서 새로운 리스트에 순서대로 넣는 방식을 생각하여 구현하였다.

```java
List<Entitiy> result = new ArrayList<>()
	attachmentIds.forEach(id-> {
		beforeAttachment.forEach(attachment -> {
		    if(id == attachment.getId()){
            Entity copy = Entity.builder()
            ...
           reuslt.add(copy)
        }
    })
})
```

하지만 이중 for문 사용은 시간복잡도가 O(n^2)로 성능면에서 안좋다는 리뷰를 받고 시니어분의 친절한 도움을 받아 수정하였다.

방법은 조회한 엔티티를 Map에 담아서 사용하는것이다.

```java
List<CampaignAttachmentEntity> beforeAttachment = campaignAttachmentRepository.findAllById(attachmentIds);

Map<Long, CampaignAttachmentEntity> beforeAttachmentMap = beforeAttachment.stream().collect(Collectors.toMap(CampaignAttachmentEntity::getId, Function.identity()));
```

이렇게 하면 {id: Entity} 이런 식으로 map에 담기게 된다.
이를 반복문으로 돌려주면 원하는 순서대로 저장할 수 있게 된다.

```java
beforeAttachmentMap.stream()
	.map(it -> {
    CampaignAttachmentEntity attachment = beforeAttachmentMap.get(it);
    return CampaignAttachmentEntity.builder()
                                    .campaign(attachment.getCampaign())
                                    .fileName(attachment.getFileName())
									....
                                    .build();
    })
    .collect(Collectors.toList());
```

이렇게 해서 이중 반복문 돌려 O(n^2)에서 O(n)이 되었다!
이걸 알면서 뭔가 하나가 뚫린 기분이다 스껄
물론 이방식을 사용하려면 id값이 중복이 없어야한다!

++ Map에 대해서 정리한거

## Map

- 대응 관계를 쉽게 표현 할 수 있는 자료형
- Map이란 리스트나 배열처럼 순차적으로 요소의 값을 구하는 것이 아닌 key를 통해 value(값)를 얻는다.
- key와 value를 하나의 쌍으로 저장하는 방식을 사용
- key 중복 허용 X
- javadml map은 인터페이스로 선언되어 있고, 구현체로 `HashMap`, `TreeMap`, `LinkedHashMap`이 존재

### HashMap<Key,Value>

- HashMap은 Hash Table을 이용하여 만들어짐
- Hash Table은 keydhk value를 저장하며 key를 이용하여 빠르게 데이터를 찾기 위한 자료구조를 가지고 있음.

#### 장점

- key가 index로 변환되어 bucket에 대응하는 곳에 저장하기 때문에 값을 검색하는 것은 선형적으로 접근하는 ArrayList나 LinkedList 대비 더 빠름.
- key를 null 값으로 할 일은 빈번하지 않지만 null key가 가능.

#### 단점

- 데이터를 저장하는데 필요한 메모리보다 훨씬 더 많은 메모리를 필요로 함
- HashMap에 저장된 key를 추출했을 때, 정렬되어 있지 않음

#### 사용 용도

- index가 아닌 Key를 이용하여 데이터 저장과 접근이 필요한 경우 사용한다.
- 데이터의 크기가 어느 정도 예상되는 경우 사용
- 삽입 삭제가 빈번할 경우 사용

#### 주의할점

- 동일한 key로 저장할 경우 기존에 저장된 값이 소멸
- key는 대소문자를 구분
