---
title: "[Vim] Vim잘라빔 1: Vim 설치 — Vundle까지"
date: "2019-06-30"
---

본문은 Vim 안-고인물을 위한 Vim 안내서 *Vim잘라빔*이다.
작성자는 Vim에 대해 아무 것도 모르는 상태에서 이 문서를 작성하기 시작했다.
주변에 Vim을 하는 고인물들이 가끔 있었지만 "Vim 쓰면 좋아요?"라는 작성자의 질문에 대한 답은 대개 이랬다:

#### TMI형

> 해당 질문에 답하기에 앞서 Emacs이냐 Vim이냐하는 근본적인 신앙의 토대 문제로 되돌아가 논하자면…

#### 소크라테스형

> Vim은 변태만 쓰는 것이다<br>
> 나는 Vim을 쓴다<br>
> 고로 나는 변태다

어느 쪽이든 해당 답변은 Vim 안-고인물에게는 도움이 안 되긴 마찬가지다. 왜냐하면,

1. 왜 상대방이 Vim을 쓰고 있는지에 대한 답변이 안 된다.
1. 왜 내가 Vim을 써야 하는지에 대한 답변이 안 된다.

때문에 나는 구도자이자 「Dark Soul」을 하는 심정으로 Vim에 입문할 수밖에 없었다. 물론 기계인간님의 [Vim, 두 가지 관점]이라는 글이 내게 Vim을 학습해야겠다는 직접적인 동기를 부여했음을 언급해야겠다.

## Vim 설치

1. [Downloading Vim] 페이지로 이동해 각 운영체제에 맞는 Vim을 설치한다.
1. 작성자는 Windows를 기준으로 설명하도록 한다. 왜냐하면 Windows 사용자들이 더 안-고였기 때문이다.

## Vundler 설치

Vim을 설치하는 것까지는 어렵지 않다. 다만 윈도우 사용자의 경우는 Vim의 패키지 매니저 중 하나인 Vundle를 설치하는 과정에서 헤매기 쉽다. 윈도우 사용자를 위한 Vundle 설치법은 다음과 같다:

1. Windows + R을 입력해 실행 상자(Run Box)를 연다
2. 실행 상자에 `cmd`를 입력해 명령 프롬프트 창을 연다
3. `cd %USERPROFILE%`를 입력해 사용자 디렉토리로 이동한다
4. 명령 프롬프트에서 다음 명령을 입력해 Vundle을 다운 받는다

 `git clone https://github.com/VundleVim/Vundle.vim.git %USERPROFILE%/.vim/bundle/Vundle.vim`

5. `gvim .vimrc` 또는 `vim .vimrc` 명령을 통해 .vimrc 파일에 접근해 다음 내용을 붙여넣는다. 주석과 같은 불필요한 부분도 포함되어 있으므로, Vim 고인물의 경우에는 불필요한 부분은 삭제해도 좋다. Vim 안-고인물의 경우에는 일단 그냥 따라한다.

```
set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=$HOME/.vim/bundle/Vundle.vim/
call vundle#begin('$HOME/.vim/bundle/')
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" The following are examples of different formats supported.
" Keep Plugin commands between vundle#begin/end.
" plugin on GitHub repo
Plugin 'tpope/vim-fugitive'
" plugin from http://vim-scripts.org/vim/scripts.html
" Plugin 'L9'
" Git plugin not hosted on GitHub
Plugin 'git://git.wincent.com/command-t.git'
" git repos on your local machine (i.e. when working on your own plugin)
Plugin 'file:///home/gmarik/path/to/plugin'
" The sparkup vim script is in a subdirectory of this repo called vim.
" Pass the path to set the runtimepath properly.
Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
" Install L9 and avoid a Naming conflict if you've already installed a
" different version somewhere else.
" Plugin 'ascenator/L9', {'name': 'newL9'}

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line
```

6. 명령 프롬프트에 다음 명령어를 입력해 위의 파일에 명시된 대로 Vundle 플러그인을 설치한다

`vim +PluginInstall +qall`

7. 만약 추가적인 문제가 발생하면 다음 문서들을 참조해 문제를 해결한다
    - [Vundle for Windows]
    - [Vundle.vim#quick-start]

## Vim 기초

### Vim 편집기 창 열기(Open)

Vim은 기본적으로 편집기(Editor)이다. 때문에 우선 vim에 진입하는(entering) 과정이 필요하다.
Vim에 진입하는 명령어의 예시는 다음과 같다:

`vim filename.txt`

이를 일반화해서 표현하면 다음과 같다:

`vim [filename]`

여기서 `vim`은 Vim에 진입하는 명령어이다. 여기에 파일 이름을 인자(argument)로 전달함으로써 해당 파일을 Vim으로 편집하게 되는 것이다. 이는 일종의 편집기 창(window)을 여는 동작이기도 하다.

[계속 읽기]

[Vim, 두 가지 관점]: https://johngrib.github.io/wiki/two-views-of-vim/
[Downloading Vim]: https://www.vim.org/download.php
[Vundle for Windows]: https://github.com/VundleVim/Vundle.vim/wiki/Vundle-for-Windows
[Vundle.vim#quick-start]: https://github.com/VundleVim/Vundle.vim#quick-start
[계속 읽기]: https://sungkukpark.github.io/ttrl-vim-zalavim-modes/