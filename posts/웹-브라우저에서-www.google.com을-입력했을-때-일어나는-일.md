---
  title: "웹 브라우저에서 www.google.com을 입력했을 때 일어나는 일"
  date: "2024-05-05"
  category: "FE"
  tags: ["면접"]
  summary: "프론트엔드 면접의 단골질문으로 나오는 문제이다.
한번 이번에 공부하면서 좋은 글,번역 글이 있어서 한번 정리할겸 작성해본다."
  pinned: false
  thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/fa15a29d-64cb-4b61-9e23-d0c8fd04c71b/image.png
---

프론트엔드 면접의 단골질문으로 나오는 문제이다.
한번 이번에 공부하면서 좋은 글,번역 글이 있어서 한번 정리할겸 작성해본다.

### 1. `www.google.com`을 브라우저 주소창에 입력을 한다.

![](https://velog.velcdn.com/images/shinju4n/post/fa15a29d-64cb-4b61-9e23-d0c8fd04c71b/image.png)

### 2. 브라우저는 캐싱된 DNS 기록을 통해 `www.google.com`에 대응되는 IP 주소 확인

![](https://velog.velcdn.com/images/shinju4n/post/0c1c7cd6-c118-4c93-9499-6ea1603cdbd2/image.png)
사용자가 웹 브라우저에 `www.google.com`과 같은 도메인 이름을 입력하면, 브라우저는 이를 IP 주소로 변환해야 한다. 이 과정을 `DNS(Domain Name System) 조회`라고 한다.

**DNS의 가장 큰 목적은 사람들에게 편리함을 주기 위해서이다.** 숫자로 된 IP 주소를 작성해도 원하는 웹사이트에 접속할 수 있지만, 매번 랜덤해보이는 숫자들을 검색하는 것은 매우 복잡한 일이다. 사람은 네이버, 다음, 구글처럼 이름을 외우는 것에 더 친숙하기 때문이다. DNS는 이처럼 사람들이 웹사이트 주소에 쉽게 접속할 수 있게 매핑을 해주는 역할을 한다.

컴퓨터는 사람이 읽을 수 있는 도메인 이름 대신 IP주소를 사용하기 때문에, DNS 서버에서 도메인 이름에 해당하는 IP주소를 찾아야한다.

웹 브라우저는 DNS 서버를 검색하기 전, 캐싱된 DNS 기록들을 먼저 확인한다.
이렇게 함으로써 불필요한 DNS 조회를 줄이고 웹 페이지 로딩 속도를 높일 수 있다.

브라우저는 DNS 기록을 4가지의 캐시에서 확인한다.

1. 브라우저 캐시: 브라우저 자체에 저장된 DNS 레코드
2. OS 캐시: 운영체제(OS)의 DNS 캐시
3. 라우터 캐시: 라우터가 캐싱 중인 DNS 기록
4. ISP 캐시: 인터넷 서비스 제공업체(ISP)의 DNS 서버 캐시

### 3. 캐시에 요청된 URL(`www.google.com`)에 대한 IP 주소가 없다면, ISP의 DNS 서버가 maps.google.com을 호스팅하는 서버의 IP 주소를 찾기 위해 DNS 쿼리를 시작한다.

컴퓨터가 `www.google.com`을 호스팅하는 서버와 연결하려면 `www.google.com`의 IP 주소가 필요하다. DNS query의 목적은 올바른 IP 주소를 찾을때 까지 인터넷의 여러 DNS 서버를 검색하는 것이다. 이러한 유형의 검색을 `recursive search` 즉 **재귀 검색**이라고 한다. 검색이 필요한 IP 주소를 찾거나 찾지 못했다는 오류 응답을 반환할 때 까지 DNS 서버에서 DNS 서버로 반복적으로 계속 검색한다.

이 상황에서 ISP의 DNS 서버를 DNS 재귀 서버라고 부른다. 이 서버의 책임은 인터넷의 다른 DNS 서버에 문의하여 의도한 도메인 이름에 대한 적절한 IP 주소를 찾는 것이다.
다른 DNS 서버들은 웹사이트 도메인 이름의 도메인 아키텍처를 기반으로 DNS 검색을 수행하기 때문에 **네임서버**라 불린다.

![](https://velog.velcdn.com/images/shinju4n/post/d143117e-df6c-40a5-9fdc-657fbcc5e666/image.png)

우리가 접하는 많은 웹사이트 URL에는 3차 도메인, 2차 도메인, 최상위 도메인이 포함되어 있다. 이들 각 레벨에는 고유한 네임서버가 있으며, DNS 조회 과정에서 이 네임서버들이 검색된다.

`www.goolge.com`의 경우, 먼저 DNS 재귀 서버가 루트 네임서버에 연결한다.
루트 네임서버는 `.com` 도메인 네임서버로 재귀 서버를 리디렉션한다.
`.com` 네임서버는 `google.com` 네임서버로 재귀서버를 리디렉션하고, google.com 네임서버에서 `www.google.com`에 대한 일치하는 IP 주소를 자체 DNS 레코드에서 찾아 DNS 재귀 서버로 반환하면, 재귀 서버는 해당 IP 주소를 브라우저를 전송한다.

### 4. Browser가 서버와 TCP Connection을 한다.

브라우저가 올바른 IP 주소를 받으면, 그 IP 주소에 해당하는 서버와 연결을 구축하여 정보를 전송한다. 브라우저는 이러한 연결을 구축하기 위해 인터넷 프로토콜을 사용한다.
사용 가능한 여러 인터넷 프로토콜이 있지만, HTTP 요청의 경우에는 일반적으로 TCP를 사용한다.

클라이언트와 서버간에 데이터 패킷을 전송하려면 TCP connection이 되어야한다. 이 연결은 **TCP/IP three-way handshake**라는 프로세스를 통해서 클라이언트와 서버간 connection이 이루어지게 된다. SYN(동기화) 및 ACK(확인) 메세지들을 가지고 연결하는 3단계 과정이다.

1. 클라이언트 머신이 인터넷을 통해 서버로 SYN 패킷을 보내 새 연결을 열 수 있는지 확인한다.
2. 서버에 새 연결을 수락하고 시작할 수 있는 열린 포트가 있다면, SYN/ACK 패킷을 사용하여 SYN 패킷에 대한 확인 응답을 보낸다.
3. 클라이언트가 서버로부터 SYN/ACK 패킷을 받으면 ACK 패킷을 보내 확인한다.

그런 다음 데이터 전송을 휘한 TCP 연결이 수립된다.

### 5. Browser가 웹 서버에 HTTP 요청을 한다.

TCP로 연결이 되었다면, 데이터를 전송할 시간이다.
브라우저는 GET 요청을 통해 서버에게 `www.google.com` 웹페이지를 요구한다. 이 요청에는 브라우저 식별 정보(User-Agent header), 허용하는 요청 유형(Accept header), 추가 요청을 위해 TCP 연결을 계속 유지할 것을 요청하는 연결 헤더 등의 추가 정보가 포함된다. 또한 브라우저가 이 도메인에 대해 저장ㄹ하고 있는 쿠키에서 가져온 정보를 전달한다.

밑 사진은 샘플 GET 요청이다.
![](https://velog.velcdn.com/images/shinju4n/post/85936733-ce1b-4b6b-9f84-b2cd65792e17/image.png)

### 6. 서버가 요청을 처리하고 response를 생성한다.

서버에는 웹 서버가 있어 브라우저로부터 요청을 받고 요청 request handler한테 요청을 받고 response를 생성한다. request handler는 요청, 헤더, 쿠키를 읽어 무엇이 요청되었는지 확인하고 필요한 경우 서버의 정보를 업데이트한다. 그런 다음 특정 형식(JSON, XML, HTML)으로 응답을 만든다.

서버 측에서 요청이 처리되는 일반적인 흐름인 다음과 같다.

1. 웹서버가 브라우저로부터 HTTP 요청을 받는다.
2. 요청은 Request handler(서버 측)로으로 전달된다.
3. Request handler는 요청의 유형(GET,POST 등), 헤더, 쿠키 등을 분석한다.
4. 필요한 경우 Request handler는 데이터베이스 또는 다른 데이터 소스와 상호작용하여 요청된 정보를 가져온다.
5. Request handler는 적절한 형식(HTML, JSON 등)으로 응답을 생성한다.
6. 생성된 응답이 웹 서버로 전달되어 브라우저에 전송한다.

### 7. 서버가 HTTP response를 보낸다.

서버 응답에는 요청한 웹 페이지뿐만 아니라 상태 코드, 압축 유형(\_Content-Encoding), 페이지 캐싱 방법(Cache-Control), 설정할 쿠키, 개인정보 보호 정보등이 포함된다.

HTTP 서버 응답 예시
![](https://velog.velcdn.com/images/shinju4n/post/2a4d416e-74ff-4300-9634-249a391df71e/image.png)

위 response의 첫줄은 status code를 나타낸다. Status code란 현재 response의 상태를 의미하고 총 5가지의 종류가 있다.

1xx은 정보만 담긴 메세지라는 것을 의미한다
2xx response가 성공적이라는 것을 의미한다
3xx 클라이언트를 다른 URL로 리다이렉트함을 의미한다
4xx 클라이언트 측에서 에러가 발생했음을 의미한다
5xx 서버 측에서 에러가 발생했음읠 의미한다

### 8. Browser가 HTML content를 보여준다.

브라우저는 HTML content를 단계적으로 표시한다.
첫번째, 기본 HTML 골격을 렌더링한다. 그런 다음 HTML 태그를 확인하고 웹 페이지의 추가 요소인 이미지, CSS stylesheet, 자바스크립트 파일등을 위한 GET 요청을 보낸다. 이러한 정적 파일은 브라우저에 의해 캐싱되므로, 다음에 같은 페이지를 방문할 때는 가져올 필요가 없다. 결과적으로 브라우저에 `www.google.com`이 나타나게 된다.

> 참고
> https://medium.com/@maneesa/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a > https://devjin-blog.com/what-happen-browser-search/
