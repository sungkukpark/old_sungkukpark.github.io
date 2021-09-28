---
title: "[Python] Python 특정 버전을 디폴트 버전으로 변경하는 방법"
date: "2021-09-28"
---

다음 설명은 Mac 환경 기준이다.

1. Homebrew를 통해 최신 버전의 파이썬을 설치한다.

```shell
brew install python
```

2. 현재 어떤 파이썬 버전이 설치되어 있는지 일괄 출력한다.

```shell
ls -l /usr/local/bin/python*
```

그러면 다음처럼 현재 환경에 설치된 파이썬 버전들의 목록이 출력된다.

```shell
lrwxr-xr-x  1 sungkuk.park  admin  24 Sep 28 12:19 /usr/local/bin/python -> /usr/local/bin/python3.8
lrwxr-xr-x  1 root          wheel  69 Jun 11 17:01 /usr/local/bin/python3 -> ../../../Library/Frameworks/Python.framework/Versions/3.9/bin/python3
lrwxr-xr-x  1 root          wheel  76 Jun 11 17:01 /usr/local/bin/python3-config -> ../../../Library/Frameworks/Python.framework/Versions/3.9/bin/python3-config
lrwxr-xr-x  1 root          wheel  71 Jun 11 17:01 /usr/local/bin/python3.9 -> ../../../Library/Frameworks/Python.framework/Versions/3.9/bin/python3.9
lrwxr-xr-x  1 root          wheel  78 Jun 11 17:01 /usr/local/bin/python3.9-config -> ../../../Library/Frameworks/Python.framework/Versions/3.9/bin/python3.9-config
```

3. 다음 명령을 통해 디폴트 파이썬 symlink를 특정 버전으로 지정한다. `[VERSION_NUMBER]`는 본인이 지정하기 원하는 Python의 버전 넘버로 대체한다.

```shell
ln -s -f /usr/local/bin/python[VERSION_NUMBER] /usr/local/bin/python
```

4. 마지막으로, 다음 명령을 통해 변경된 현재 디폴트 파이썬 버전을 출력하면 된다.

```shell
python --version
```
