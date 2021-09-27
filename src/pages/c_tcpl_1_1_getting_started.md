---
title: "[C] The C Programming Language 1.1 시작하기"
date: "2020-06-25"
---

## 첫 프로그램 작성

### "hello, world"라고 출력하는 프로그램을 작성하라

```c
// hello.c
#include <stdio.h>

// Print the words "hello, world"
int main()
{
    printf("hello, world\n");
}
```

### Mac에서 c 파일을 컴파일하기

```shell
cc hello.c
```

### Mac에서 c 파일을 실행하기

```shell
./a.out
```

## 개념 정리

### 함수(function)

실행되어야 되는 컴퓨팅 명령들을 지정한 문장(statements)을 담는 곳. 예제 내에서 함수 내의 문장들은 중괄호 { }로 묶여 함수의 시작과 끝을 나타낸다.

### 변수(variables)

컴퓨테이션 중에 사용될 값을 보관하는 곳.

### "main" 함수의 의미

"main"이란 이름은 특별한 함수 이름(함수명)으로서 c 프로그램은 항상 main 함수의 첫 번째 문장부터 실행된다. 함수는 본래 인자(argument)를 받을 수 있으나 위의 예제의 경우는 소괄호 ( ) 내에 아무 것도 없는 것으로 인자를 넘기지 않는 경우에 해당한다.

### #include <stdio.h>의 의미

표준 입출력 라이브러리(standard input/output library)의 정보를 포함할 것을 컴파일러에게 명한다.

### \n 문자의 의미

`\n` 문자는 개행 문자(newline character)로서 출력될 때 출력문을 다음 문장의 왼쪽 여백으로 줄바꿈을 하는 역할을 한다. 이는 두 문자로 구성되었지만 하나의 확장문자(escape sequence)로 간주되며, 이러한 확장 문자는 현실적으로 표기가 어렵거나 비가시적인 메커니즘을 표현할 때 사용한다. 예컨대, C 언어는 같은 식으로 탭을 `\t`로 표현하고, 큰따옴표를 `\"`로 표현하며, 백슬래시를 `\\`로 표현한다.

## 연습 문제

### Exercise 1-1

"hello, world" 프로그램을 시스템에서 실행해보고 일부 문장들을 제거함으로써 어떤 에러 메시지가 뜨는지 알아보자.

### Answer 1-1

세미콜론 `;`를 빼먹었을 때 `cc` 명령을 실행했을 때 다음과 같은 에러 메시지가 출력된다.

```shell
a.c:5:28: error: expected ';' after expression
    printf("hello, world!")
                           ^
                           ;
1 error generated.
```

### Exercise 1-2

`printf` 함수의 인자로 전달되는 문자열에 `\c`를 포함해 어떤 결과가 출력되는지 알아보자.

### Answer 1-2

`cc` 명령을 실행했을 때 다음과 같은 경고 메시지가 출력되면서 `c`라는 문자가 그대로 출력된다.

```shell
a.c:5:26: warning: unknown escape sequence '\c' [-Wunknown-escape-sequence]
    printf("hello, world!\c");
                         ^~
1 warning generated.
```
