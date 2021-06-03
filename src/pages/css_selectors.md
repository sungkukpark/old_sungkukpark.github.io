---
title: "[CSS] CSS 선택자"
date: "2020-03-21"
---

[W3Schools Online Web Tutorials: CSS Selectors]: https://www.w3schools.com/css/css_selectors.asp
[복합 선택자 (Combinator selectors)]: https://www.w3schools.com/css/css_combinators.asp
[유사-클래스 선택자 (Pseudo-class selectors)]: https://sungkukpark.github.io/css_pseudo_classes/
[유사-요소 선택자 (Pseudo-elements selectors)]: https://www.w3schools.com/css/css_pseudo_elements.asp
[속성 선택자 (Attribute selectors)]: https://www.w3schools.com/css/css_attribute_selectors.asp

## CSS 선택자란 무엇인가

CSS 선택자는 **원하는 서식을 적용할 대상 HTML 요소를 선택하는 것이 그 존재의 목적**이다.

CSS 선택자의 종류는 다양하지만 크게 다음과 같은 5개의 범주로 분류할 수 있다.

- 단순 선택자 (Simple selectors): 특정 이름, 아이디(id), 클래스에 기반해 요소를 선택한다
- [복합 선택자 (Combinator selectors)]: 특정 관계에 기반해 요소를 선택한다
- [유사-클래스 선택자 (Pseudo-class selectors)]: 특정 상태에 기반해 요소를 선택한다
- [유사-요소 선택자 (Pseudo-elements selectors)]: 특정 요소의 일부를 선택한다
- [속성 선택자 (Attribute selectors)]: 특정 속성이나 속성값에 기반해 요소를 선택한다

본문은 가장 기본적인 CSS 선택자만을 설명할 것이다.

## CSS 요소 선택자

요소 선택자는 요소 이름에 기반해 HTML 요소를 선택한다.

예컨대, 다음 코드는 페이지의 모든 `<p>` 요소를 중앙-정렬하고 빨간색 텍스트로 출력될 것이다.

```css
p {
  text-align: center;
  color: red;
}
```

## CSS 아이디 선택자

아이디 선택자는 HTML의 `id` 속성을 참조해 해당 요소를 선택한다.  

`id` 속성의 값은 페이지 내에서 유일무이(unique)하다. 따라서 아이디 선택자는 반드시 단 하나의 요소를 선택하기 위해 사용된다.

특정 아이디를 사용해 요소를 선택하기 위해서는 해쉬 (hash, `#`) 문자를 요소의 `id` 앞에 붙인다.

예컨대, 다음 코드는 `id="para1"` 속성값을 가진 HTML 요소에 해당 효과를 적용할 것이다.

```css
#para1 {
  text-align: center;
  color: red;
}
```

## CSS 클래스 선택자

클래스 선택자는 특정 클래스 속성을 가진 모든 HTML 요소를 선택한다.

이처럼 특정 클래스의 모든 요소를 선택하려면 마침표(period, `.`) 문자를 클래스명 앞에 붙인다.

예컨대, 다음 코드는 `class="center"` 속성값을 가진 HTML 요소에 해당 효과를 일괄 적용할 것이다.

```css
.center {
  text-align: center;
  color: red;
}
```

여기에 더해, 다음처럼 특정 태그를 가진 HTML 요소 중 해당 클래스에 속하는 요소만을 선택할 수도 있다.

예컨대, 다음 코드는 `<p>` 요소이면서 동시에 `class="center"` 속성값을 가진 HTML 요소에 해당 효과를 일괄 적용할 것이다.

```css
p.center {
  text-align: center;
  color: red;
}
```

참고로 HTML 요소는 하나 이상의(다수의) 클래스를 참조할 수 있다. 즉, 하나의 HTML 요소는 여러 클래스에 속할 수 있다.

## CSS 전체 선택자

전체 선택자(*)는 페이지의 모든 HTML 요소를 선택한다.

에컨대, 다음 코드는 페이지의 모든 HTML 요소에 해당 효과를 적용할 것이다.

```css
* {
  text-align: center;
  color: blue;
}
```

### CSS 그룹 선택자

그룹 선택자는 같은 스타일로 정의된 모든 HTML 요소를 선택한다.

다음 CSS 코드를 보면 `h1`, `h2`, `p` 요소가 모두 같은 스타일을 정의하는 것을 알 수 있다:

```css
h1 {
  text-align: center;
  color: red;
}
```

```css
h2 {
  text-align: center;
  color: red;
}
```

```css
p {
  text-align: center;
  color: red;
}
```

이 경우에는 코드의 중복을 피하기 위해 선택자를 묶어서 사용하는 것이 나을 것이다.

이러한 목적으로 사용하는 그룹 선택자는 쉼표(comma, `,`) 문자를 통해 각 선택자를 구분한다.

다음 코드는 그룹 선택자를 통해 위에서 발생한 코드의 중복을 간추린 것이다:

```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

## 모든 CSS 기본 선택자의 종류

| 선택자의 종류       | 예제 코드  | 예제 해설                                       |
|---------------------|------------|-------------------------------------------------|
| .class              | `.intro`     | `class="intro"` 속성을 가진 모든 요소를 선택한다  |
| #id                 | `#firstname` | `id="firstname"` 속성을 가진 모든 요소를 선택한다 |
| *                   | `*`          | 모든 요소를 선택한다                            |
| element             | `p`          | 모든 `<p>` 요소를 선택한다                        |
| element, element, … | `div, p`     | 모든 `<div>`와 `<p>` 요소를 선택한다                |

## 참고 자료

- [W3Schools Online Web Tutorials: CSS Selectors]
