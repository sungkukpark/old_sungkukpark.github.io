---
title: "[Windows] 특정 경로에 symbolic link 생성하기"
date: "2019-07-21"
---

1. 먼저 symbolic link를 생성할 경로로 이동한다.<br>
2. 이후, 명령 프롬프트에 다음 명령을 입력한다.

`mklink /j <Link> <Target>`

## 문법

- **/j** -> Directory Junction을 생성하라
- **Link** -> 생성할 symbolic link 이름
- **Target** -> 해당 symbolic link가 참조할 상대 또는 절대 경로

## 참고문헌

- https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/mklink