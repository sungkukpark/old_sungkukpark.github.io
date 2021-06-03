---
title: "[Vim] VimWiki 설치 및 초기 설정하기"
date: "2020-01-25"
---

본문은 VimWiki 설치 가이드로서 Mac 운영체제를 전제로 한다.

### Vundle 설정: Vim 플러그인 매니저 설정하기

우선 Vim의 플러그인 매니저인 Vundle을 통해 VimWiki를 설치하도록 한다.

```git
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

그 다음, `.vimrc` 파일에 다음과 같은 코드를 삽입하도록 한다.

```vim
set nocompatible              " Vi 호환 플래그 끄기 / iMproved일 것, 필수
filetype off                  " 필수

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim' " Vundle 플러그인 추가
Plugin 'vimwiki/vimwiki'      " VimWiki 플러그인 추가

" 모든 플러그인은 해당 줄 앞에 추가되어야 한다
call vundle#end()             " 필수
filetype plugin indent on     " 필수

" 간략 도움말
" :PluginList       - 모든 설정된 플러그인을 리스트로 출력한다
" :PluginInstall    - 플러그인들을 설치한다; 끝에 `!`를 덧붙이면 플러그인을 설치하는 대신 업데이트를 한다. 아니면 대신에 :PluginUpdate 명령을 실행한다
" :PluginSearch foo - foo라는 단어를 포함한 플러그인을 검색한다; 끝에 `!`를 덧붙이면 로컬 캐시를 초기화한다
" :PluginClean      - 사용 중이 아닌 플러그인을 동의 하에 삭제한다; 끝에 `!`를 덧붙이면 자동 승인 및 삭제한다
"
" :h vundle 명령으로 Vundle에 대한 더 자세한 설명이나 FAQ 위키에 접근할 수 있다
" 플러그인과 관련되지 않은 코드는 다음 줄부터 추가하면 된다
```

### Vundle 및 VimWiki 설치하기

이후, `.vimrc` 파일을 저장한 다음 다음 명령을 통해 Vundle 플러그인과 VimWiki 플러그인을 설치한다

vim 상에서:

```vim
:PluginInstall
```

커맨드 라인 상에서:

```vim
vim +PluginInstall +qall
```

### VimWiki 기본 디렉토리 Dropbox 하위 폴더로 설정하기

vim 환경에서 `\\w` 입력을 통해 VimWiki를 처음 실행하면 루트 디렉토리를 최초로 설정하게 된다.
그러나 우리가 원하는 것은 Dropbox 아래에 루트 디렉토리를 설정해 매번 새로 백업할 필요가 없는 것이다.

이러한 목적을 달성하기 위해, `.vimrc` 파일 끝에 다음 코드를 삽입한다:

```vim
let g:vimwiki_list = [{'path':'$HOME/Dropbox/VimWiki/wiki',
\ 'path_html':'$HOME/Dropbox/VimWiki/export/html',
\ 'syntax': 'markdown',
\ 'ext': '.md'}]
```

- 'path': VimWiki의 루트 폴더 경로
- 'path_html': VimWiki를 HTML 파일로 추출할 때의 목표 경로
- 'syntax': 마크다운 문법을 설정하고 싶을 때 설정
- 'ext': VimWiki 파일의 기본 확장자인 `.wiki` 대신 마크다운 확장자인 `.md`를 사용하고 싶을 때 설정
