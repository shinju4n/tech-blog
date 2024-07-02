---
title: "Spring 이벤트 리스너에서 @TransactionalEventListener 사용했을 때 후 작업이 저장 안된 이슈"
date: "2023-08-12"
category: "BE"
tags: ["Spring Boot","에러"]
summary: "DB 수정 작업후 로그를 DB에 저장하면 저장이 되지않는 이슈 발생

메소드가 실행되는 트랜잭션의 설정이나 범위가 올바르게 구성되어 있지 않으면 데이터베이스 작업이 롤백됨
=> 첫번째 DB에서 transaction이 끊겨서 로그가 저장되지 않음"
pinned: false
thumbnailUrl: https://velog.velcdn.com/cloudflare/alswl689/105df2e3-cbbd-45c3-920b-68b65dc471d7/springbootImg.png
---

### 오류 발생 원인

DB 수정 작업후 로그를 DB에 저장하면 저장이 되지않는 이슈 발생

메소드가 실행되는 트랜잭션의 설정이나 범위가 올바르게 구성되어 있지 않으면 데이터베이스 작업이 롤백됨
=> 첫번째 DB에서 transaction이 끊겨서 로그가 저장되지 않음

### 해결

@Transactional(propagation = Propagation.REQUIRES_NEW)를 추가하여
해결 (비동기 처리)

### @TransactionalEventListener란

@TransactionalEventListener는 동작하는 메서드를 트랜잭션으로 묶어서 처리하는 경우 Transaction의 상태에 따라 발생하는 이벤트를 처리해 주는 이벤트 리스너

- 이벤트 처리와 트랜잭션 관리의 결합: 이벤트를 처리하는 동안 트랜잭션 내에서 데이터베이스 작업을 수행해야 할 때 사용 이벤트 발생 시 트랜잭션이 커밋된 이후에 해당 이벤트를 처리

- 이벤트의 안전한 처리: 이벤트 처리 중에 발생하는 예외로 인해 트랜잭션이 롤백될 수 있습니다. 이로 인해 데이터베이스 변경 사항도 롤백되어 일관성을 유지

### @TransactionalEventListener 옵션

phase 옵션을 통해 트랜잭션 상태에 따른 이벤트 처리

#### @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)

default 값이며, 트랜잭션이 commit 되었을 때 이벤트를 실행

#### @TransactionalEventListener(phase = TransactionPhase.ROLLBACK)

트랜잭션이 rollback 되었을 때 이벤트를 실행

#### @TransactionalEventListener(phase = TransactionPhase.AFTER_COMPLETION)

트랜잭션이 completion(commit 또는 rollback) 되었을 때 이벤트 실행

#### 4. @TransactionalEventListener(phase = TransactionPhase.BEFORE_COMMIT)

트랜잭션이 commit 되기 전에 이벤트를 실행
