---
title: "[Mac] Mac에서 앱 삭제하기"
date: "2020-12-24"
---

1. [mdfind](https://osxdaily.com/2006/12/05/use-spotlight-from-the-command-line-with-mdfind/) 명령을 사용해 다음처럼 특정 어플리케이션 명칭과 매칭되는 경로를 검색 및 출력한다.

```
mdfind -name "[어플리케이션_명칭]"
```

2. 인자를 전달하는 것이 귀찮으면 다음처럼 큰 따옴표 "" 없이 검색할 문자열만을 전달할 수도 있다.

```
mdfind [어플리케이션_명칭]
```

3. 이때, 어플리케이션 명칭에 `.app`처럼 확장자를 덧붙이면 검색 범위를 한정시킬 수 있다.

4. 마지막으로 `sudo rm` 명령에 해당 어플리케이션의 경로를 전달해 앱을 삭제한다.

```
sudo rm -rif "[삭제할_경로]"
```

> 주의: 큰 따옴표 ""(double quotes)로 어플리케이션 명칭이나 삭제할 경로를 둘러싸는 것을 잊지 말 것. 

## 참고 문헌

- [How to Completely Remove Apps & Software in Mac OS X by Manual Terminal Uninstall](https://osxdaily.com/2014/07/31/manual-complete-app-removal-mac-os-x-terminal/)
