---
title: "[Git] 맥에서 숨겨진 파일 표시하기"
date: "2019-04-21"
---

1. Terminal을 실행한 뒤, 다음 명령을 실행한다 (OS X 10.9 이후 버전 기준):

    <code>
    defaults write com.apple.finder AppleShowAllFiles TRUE
    </code>

1. 이후 다음 명령으로 모든 Finder 인스턴스를 파괴한 뒤 재생성한다:

    <code>
    killall Finder
    </code>
