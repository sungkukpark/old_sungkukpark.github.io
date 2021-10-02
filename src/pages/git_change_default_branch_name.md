---
title: "[Git] git 디폴트 브랜치 이름을 변경하는 방법"
date: "2021-10-02"
---

## 문제 제기

기존의 git의 디폴트 브랜치 이름은 `master`였다. 그러나, 인종차별주의적이거나 주종 관계 (master/slave)를 의미하는 IT 용어들을 순화하고자 하는 운동의 일환으로 git의 디폴트 브랜치 이름을 `master`에서 `main`으로 변경하는 요구가 발생했다.

## git 디폴트 브랜치 이름을 변경하는 방법

디폴트 브랜치의 이름은 다음 명령으로 변경 가능하다:

```git
git config --global init.defaultBranch <name>
```

디폴트 브랜치 이름 `master`의 대안으로 흔히 채택되는 것은 `main`, `trunk`, `development` 등이다.

## 이미 생성된 브랜치 이름을 변경하는 방법

이미 생성된 브랜치 이름은 다음 명령을 통해 변경하면 된다:

```git
git branch -m <name>
```
