---
title: '데이터 교환 형식 - XML'
date: '2024-05-29'
category: 'CS'
tags: []
summary: 'XML(Extensible Markup Language)이란 마크업 형태를 쓰는 데이터 교환 형식이다.'
pinned: false
thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/f9e1f614-0253-42b7-bfa6-1cf22bc0f91b/image.png
---

![](https://velog.velcdn.com/images/shinju4n/post/f9e1f614-0253-42b7-bfa6-1cf22bc0f91b/image.png)

## ❓XML이란?

XML(Extensible Markup Language)이란 **마크업 형태**를 쓰는 **데이터 교환 형식**이다.

### 마크업 형태

마크업(markup)은 택스트에 **태그 등을 이용**하여 문서나 데이터의 구조를 나타내는 방법이다. `HTML`, `XML`, `Markdown` 등이 대표적인 마크업 언어이다.

### XML 구성

1. 프롤로그 : 버전, 인코딩
2. 루트요소 (단, 하나만)
3. 하위 요소들

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
    <element>
        <subelement>Value</subelement>
    </element>
</root>
```

### HTML과 XML 차이

1. HTML은 **데이터 표시** / XML은 **데이터를 저장 및 전송**
2. **HTML에는 미리 정의된 태그**가 있지만 사용자는 **XML에서 고유한 태그를 만들고 정의**하는 것이 가능하다.
3. XML은 대/소문자를 구분하지만 HTML은 구분하지 않는다. `<book> ` 대신 `Book`으로 태그를 작성하면 XML 구문 분석기에서 오류가 발생한다.

```xml
// xml
<?xml version="1.0" encoding="UTF-8"?>
<library>
    <book>
        <title>Harry Potter and the Sorcerer's Stone</title>
        <author>J.K. Rowling</author>
        <year>1997</year>
    </book>
    <book>
        <title>The Hobbit</title>
        <author>J.R.R. Tolkien</author>
        <year>1937</year>
    </book>
</library>

```

```html
// html
<!doctype html>
<html>
  <head>
    <title>Example Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is an example of a simple HTML page.</p>
    <a href="https://www.example.com">Visit Example.com</a>
  </body>
</html>
```

### JSON과 XML 비교

JSON과 비교했을 때 닫힌 태그가 계속해서 들어가기 때문에 **XML이 JSON과 비교하면 무겁다**.

또한 Javascript Object로 변환하기 위해서 JSON보다는 더 많은 노력이 필요하다.(JSON은 JSON.parse() 면 됩니다.)

### sitemap.xml

xml은 대표적인 예로는`sitemap.xml`
sitemap.xml은 서비스 내의 모든 페이지들을 리스트업한 데이터이다.
사이트가 매우 크거나 서로 링크가 종속적으로 연결되지 않은 경우 크롤러가 일부 페이지를 누락하는 일이 있는데 이를 sitemap.xml이 방지하고 모든 페이지들을 크롤링할 수 있도록 해준다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://www.example.com/foo.html</loc>
    <lastmod>2018-06-04</lastmod>
</url> <url>
    <loc>http://www.example.com/abc.html</loc>
    <lastmod>2018-06-04</lastmod>
  </url>
</urlset>
```
