---
title: "[C] Mac에 clang 설치하기"
date: "2021-09-27"
---

1. 우선 터미널을 연 뒤 다음 명령으로 clang이 Mac에 설치되어 있는지 확인한다.

```shell
clang --version
```

2. Mac에 clang이 정상적으로 설치되어 있다면 다음과 같은 문구가 출력될 것이다.

```shell
Apple clang version 13.0.0 (clang-1300.0.29.3)
Target: x86_64-apple-darwin20.5.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/**XcodeDefault**.xctoolchain/usr/bin
```

3. 만약 clang이 설치되어 있지 않다면, 다음 명령으로 XCode Command Line Tools를 설치한다.

```shell
xcode-select --install
```
