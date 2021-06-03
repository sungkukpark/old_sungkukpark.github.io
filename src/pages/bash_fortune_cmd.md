---
title: "[Bash] fortune 커맨드"
date: "2020-12-26"
---

## 설치 방법

```bash
brew install fortune
```

## 예시

다음 명령으로 랜덤한 격언을 출력할 수 있다

```
fortune
```

## 나만의 fortune 데이터 파일을 생성하고 활용하기

1. 다음과 같이 `%` 기호로 구분된 텍스트 파일을 생성한다

```
격언 1
%
격언 2
%
격언 3
```

2. 만약 해당 파일의 이름이 `quotes.txt`라면 [strfile](https://johngrib.github.io/wiki/strfile) 명령을 통해 인덱스 파일을 따로 생성해준다

```bash
strfile quotes.txt
```

3. 마지막으로 `quotes.txt`이 위치한 폴더의 경로를 `~/my-fortune`라고 가정할 때 이를 `fortune` 명령의 인자로 전달하면 해당 폴더 내의 격언들이 랜덤으로 선택되어 출력되게 된다

```bash
fortune ~/my-fortune
```

4. 필요에 따라 이를 자동화하기 위해 `~/.bashrc` 또는 `~/.zshrc` 파일 끝에 위의 명령을 추가하면 된다

## 참고 자료

- [fortune 명령어 - 기계인간 John Grib](https://johngrib.github.io/wiki/fortune-cmd/)
