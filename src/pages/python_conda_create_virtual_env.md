---
title: "[Python] conda 가상 환경 만들기"
date: "2022-06-24"
---

## Powershell 실행 정책 권한 주기

```python
set-executionpolicy remotesigned
```

## conda로 가상 환경 만들기

윈도우에서는 아래처럼 Powershell에서 conda를 초기화 해줘야 한다.

```python
conda init powershell
```

아래에서 `python=` 다음에는 설치하고자 하는 Python의 버전을 명시한다.

```python
conda create -n my_env python=3.8
```

```python
conda activate my_env
```

## 추가: Pytorch 설치하기

```python
pip3 install torch torchvision torchaudio
```

## 참고 자료

- [PyTorch](https://pytorch.org/)
