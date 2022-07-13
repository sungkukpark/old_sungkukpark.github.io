---
title: "[Python] 파이썬 레퍼런스 모음"
date: "2022-06-24"
---

이 페이지는 특정 자료에 대한 링크를 불필요하게 나열하지 않을 것이다. Python 3를 배우는 자료는 온라인에 이미 흔해 빠졌다. 프로그래밍 스킬에 맞는 아무 교육 자료나 선택하면 된다.

[Dive Into Python 3](https://diveintopython3.net/)는 아래의 모든 토픽을 커버하는 무료 온라인 책이다. 만약 이 중에 이 책이 커버하지 않는 주제가 있다면 간단한 구글 검색 한 번으로도 찾을 수 있다.

## 기초(Basics)

1. Python 개발을 위해 비주얼 스투디오 코드를 설치하는 방법
2. 변수와 데이터 타입
3. 문자열
4. 리스트, 세트, 튜플
5. 딕셔너리
6. 객체(Objects)
7. 조건문
8. 루프
9. 함수
10. 클래스
11. 파일 입출력
12. Json
13. 객체-지향 프로그래밍: 데이터 추상화, 캡슐화, 상속 및 다형성

만약 프로그래밍 경험이 있다면 위의 모든 것을 배우는데 **1주**면 충분할 것이다.
만약 프로그래밍 경험이 없다면 위의 것들을 배우는데 **2-3**주 정도 걸릴 것이다.

## 중급(Intermediate)

1. 파이썬 파일, 모듈, 라이브러리
2. PIP (Package installer for Python)와 PyPi.org
3. Import문과 어떻게 다른 파일에서 다른 파일에 접근하는지에 대하여
4. 파이썬 표준 라이브러리 모듈
5. 가상 환경 (vEnv)
6. 유닛 테스팅 (PyTest)

유닛 테스팅을 제외한 다섯 주제는 유닛 테스트보다 더 우선시되어야 하는데 이는 버그를 고치거나 기존 애드온이나 도구를 추가하는 등의 업무를 시작할 수 있기 때문이다.

이 다섯 주제를 배우는데 약 1주에서 최대 2주의 시간이 걸릴 거이다. 유닛 테스팅은 그 자체로 유닛 테스팅 내부의 요소들을 이해해야 하기 때문에 1주라는 시간을 별도로 할애해야 할 수도 있다.

이 정도의 지식을 갖추게 되면 이 지식을 Blender와 같은 DCC 스크립팅 환경에 적용할 수 있게 된다.

파이썬에 대해 더 많이 알고 싶으면 데코레이터(decorators)를 알아보기를 추천한다. 데코레이터는 반복되는 기능을 여러 함수들에 사용하는데 유용하다.

## 고급(Advanced)

1. 파이써닉(Pythonic)한 코드와 문법(syntax)
2. PySide / PyQT UI 개발 
  - **경고**: 이는 Blender와 함께 쓰이게는 매우 까다롭다. 다른 DCC부터 시작하는 것이 이 주제를 공부하기에 더 용이하다.
3. 디자인 패턴 (파이썬)
4. 자료 구조 (파이썬)
5. 소켓 프로그래밍
6. 데이터베이스 프로그래밍
7. 웹 서버 / 개발 프로그래밍

이 주제는 한 주제마다 1주 이상의 시간이 걸릴 수 있다. 따라서 서두르지 말고 기초와 중급 주제들을 모두 익힐 때까지 이를 미루도록 한다.

## 블렌더(Blender)

VSCode를 [Blender Development](https://marketplace.visualstudio.com/items?itemName=JacquesLucke.blender-development) 확장과 함께 쓰는 것은 블렌더 애드온을 통한 개발과 디버깅을 편하게 해준다. 이 확장을 제대로만 설정하면 블렌더 에드온 개발을 **너무너무** 손쉽게 만들어주기 때문에 강력하게 추천한다.

원하는 기능을 만들기 위해서는 [Blender 3.2 Python API Documentation — Blender Python API](https://docs.blender.org/api/current/index.html)를 참조하도록 한다.

유료로 제공되는 [Blender Studio](https://studio.blender.org/)는 [Scripting for Artists](https://studio.blender.org/training/scripting-for-artists/)라는 강의를 통해 블렌더에서 어떻게 애드온을 추가하는지 알려준다. 이 강의의 상당 부분은 [유투브로도 공개](https://www.youtube.com/playlist?list=PL1fkRtMmJ4OOrY20bOVlxn_PFYx9ly97j)되어 있다.

블렌더 애드온을 추가하는 또 다른 멋진 장소는 [GitHub](https://github.com/search?l=Python&q=bpy)이다. Python으로 작성된 bpy라는 이름의 저장소들을 검색(`?l=Python&q=bpy`)하면 된다. 오래 되어 지원되지 않는 API에 통수를 맞지 않으려면 해당 애드온이 어떤 Blender 버전을 사용하는지만 확인하면 된다. 블렌더는 끊임없이 API를 갱신하고 변경하기 때문이다.

하지만 역시 블렌더 스크립팅을 배우는 최고의 방법은 블렌더로 실용적인 뭔가를 해보는 것이다. 구글링을 하면 여타 많은 자료를 찾을 수야 있겠지만, 각 코드와 API가 무엇을 하는지 시간을 들여서 정확하게 이해하는 것이 아무 생각 없이 코드 복사/붙여넣기를 하는 것보다 상책이다.

## 강의

- [Interactive Python Lessons - Python Principles](https://pythonprinciples.com/lessons/)

## 라이브러리

### Matplotlib

- [Matplotlib gallery](https://matplotlib.org/stable/gallery/index.html)

### libigl

- [Tutorial - libigl](https://libigl.github.io/tutorial/)
