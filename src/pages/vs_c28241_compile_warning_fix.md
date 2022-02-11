---
title: "[Visual Studio] Visual Studio C28241 컴파일 경고 문제 해결"
date: "2022-02-11"
---

[Cannot compile Win32 application in Visual Studio]: https://stackoverflow.com/questions/57040347/cannot-compile-win32-aplication-in-visual-studio/57040399
[Win32 Application 컴파일 안되는 현상]: https://starsia-programming.tistory.com/4

## 경고 메시지 내용

```txt
Warning	C28251: Inconsistent annotation for 'WinMain': this instance has no annotations. See c:\program files (x86)\windows kits\10\include\10.0.19041.0\um\winbase.h(1006).
```

## 해결 방법

1. Project - Property - Linker - System 탭으로 이동
2. SubSystem의 값을 `Console (/SUBSYSTEM:CONSOLE)`에서 `Windows (/SUBSYSTEM:WINDOWS)`로 변경한다

## SubSystem이란?

`/SUBSYSTEM` 옵션은 운영 체제가 `.exe` 파일을 어떻게 실행할지 지정한다. 서브시스템은 링커가 선택할 진입 지점 심볼(또는 진입 지점 함수)에 영향을 준다.

## 참고 자료

- [Cannot compile Win32 application in Visual Studio]
- [Win32 Application 컴파일 안되는 현상]
