---
title: "[CSS] CSS 유사 선택자"
date: "2020-04-26"
---

[W3Schools Online Web Tutorials: CSS Pseudo-classes]: https://www.w3schools.com/css/css_pseudo_classes.asp

## CSS 유사 선택자란 무엇인가

CSS 유사 선택자는 요소의 특수한 상태를 정의할 때 사용한다.

예컨대, CSS 유사 선택자는 다음과 같은 경우에 사용할 수 있다:

- 사용자가 요소 위에 마우스를 올려놓는 경우 다른 서식을 적용할 떄
- 방문한 링크와 아직 방문하지 않는 링크에 대해 서로 다른 서식을 적용할 때
- 포커스(focus)를 얻은 요소에 대해 다른 서식을 적용할 때

## CSS 유사 선택자의 문법

```css
selector:pseudo-class {
  property:value;
}
```

## 앵커(Anchor)의 유사 선택자

각 링크에는 다음과 같이 서로 다른 서식이 적용될 수 있다:

```css
/* 아직 방문하지 않은 링크 */
a:link {
  color: #FF0000;
}

/* 방문한 링크 */
a:visited {
  color: #00FF00;
}

/* 마우스를 올려놓은 링크 */
a:hover {
  color: #FF00FF;
}

/* 선택된 링크 */
a:active {
  color: #0000FF;
}
```

## CSS 유사 선택자 사용 시 주의할 점

- 보다 나은 성능을 위해, `a:hover`는 CSS 정의상 반드시 `a:link`와 `a:visited` 다음에 선언되어야 한다
- 보다 나은 성능을 위해, `a:active`는 CSS 정의상 반드시 `a:hover` 다음에 선언되어야 한다
- 유사 클래스명은 대소문자를 구분하지 않는다.

## 유사 선택자와 CSS 클래스

유사 선택자는 CSS 클래스와 결합해 사용할 수 있다.
예컨대, 다음 예제 코드를 통해 생성된 페이지의 링크 위에 마우스를 올리면 색이 바뀔 것이다:

```css
a.highlight:hover {
  color: #ff0000;
}
```

## 참고 자료

- [W3Schools Online Web Tutorials: CSS Pseudo-classes]
