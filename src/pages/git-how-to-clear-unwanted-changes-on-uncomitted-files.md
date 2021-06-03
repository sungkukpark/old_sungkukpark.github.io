---
title: "[Git] 커밋하지 않은 변경 사항 중 원하지 않는 변경 사항 숨기기"
date: "2020-01-18"
---

Git에서 커밋하지 않은 변경 사항 중 확인하길 원하지 않는 파일들이 너무 많아 원하는 변경 사항을 한눈에 파악하기 어려운 경우가 있다.
특히, Unity 엔진을 사용할 때 임포트(import)하면 `.meta` 확장자를 가진 파일들이 수백 개에서 수천 개 이상 생성될 때가 있다.
이때, 다음 명령을 입력해 원하지 않는 변경 사항들을 숨길 수 있다.

---

##### SYNOPSIS
```git checkout -- "*.[extension of files to exclude]"```

##### EXAMPLE
```git checkout -- "*.meta"```

## 참고문헌

- [How to revert uncommitted changes to files of a certain type in git](https://stackoverflow.com/questions/14864655/how-to-revert-uncommitted-changes-to-files-of-a-certain-type-in-git)
