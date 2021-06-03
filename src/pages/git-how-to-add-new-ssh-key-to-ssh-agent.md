---
title: "[Git] 생성한 SSH 키를 ssh-agent에 추가하기"
date: "2019-07-20"
---

명령 프롬프트에 다음 명령을 차례대로 입력한다.

`eval $(ssh-agent -s)`

`ssh-add ~/.ssh/[흔히 "id_"로 시작하는 파일명은 달라질 수 있음]`

## 참고문헌

- [Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)