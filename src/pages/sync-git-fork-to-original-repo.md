---
title: "[Git] Git Fork 저장소와 원본 저장소를 동기화하기"
date: "2020-01-05"
---

다음은 Git Fork 저장소와 원본 저장소를 동기화하는 방법이다.

### 원격 저장소를 Upstream 저장소로 추가하기

우선, 원격 저장소를 출력한다. 이 경우, 현재 Fork된 저장소만이 출력될 것이다.

```
$ git remote -v

    origin https://github.com/[Your UserName]/[Your Fork].git (fetch)
    origin https://github.com/[Your UserName]/[Your Fork].git (push)
```

이때, `remote add upstream` 명령으로 원본 저장소를 Upstream 저장소로 새로 추가한다.

```
$ git remote add upstream https://github.com/[Original Owner Username]/[Original Repository].git
```

이후, 다시 원격 저장소를 출력해보면 Fork 저장소에 더해 원격 저장소가 추가된 것을 확인할 수 있다.

```
$ git remote -v

    origin https://github.com/[Your UserName]/[Your Fork].git (fetch)
    origin https://github.com/[Your UserName]/[Your Fork].git (push)
    upstream https://github.com/[Original Owner UserName]/[Original Repository].git (fetch)
    upstream https://github.com/[Original Owner UserName]/[Original Repository].git (push)
```

### 원격 저장소를 Fork 저장소에 병합하기

이제 다음 명령들을 통해 원격 저장소를 Fork 저장소에 병합하면 동기화 과정이 완료된다.

```
$ git fetch upstream
$ git checkout master
$ git merge upstream/master
$ git push origin master
```

### 요약

```
$ git remote add upstream https://github.com/[Original Owner Username]/[Original Repository].git
$ git fetch upstream
$ git checkout master
$ git merge upstream/master
$ git push
```

---

원작자: Justin James<br>
원문: [Sync your Git Fork to the Original Repo](https://digitaldrummerj.me/git-syncing-fork-with-original-repo/)<br>
원문 작성일: 2015년 9월 28일
