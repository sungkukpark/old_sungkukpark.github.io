---
title: "[TCPL] 널 문(null statement)이란 무엇인가"
date: "2018-10-13"
---

[The C Programming Language]: https://www.cs.princeton.edu/~bwk/cbook.html

C는 문법적으로 for 문의 경우에는 반드시 몸통 부분(body)을 갖도록 강제하고 있다[TCPL, p.18]. 만약 for 문에서 초기화(initialization), 반복 조건(condition), 몸통(body of the loop)이 모두 실행되고 나면, 더는 필요한 명령이 존재하지 않을 수 있다. 다음 예시 코드를 보자:

```c
#include <stdio.h>

/* count characters in input */
int main(int argc, char const *argv[])
{
    // 문자의 개수
    int nc;

    // getchar()가 개행 문자를 만날 때까지
    // nc의 값을 1 증가시킨다
    for (nc = 0; getchar() != '\n'; nc++)

    // 모든 문자의 개수를 출력한다    
    printf("%d", nc);
    return 0;
}
```

위의 코드에서 for 문은 주석으로 표시된 역할을 모두 수행하므로, 추가적인 명령은 불필요하다.
그러나, 만약 여기서 코드를 컴파일한 뒤에 실행하게 되면 의도치 않은 결과를 확인할 수 있다.

```c
    for (nc = 0; getchar() != '\n'; nc++)

    // 모든 문자의 개수를 출력한다    
    printf("%d", nc);
```

> 입력: test<br>
> 결과: 0123

이는 for 문이 그 다음 라인에 있는 printf("%d", nc); 문장을 몸체(body)로 간주해서 그런 것이다.
이때문에, 아무리 for 문이 그 자체로 충분하더라도, 위의 경우에는 세미콜론(';')을 작성해 빈 문장을 추가해줘야 한다.
이처럼 어떤 명령도 포함하지 않되 ';'로 종료되어 그 자체로 문장으로 인식되는 문장을 **널 문(null statement)**이라 부른다.

```c
    for (nc = 0; getchar() != '\n'; nc++)
        ;

    // 모든 문자의 개수를 출력한다    
    printf("%d", nc);
```

> 입력: test<br>
> 결과: 4

물론 널 문은 다음 예시처럼 for 문 바로 뒤에 추가할 수도 있지만:

```c
    for (nc = 0; getchar() != '\n'; nc++);
```

해당 문장이 별도의 문장으로서 기능한다는 것을 명시적으로 표시하기 위해 for 문 다음 줄에 추가하는 것을 권장한다.

---

원문: [The C Programming Language]
