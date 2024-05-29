---
  title: "데이터 교환 형식 - JSON"
  date: "2024-05-29"
  category: "CS"
  tags: []
  summary:  "JSON은 JavaScript 객체 문법**으로 구조화된 데이터 교환 형식이다.
Python, JavaScript, Java 등 등 여러 언어에서 데이터 교환 형식으로 쓰이며 객체 문법 외에도 단순 배열, 문자열도 표현 가능하다."
  pinned: false
  thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/786793ed-db65-4eec-9873-ed4334bacf33/image.png
---

![](https://velog.velcdn.com/images/shinju4n/post/786793ed-db65-4eec-9873-ed4334bacf33/image.png)

## ❓ JSON (JavaScript Object Notation)

JSON은 **JavaScript 객체 문법**으로 구조화된 **데이터 교환 형식**이다.
"Python, JavaScript, Java 등 **여러 언어에서 데이터 교환형식**으로 쓰이며 객체 문법 외에도 **단순 배열, 문자열도 표현 가능**하다.

### JavaScript 객체 문법

`키(Key)`와 `값(Value)`으로 구성된다.

```json
{key : value}
```

이미 존재하는 **키를 중복선언하면 나중에 선언한 해당 키에 대응한 값이 덮어쓰이게** 된다.

```json
{
  "name": "kundol",
  "name": "king",
  "name": "kong" // 마지막에 선언된 값으로 지정됨
}
```

### 여러 언어에서 쓰임

JSON은 여러 언어에서도 **독립적으로 쓰인다.**

예를 들어 자바스크립트와 파이썬과 같은 언어들의 버전이 아무리 업데이트 되더라도 JSON은 **독립적**이므로 JSON과 해당되는 로직을 변경할 필요가 없다.

ex)
json in javascript = javascript object
json in python = dict

### 단순 배열, 문자열 표현도 가능하다.

ex)
단순 배열: [1,2,3,4]
문자열 : "abcdefg"

## 🍡 JSON의 타입

JavaScript Object와 유사하지만, undefined, 메서드 등을 포함하지 않는다.

- 수 (Number)
- 문자열 (String)
- 참/거짓 (Boolean)
- 배열 (Array)
- 객체 (Object)
- null

## ⛓️ JSON의 직렬화, 역직렬화

**직렬화**란 **다른 외부의 시스템에서도 사용할 수 있도록** 바이트(byte) 형태로 데이터를 만들어주는 것을 의미한다.

**역직렬화**는 반대로 **내부의 시스템에서도 사용 할 수 있는 오브젝트로 만들어주는 것**을 의미한다.

`JSON.stringify()` `JSON.parse()`

그냥 JS의 객체를 Python의 객체로 변환하지 못한다.
다른 외부의 시스템도 사용할 수 있도록 직렬화 과정을 해줘야 한다.

`JSON.stringify()`를 통해서 **직렬화**를 할 수 있는데 해당 함수는 **JSON 파일을 문자열로 변환**을 해준다.

직렬화 된 JSON 파일을 다시 해당 언어에서 사용할 수 있게 역직렬화 하는 것이 바로 `JSON.parse()` 이다.

## 👋 JSON의 활용

JSON은 프로그래밍 언어와 프레임워크 등에 독립적이므로, 서로 다른 시스템간에 데이터를 교환하기에 좋다.

주로 API의 반환형태, 시스템을 구성하는 설정파일에 활용된다.

ex)
업비트의 API
package.json

![](https://velog.velcdn.com/images/shinju4n/post/cd61eae5-de26-486e-9486-7bdc9dbbf71d/image.png)
