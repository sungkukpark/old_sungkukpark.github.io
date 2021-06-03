---
title: "[macOS] Java 설치하기"
date: "2020-01-03"
---

[brew cask](https://caskroom.github.io/)

[brew cask]를 통한 macOS 상에서의 Java 설치 방법. 아래 명령어를 통해 JDK 8 릴리스를 설치할 수 있다.

```
brew cask install adoptopenjdk/openjdk/adoptopenjdk8
```

설치 이후에 Java가 제대로 설치되었는지 다음 명령어로 확인할 수 있다.

```
java -version
```

이를 통해 출력되는 텍스트는 다음과 유사할 것이다.

```
openjdk version "1.8.0_232"
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_232-b09)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.232-b09, mixed mode)
```
