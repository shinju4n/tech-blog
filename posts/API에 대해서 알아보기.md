---
  title: "API에 대해서 알아보기"
  date: "2024-05-31"
  category: "CS"
  tags: []
  summary: "API(Application Programming Interface)는 둘 이상의 컴퓨터 프로그램이 서로 통신하는 방법이자 컴퓨터 사이에 있는 중계 계층을 의미한다."
  pinned: false
  thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/bbb174be-d003-4370-a02e-1e29cb48c567/image.png
---

## 🚀 API

**API(Application Programming Interface)** 는 둘 이상의 컴퓨터 프로그램이 서로 통신하는 방법이자 컴퓨터 사이에 있는 중계 계층을 의미한다.
![](https://velog.velcdn.com/images/shinju4n/post/bbb174be-d003-4370-a02e-1e29cb48c567/image.png)

예를 들어 A라는 컴퓨터가 **요청**을 하고 B라는 컴퓨터가 **응답**을 한다고 했을 때의 어떻게 통신할 것인지, 어떠한 데이터를 주고 받을 건지 등에 대한 **방법**이 정의된 **중계계층**을 말한다.

ex)
프로토콜 : HTTP, HTTPS 프로토콜을 사용할 것인지
매서드 : GET 또는 POST인지
데이터 타입 : JSON으로 받을건지 XML로 받을것인지
등등 ..

### Interface

인터페이스 (Interface)는 **서로 다른 두 개의 시스템, 장치 사이에서 정보다 신호를 주고 받는 경우의 접점이나 경계면**이다.
이를 통해 해당 컴퓨터의 내부서버가 어떻게 구현되어있는지는 상관없이 인터페이스를 통해 통신 등이 가능하다.

예를 들어 우리는 네이버 웹툰의 서버나 데이터베이스가 어떻게 구현되어있는지 모른다. 하지만 우리는 인터페이스를 기반으로 웹툰을 고르고 웹툰을 보게된다.
![](https://velog.velcdn.com/images/shinju4n/post/bba89416-7723-488c-ba5e-a859d4f87bf8/image.png)

## API의 작동방식

API는 다음과 같이 중계계층으로 작동한다.
![](https://velog.velcdn.com/images/shinju4n/post/39daaf49-8c53-4949-97b5-bc7bef273955/image.png)

사용자가 브라우저를 통해서 서버에 요청을 하게 되면 API가 중계계층 역할을 하며 요청을 처리하는 것을 볼 수 있다.

## API의 장점

1. **제공자는 서비스의 중요한 부분을 숨길 수가 있다.** 예를 들어 DB 설계 구조나 드러내고 싶지 않은 데이터베이스의 테이블 정보, 서버의 상수값 등을 감추고 보여주고 싶은 부분만 보여줄 수가 있다.

2. 사용자는 해당 서비스가 어떻게 구현되는지 알 필요 없이 필요한 정보만 받을 수 있다.

3. Open API의 경우 앱 **개발 프로세스를 단순화시키고 시간과 비용을 절약**할 수 있다. 예) 소셜 로그인

4. **내부 프로세스가 수정되었을 때 API를 매번 수정하는 것이 아닌 API가 수정이 안 되게 만들 수 있다.** 이를 통해 내부 DB 서버의 로직이 변경되어도 매번 사용자가 앱을 업데이트하는 일이 줄어들 수 있다. 예) DB 튜닝

5. **제공자는 데이터를 한 곳에 모을 수 있다**. 예를 들어 쇼핑몰에서 어떤 상품을 제일 많이 클릭하였는지에 대해 데이터를 수집하고 싶다면 해당 API를 만들고 해당 이벤트가 발생하면 그 API를 호출하게 만들어 해당 데이터를 한 곳에 모을 수 있다. 예) yes24의 베스트셀러, 검색 페이지에서의 사용자 이벤트

## API의 종류

- private : 내부적으로 사용된다.. 주로 해시키를 하드 코딩해놓고 이를 기반으로 서버와 서버간의 통신한다. 이는 비즈니스 파트너와도 사용될 수 있다.

- public : 모든 사람이 사용할 수 있다. 많은 트래픽을 방지하기 위해 하루 요청수의 제한, 계정 당 몇개 등으로 관리한다.
  ex) 네이버 오픈 API 검색의 경우 일일 25,000회로 제한을 걸어 놓는다.

![](https://velog.velcdn.com/images/shinju4n/post/4426fa14-804a-4eba-be38-f6c27842bb9e/image.png)

[> 참고 : 인프런 - CS 지식의 정석](https://www.inflearn.com/course/%EA%B0%9C%EB%B0%9C%EC%9E%90-%EB%A9%B4%EC%A0%91-cs-%ED%8A%B9%EA%B0%95)
