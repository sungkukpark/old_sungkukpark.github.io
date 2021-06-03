---
title: "[Youtube] youtube-dl로 유투브 영상 다운받기"
date: "2020-11-14"
---

## 문제 제기

바야흐로 지금은 영상 컨텐츠의 대항해시대. 그러나 스트리밍 방식으로 제공되는 유투브 컨텐츠는 언제 게시가 중단될 지 모른다. 이때 사용자는 언제든 찾아볼 수 있도록 유투브 영상을 다운받고 싶다. 그러나 손쉽게 Youtube 영상을 다운받게 해준다는 Chrome이나 Firefox의 확장 프로그램도 현재는 사용이 불가능한 경우가 많다. 이때 우리는 youtube-dl을 통해 간편하게 유투브 컨텐츠를 손에 넣을 수 있다. 물론, private하게 공유된 영상도 예외는 아니다.

## youtube-dl 설치

1. https://youtube-dl.org/ 페이지로 이동한다
1. 우측의 Download instructions 버튼을 눌러 다운로드 페이지로 이동한다
1. [Windows exe](https://yt-dl.org/downloads/2020.11.12/youtube-dl.exe) 버튼을 눌러 youtube-dl의 최신 빌드를 다운받는다
1. 이때, youtube-dl.exe 실행 파일을 다운받은 위치를 기억해둔다

## youtube-dl 사용법: 기본편

1. 윈도우 사용자의 경우, Command Prompt를 연다 (Windows 버튼 + R을 누른 다음 "cmd"를 입력해도 된다)
1. Command Prompt를 통해 위에서 기억해둔 youtube-dl.exe 실행 파일의 경로로 이동한다
1. 이때, `cd`, `cd ..`, `dir` 등의 명령을 활용하면 된다 (이러한 명령어에 대해서 모르겠다면 선검색 후질문)
1. youtube-dl.exe 실행 파일의 경로로 성공적으로 이동했다면 다음 명령으로 원하는 주소의 유투브 영상을 다운받는다

```
youtube-dl.exe [유투브_다운로드_URL]
```

이때, 유투브 다운로드 URL은 `https://youtu.be/`로 시작한다.

## youtube-dl 사용법: 응용편

그러나, private하게 공유된 유투브 영상의 경우에는 따로 인증 절차를 필요로 한다. 이때, 쿠키(cookie)를 사용하면 간편하게 원하는 영상을 다운받을 수 있다.

1. 우선, Chrome 브라우저 사용자의 경우, [Get cookies.txt](https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid?hl=en) 확장 프로그램을 설치한다
1. 그 다음, 인증에 필요한 쿠키를 수집해야 한다. https://youtube.com, https://accounts.google.com 페이지를 각각 방문한 뒤 Get cookies.txt 확장 프로그램을 실행해 "Export" 버튼을 눌러 .txt 확장자를 가진 쿠키를 다운로드받는다
1. 이제 다운로드받은 쿠키 파일 2개를 하나로 합친다. 텍스트 편집기 Notepad 또는 VSCode 등을 사용해 파일 하나의 내용을 전부 복사해서 한 곳에 붙여넣으면 된다
1. 그럼 결과적으로 https://youtube.com, https://accounts.google.com의 쿠키 내용이 모두 포함된 단일한 .txt 확장자의 쿠키 파일 하나가 완성되었을 것이다. 이 파일을 youtube-dl.exe 실행 파일의 경로와 같은 폴더 안에 집어넣는다
1. 마지막으로, 기본편과 마찬가지로 Command Prompt를 열고 youtube-dl.exe 실행 파일의 경로로 이동해 다음 명령으로 원하는 주소의 유투브 영상을 다운받는다. 여기서 추가되는 내용은 `--cookies`와 쿠키 파일 이름 외에는 없다

```
youtube-dl.exe --cookies [쿠키_파일_이름] [유투브_다운로드_URL]
```

이때, 쿠키 파일 이름은 확장자(`.txt`)까지 정확하게 기입하도록 한다

## youtube-dl 사용법: 마스터편

현재 youtube-dl의 공식 GitHub 저장소 페이지에는 접근이 불가능하므로, 보다 세부적인 명령과 옵션을 사용하기 위해서는 아카이빙 목적으로 fork된 다음 페이지를 참조하도록 한다: [l1ving/youtube-dl: A fork of youtube-dl, for archival purposes.](https://github.com/l1ving/youtube-dl)

## 자주 발생하는 문제 해결

```
ERROR: [유투브_다운로드_URL]: YouTube said: Unable to extract video data
```

위와 같은 에러 메시지가 발생하는 경우, https://youtube-dl.org/ 페이지로 이동해 다시 해당 쿠키 파일을 다운받아 그 내용을 본인의 쿠키에 붙여넣으면 문제가 해결된다.

만약 그래도 문제가 해결되지 않으면 youtube-dl를 fork 받아 따로 업데이트 중인 [youtube-dlc](https://github.com/blackjack4494/yt-dlc)를 설치해 사용하도록 한다.

## 참고 문헌

- [HOW TO DOWNLOAD PRIVATE VIDEOS FROM YOUTUBE WITH YOUTUBE-DL](https://daveparrish.net/posts/2018-06-22-How-to-download-private-YouTube-videos-with-youtube-dl.html)
