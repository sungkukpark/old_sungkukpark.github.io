---
title: "[C++] 요다 조건 (Yoda Condition)"
date: "2015-07-04"
---

[![Best Yoda Quotes | The StarWars.com 10](http://img.youtube.com/vi/kDoY_zXf7uQ/0.jpg)](http://www.youtube.com/watch?v=kDoY_zXf7uQ)

프로그래밍 용어인 요다 조건(Yoda condition), 또는 요다 표기법(Yoda notation)은 기존의 조건문에 있어 수식의 순서를 반전(reverse)시킨 프로그래밍 스타일이다. 즉, 요다 조건은 수식의 상수부(constant portion)를 조건식의 왼쪽에 둔다. 이 용어는 스타워즈의 캐릭터 요다(Yoda)의 이름에서 비롯했는데, 요다는 영어를 기존의 구문(syntax), 즉 문장의 순서를 기존의 영어 구문과 다르게 문장을 구사하기 때문이다. 예를 들어, 위의 영상에서 요다의 어록 9위에 오른 "Truly wonderful, the mind of child is."라는 문장은, "아이들의 정신은 실로 놀랍군(The mind of child is truly wonderful)."이라는 기존의 문장의 술부(述部)를 주부(主部)와 뒤바꾸고 있다. 이러한 요다 조건은 WordPress의 코딩 표준으로 사용되고 있다.

## 요다 조건의 장점

상수 값을 수식의 왼쪽에 두든 오른쪽에 두든 프로그램의 동작 자체에는 영향을 주지 못한다. 요다 조건은 프로그래머가 조건문에서 상등연산자(equality operator) '=='를 대입 연산자(assignment operator) '='로 잘못 작성해 의도치 않은 대입이 일어나는 것을 미연에 방지하기 위해 쓰인다.

## 요다 조건의 예시

1. 기존 조건문
```cpp
char* str = "Yoda";
if (str == NULL)
{
    cout << "var is NULL";
}
```

2. 기존 조건문의 상등 연산자가 대입 연산자로 잘못 작성된 경우
```cpp
char* str = "Yoda";
if (str = NULL)
{
    cout << "var is NULL";
}
```

3. 요다 조건
```cpp
char* str = "Yoda";
if (NULL == str)
{
    cout << "var is NULL";
}
```

4. 요다 조건이 미연에 발생시키는 컴파일 오류
```cpp
char* str = "Yoda";
if (NULL = str)
{
    cout << "var is NULL";
}
```

## 요다 조건에 대한 비판

요다 조건에 대한 첫 번째 비판은 해당 표기법이 **가독성(readability)**을 떨어뜨린다는 것이다. 두 번째로, 요다 조건은 C++에서 기본 타입이 아닌 사용자 정의형을 비교하는 상등 연산자 '=='를 오버로딩 했을 시, 그 순서가 바뀜에 따라 해당 순서에 맞는 오버로딩이 존재하지 않게 되는 문제점도 가지고 있다.

## 참고문헌

- https://en.wikipedia.org/wiki/Yoda_conditions