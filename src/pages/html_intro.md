---
title: "[HTML] HTML 입문"
date: "2020-03-14"
---

[W3Schools Online Web Tutorials: HTML Introduction]: https://www.w3schools.com/html/html_intro.asp
[마크업 언어란?]: https://sungkukpark.github.io/markup_language/

## HTML이란 무엇인가

HTML은 웹 페이지를 생성(create)하는 용도로 쓰이는 표준 마크업 언어[^1]이다.

- HTML은 하이퍼 텍스트 마크업 언어(Hyper Text Markup Language)의 약자이다
- HTML은 웹페이지의 구조를 서술한다
- HTML은 요소(elements)로 구성이 된다
- HTML의 요소는 브라우저에게 어떤 컨텐트(content)를 표시할것인지를 지시한다
- HTML의 요소는 태그(tags)를 통해 표현된다(are represented)
- HTML의 태그는 각 컨텐트에 "제목(heading)", "문단(paragraph)", "테이블(table)" 등의 명칭(label)을 붙인다
- 브라우저는 HTML 태그를 표시하지 않는다(do not display). 대신 브라우저는 HTML 태그를 통해 페이지의 컨텐트를 출력한다(render)

## 가장 단순한 HTML 문서 예시

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- 주석은 이런 식으로 작성한다 -->
        <title>페이지의 제목</title>
    </head>
    <!-- 브라우저에서 실제 출력되는 부분은 오직 <body> 태그 내부 컨텐트일 뿐이다 -->
    <body>
        <h1>첫 번째 가장 중요한 표제</h1>
        <p>첫 번째 문단</p>
    </body>
</html>
```

## 가장 단순한 HTML 문서 설명

- `<!DOCTYPE html>` 선언은 이 문서가 HTML5 문서임을 정의한다(defines)
- `<html>` 요소는 HTML 페이지의 루트(root)[^2] 요소이다
- `<head>` 요소는 문서의 메타 정보[^3]를 포함한다
- `<title>` 요소는 문서의 제목을 지정한다. 여기서 지정된 텍스트는 브라우저 상단 탭에 표시된다
- `<body>` 요소는 가시적인(visible) 페이지 컨텐트 내용을 정의한다. 여기서 "가시적"이라는 말은 브라우저에서 **오로지** 이 태그로 정의된 영역 내부의 컨텐트만을 시각적으로 출력한다는 의미이다. 이 컨텐트 내용의 구성 요소는 텍스트, 하이퍼링크(hyperlinks), 이미지, 동영상, 테이블, 리스트 등 어떤 것이든 될 수 있다
- `<h1>` 요소는 가장 중요한 표제(標題, heading)를 정의한다
- `<p>` 요소는 문단(paragraph)을 정의한다

## HTML 태그

HTML 태그는 다음과 같이 홑화살괄호(angle brackets)로 둘러싸인 식으로 표기되는 요소이다. 각 태그는 고유의 태그명(tagname)을 가진다.

```html
<태그명>컨텐트는 여기에 들어간다...</태그명>
```

- HTML 태그는 일반적으로 `<p>`와 `</p>`처럼 쌍으로 (in pairs) 주어진다
- 한 쌍의 태그에서의 첫 번째 태그는 시작 태그(start tag)라고 부르고, 두 번째 태그는 끝 태그(end tag)라고 부른다
- 끝 태그는 시작 태그와 동일하게 표기되지만 정방향 슬래시(forward slash, `/`)를 태그명 직전에 포함한다

> 팁: 시작 태그를 "여는 태그(opening tag)"라고 하고 끝 태그를 "닫는 태그(closing tag)"라고도 부른다

## <!DOCTYPE> 선언

- `<!DOCTYPE>` 선언은 문서의 타입을 표현한다. 이는 브라우저로 하여금 웹페이지를 지정된 타입별로 정확하게 표현하도록 도와준다.
- `<!DOCTYPE>` 선언은 페이지의 최상단에 **반드시 단 한 번만** 등장해야 한다 (어떤 HTML 태그보다도 그 이전에).
- `<!DOCTYPE>` 선언은 대소문자를 구별하지 않는다(not case sensitive).
- HTML5 문서 타입을 선언하는 `<!DOCTYPE>` 선언은 다음과 같다:

```html
<!DOCTYPE html>
```

## 참고 자료

- [W3Schools Online Web Tutorials: HTML Introduction]

[^1]:
    마크업 언어(Markup language)란 태그(tags)를 사용해 문서의 요소(element)를 정의하는 언어이다. 마크업 언어는 인간이 읽을 수 있다. 이는 곧 전형적인 프로그래밍의 문법이 아니라 표준적인 단어를 언어의 구성 요소로서 사용한다는 뜻이다. 마크업 언어로서 가장 널리 쓰이는 것은 HTML과 XML이다. 마크업 언어에 대한 더 자세한 정보는 [마크업 언어란?]에서 참조하도록 할 것.
[^2]:
    루트(root)는 트리 구조에서 최상위의 요소를 가리킨다. 예컨대, 성경의 세계관에서 인류의 루트는 "아담과 하와"이다.
[^3]:
    메타(meta)는 그리스어 μετά에서 유래한 언어로서 라틴어의 "~ 뒤의(post-)" or "~에 대하여(ad-)"라는 접두사에 대응하는 단어이다. 어원학적으로나 일상적으로나 메타는 "(그 자신의 범주) ~에 대하여"라는 뜻으로 흔히 쓰인다. 예컨대, 메타데이터(metadata)는 "데이터에 대한 데이터"로서 특정 데이터가 누구에 의해 생성되었는지, 언제 생성되었는지, 어떤 포맷의 데이터인지 등에 대한 정보를 포함한다.