---
title: "[HTML/CSS/JS] 코드 작성을 쉽고 빠르게: Emmet"
date: "2020-04-13"
---

[Emmet Documentation]: https://docs.emmet.io/

## Emmet이란 무엇인가

Emmet은 VSCode 또는 Atom 등 유명 텍스트 편집기들의 플러그인으로서 코드 스니펫(code snippet)을 통해 코드 작성 시간을 획기적으로 줄이는 방식으로 HTML, CSS, JavaScript 코드 작성 워크플로우를 향상시키는 역할을 한다.

## VSCode에서의 Emmet

Emmet 플러그인은 VSCode에 이미 내장되어 있는(built-in) 기능이기 때문에 별도로 설치할 필요가 없다.

## Emmet의 사용법

Emmet의 사용법은 간단하다. 미리 정해진 문법과 규약대로 코드 스니펫을 입력한 다음 키보드의 탭(tab) 버튼을 눌러주면 코드가 자동완성된다.

### Emmet의 사용 예

#### HTML 기본 문서 만들기

```html
!
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

#### ul 태그와 그 자식으로서의 li 요소 5개 만들기

```html
ul.my-list>li*5
```

```html
<ul class="my-list">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

#### page라는 id를 가진 요소 내에 logo라는 class명을 가진 요소를 만들고 그 안에 navigation이라는 id를 가진 ul 태그 요소를 만들고 그 자식으로서 "Item [숫자 1~5]"라는 문자열을 가진 li 요소 5개 만들기

```html
#page>div.logo+ul#navigation>li*5>a{Item $}
```

```html
<div id="page">
    <div class="logo"></div>
    <ul id="navigation">
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
        <li><a href="">Item 3</a></li>
        <li><a href="">Item 4</a></li>
        <li><a href="">Item 5</a></li>
    </ul>
</div>
```

## 참고할 만한 페이지

- [Emmet Documentation]
