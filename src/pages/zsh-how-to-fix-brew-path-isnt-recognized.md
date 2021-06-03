---
title: "[Zsh] brew 명령어가 인식되지 않는 경우 대처"
date: "2019-07-06"
---

명령 프롬프트에 다음 명령을 입력해 `.zshrc` 파일에 brew 경로를 추가한다

`echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.zshrc`