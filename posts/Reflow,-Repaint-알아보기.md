---
title: "Reflow/Repaint 알아보기"
date: "2023-11-11"
category: "FE"
tags: ["웹 최적화"]
summary: "
최근에 Reflow와 Repaint에 대해서 알게 되었는데, 이 두가지가 웹 성능에 영향을 미치는지 알게 되었다.
웹 개발자로써 Reflow와 Repaint에 대한 지식을 내 것으로 만들기 위해 이 포스팅을 작성하게 되었다."
pinned: false
thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/be4a1b9d-88e0-4eff-b051-197dbaee0e81/image.png
---

### 💪 들어가며..

최근에 Reflow와 Repaint에 대해서 알게 되었는데, 이 두가지가 웹 성능에 영향을 미치는지 알게 되었다.
웹 개발자로써 Reflow와 Repaint에 대한 지식을 내 것으로 만들기 위해 이 포스팅을 작성하게 되었다.

### 👨‍💻 브라우저가 웹사이트를 렌더링하는 방식

![](https://velog.velcdn.com/images/shinju4n/post/be4a1b9d-88e0-4eff-b051-197dbaee0e81/image.png)
먼저 토픽으로 넘어가기 전에, 브라우저가 웹사이트를 렌더링하는 방식에 대해서 이해해보자.

1. 사용자가 URL을 입력하면, 서버에서 HTML 코드를 가져온다.
2. 브라우저는 HTML 소스 코드를 구문 분석하여 토근으로 변환한다.(<,태그 이름, 속성, 속성값, >)
3. 토큰은 노드로 변환되어 DOM 트리를 구성한다.
4. CSS 규칙에서 CSSOM 트리가 생성된다.
5. DOM과 CSSOM 트리는 렌더 트리로 결합된다.
6. 렌더 트리는 다음과 같이 구성된다.
   - DOM 트리의 루트부터 시작하여 어떤 요소가 보이는지와 그들의 계산된 스타일을 계산한다.
   - 렌더 트리는 메타, 스크립트, 링크와 같이 보이지 않는 요소(display:none)를 무시한다.
   - 보이는 노드를 적절한 CSSOM 규칙과 일치시켜 적용한다.
7. Reflow: 각 보이는 노드의 위치와 크기를 계산한다.
8. Repaint: 이제 브라우저는 렌더 트리를 화면에 그린다.

### 🤔 Repaint와 Reflow

**Repaint**는 요소의 외관을 변경하지만 레이아웃에는 영향을 주지 않는 변경이 발생할 때 발생한다.
ex) visibility, background color, outline

**Reflow**는 문서의 요소들의 위치와 기하학적인 속성을 다시 계산하는것을 의미한다.
Reflow는 페이지의 일부 또는 전체 레이아웃에 여양을 주는 요소에 변경이 발생할 때 발생한다.
요소의 Reflow는 DOM에서 모든 하위 요소 및 부모 요소의 Reflow를 유발한다.

### ❓발생하는 원인

- DOM 노드를 추가, 제거, 업데이트할 때, Reflow가 발생한다.
- display: none으로 DOM 요소를 숨길 경우 Reflow/Repaint가 모두 발생한다.
- visibility: hidden으로 DOM 요소를 숨길 경우 레이아웃이나 위치 변경이 없으므로 Repaint만 발생한다.
- DOM 노드를 이동하거나 애니메이션을 적용할 경우 Reflow/Repaint가 발생한다.
- 창 크기를 조정할 경우 Reflow가 발생한다.
- 글꼴 스타일을 변경하면 요소가 변경하면 다른 요소의 위치나 크기에 영향을 줄 수 있다. 그리하여 Reflow를 수행 하고 레이아웃 작업이 완료되면 Repaint가 발생한다.
- Stylesheet를 제거해도 Reflow/Repaint가 발생한다.

### 👍 Reflow/Repaint 최소화 방법

##### 1. 불필요한 노드 display:none

visibility: invisible은 Layout 공간을 차지하기 때문에 Reflow의 대상이 된다.
display: none은 Layout의 공간을 차지하지 않아 Render Tree에서 아예 제외된다.
그러므로 불필요한 노드는 display:none을 활용하여 렌더링 성능을 향상 시킬 수 있다.

##### 2. 애니메이션은 position: fixed, absoulte

애니메이션, 트랜지션 등의 많은 Reflow 연산을 발생시키는 효과들은 fixed나 absoulte를 주어 노드를 분리하면 해당 노드만 Reflow가 발생하게 만들 수 있다.

##### 3. `<table>` 지양하기

테이블은 점진적으로 렌더링 되지 않고 내부 콘텐츠가 모두 로딩된 후에 그려진다.
그래서 작은 콘텐츠의 변경만 있어도 테이블의 모든 노드에 Reflow가 발생.
만약 사용해야만하면, table-layout:fixed를 통해 테이블의 크기를 고정하는 것도 좋은 방법

##### 4. CSS 하위 선택자 줄이기

하위 선택자가 많아지면 CSSOM Tree의 깊이가 깊어지고 Render Tree를 만드는 시간이 늘어나게 된다.
또한 Reflow마다 부모 선택자를 매칭하는 연산이 길어지는 만큼 성능에 영향을 미침

##### 5. 이벤트 핸들러 최적화

이벤트가 Reflow를 일으킬 수 있으므로 이벤트 헨들ㄹ러를 최적화하고 필요한 경우에만 실행하도록 조절

### 👀 Reflow가 발생하는 속성

크기 및 위치와 관련된 속성:

- width
- height
- margin
- padding
- border
- top
- bottom
- left
- right

폰트와 텍스트와 관련된 속성:

- font-size
- line-height
- text-align
- text-transform
- white-space

박스 모델 관련 속성:

- display
- position
- float
- clear

플렉스 및 그리드 레이아웃과 관련된 속성:

- flex
- flex-grow
- flex-shrink
- order
- grid-template-columns
- grid-template-rows

레이어 관련 속성:

- z-index

배경과 관련된 속성:

- background
  Box 모델과 관련된 속성:
- box-sizing

테두리 반경과 관련된 속성:

- border-radius

Transform과 관련된 속성:

- transform

Table 관련 속성:

- table-layout
- border-spacing
- border-collapse

Position 속성과 관련된 속성:

- position
- top
- bottom
- left
- right

#### 👀 Repaint가 발생하는 속성

색상과 배경 속성:

- color: 텍스트의 색상을 지정합니다.
- background-color: 요소의 배경 색상을 지정합니다.
- background-image: 배경 이미지를 설정합니다.
- background-position: 배경 이미지의 위치를 지정합니다.

테두리와 관련된 속성:

- border-color: 테두리의 색상을 설정합니다.
- border-style: 테두리의 스타일을 설정합니다.
- border-width: 테두리의 두께를 설정합니다.

그림자와 관련된 속성:

- box-shadow

Outline 속성:

- outline-color
- outline-style
- outline-width

참고 자료
https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg
