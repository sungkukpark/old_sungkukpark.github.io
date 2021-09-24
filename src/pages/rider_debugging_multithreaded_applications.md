---
title: "[Rider] Rider에서 멀티스레드 어플리케이션 디버깅하기"
date: "2021-09-24"
---

원문: [Run, debug, test, deploy | Debugging | Debug multithreaded applications](https://www.jetbrains.com/help/rider/Debugging_Multithreaded_Applications.html)

멀티스레드 어플리케이션은 여러 스레드를 동시에 추적해야 하기 때문에 디버깅하기 힘들다. 심지어, 멀티스레드 어플리케이션은 불균등한 부하 분산, 락(lock) 경쟁, 직렬화된 실행 등의 새로운 형태의 버그와 성능 문제를 일으킨다.

The illusion of a sequential flow you get from stepping in a debug session does not help while debugging a multithreaded app and can be misleading. When investigating issues that can be concurrency bugs, you should rely more on breakpoints rather than on sequential stepping. For example, conditional breakpoints can help you a lot if you want to focus on just one thread: just use some unique property of your thread (for example thread ID) to trigger the breakpoint; data breakpoints will break the execution when a marked property of a specific object changes by any thread.

JetBrains의 Rider는 멀티스레드 어플리케이션의 디버깅을 단순화시키는 다음 기능들을 제공한다:

- 좌측의 **Threads** 패널은 어플리케이션의 모든 스레드들을 표시한다.

- 우측의 **Frames** 화면은 선택된 스레드의 모든 스택 프레임을 표시한다.

- **Parallel Stacks** 패널은 스레드 분석을 단순화시켜 스레드와 해당 스레드의 스택 프레임을 다이어그램의 형태로 표시한다.
