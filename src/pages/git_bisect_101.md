---
title: "[Git] git bisect 입문"
date: "2016-09-28"
---

원문: [git bisect 공식 문서]

[git bisect 공식 문서]: https://git-scm.com/docs/git-bisect

## 1. git bisect란

Git이 공식적으로 지원하는 문법이자 기능으로서, 이진 검색(binary search)을 사용해 버그가 발생한 것으로 추정되는 커밋 지점을 찾는다.

## 2. 문법

git bisect는 다음과 같이 부-명령(<code>subcommand</code>)과 옵션(<code>options</code>)을 인자로 전달해 실행할 수 있다.

```git
git bisect <subcommand> <options>
```

이 조합을 통해 다음과 같은 명령들을 수행할 수 있다.

```git
git bisect start [--term-{old,good}=<term> --term-{new,bad}=<term>]
	  [--no-checkout] [<bad> [<good>...]] [--] [<paths>...]
git bisect (bad|new) [<rev>]
git bisect (good|old) [<rev>...]
git bisect terms [--term-good | --term-bad]
git bisect skip [(<rev>|<range>)...]
git bisect reset [<commit>]
git bisect visualize
git bisect replay <logfile>
git bisect log
git bisect run <cmd>...
git bisect help
```

## 3. 어떻게 쓰는가

1. git bisect 시작하고 싶은 브랜치의 커밋 시점에서 <code>git bisect start</code>라는 명령을 준다. 주로 문제가 발생한 지점에 해당한다.
1. 현재 버전(version)의 커밋 지점에 문제가 있다는 뜻으로 <code>git bisect bad</code>라는 명령을 준다.
1. 그 다음, 해당 문제가 발생하지 않았던 가장 최근의 지점에 checkout해 <code>git bisect good</code>라는 명령을 준다. Checkout이 귀찮다면 해당 버전을 인자로 전달해도 좋다. 예) <code>git bisect good 버전_명칭</code>
1. 일단 최소 하나의 good 커밋과 하나의 bad 커밋을 지정하게 되면, git bisect는 자동으로 커밋 히스토리(history)의 good과 bad의 중간 지점을 찾아 checkout한 뒤 이 결과에 대한 정보를 다음 형식으로 출력한다: <code>Bisecting: 675 revisions left to test after this (roughly 10 steps)</code>
1. 위의 메시지는 good 커밋과 bad 커밋 사이에 테스트 가능한 675개의 커밋이 존재하며, 약 10번의 git bisect 명령을 통해 문제가 발생한 지점을 찾을 수 있다는 뜻이다.
1. 일단 good 커밋과 bad 커밋의 중간 지점에 checkout된 상태이므로, 해당 커밋에서 목표로 하는 버그가 발생하지 않는 상태(good)인지 아니면 해당 버그가 발생하는 상태(bad)인지 프로그래머가 직접 판단한다. 전자이면 <code>git bisect good</code>, 후자이면 <code>git bisect bad</code> 명령으로 해당 커밋에 표식을 남긴다.
1. 명령이 입력되면 git bisect가 자동으로 기존의 good이나 bad 지점과 새로 입력된 가장 가까운 good 또는 bad 지점의 중간 지점을 찾아 checkout한다.
1. 위의 과정을 반복하여 버그가 발생한 정확한 지점을 탐색한다.

## 4. 생각하기

bisect는 문제의 범위가 상대적으로 넓을 때 문제 해결의 범위를 heuristic하게 좁혀나가는 debugging 전략을 지원하는 git 문법이자 기능이다.
