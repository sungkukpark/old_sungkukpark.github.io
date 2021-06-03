---
title: "[Git] 특정 명령을 실행할 때마다 프롬프트 페이지를 여는 옵션 끄기"
date: "2020-01-12"
---

Git의 특정 명령을 실행할 때마다 프롬프트 페이지가 열려 신경이 쓰이는 경우가 있다.
이때, 원하는 스코프(scope)에 따라 명령 프롬프트에 다음 명령을 입력한다.

---

현재 위치한 저장소에 대한 한정(local) 설정

##### SYNOPSIS
```git config pager.[subcommand keyword] [on | off]]```

##### EXAMPLE
`git config pager.branch false`

---

모든 Git 저장소에 대한 전역(global) 설정:

##### SYNOPSIS
```git config --global pager.[subcommand keyword] [on | off]```

##### EXAMPLE
```git config pager.branch false```

---

## 참고문헌

- [How to make git log not prompt to continue? - Stack Overflow](https://stackoverflow.com/questions/7736781/how-to-make-git-log-not-prompt-to-continue)
