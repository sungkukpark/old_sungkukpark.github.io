---
title: "[Unreal] 언리얼 엔진 스터디 (1) - 개발 환경 설정"
date: "2021-07-04"
---

[언리얼 엔진의 공식 홈페이지]: https://www.unrealengine.com/
[에픽게임즈 런처 다운로드 페이지]: https://www.unrealengine.com/en-US/download
[비주얼 스투디오 다운로드 페이지]: https://visualstudio.microsoft.com/downloads/

## 에픽게임즈 런처 설치

- 에픽게임즈 런처는 에픽스토어에서 제공하는 게임들이나 언리얼 엔진을 다운로드하고 설치할 수 있도록 제공하는 런처이다
- [에픽게임즈 런처 다운로드 페이지]에서 에픽게임즈 런처를 다운로드하고 설치한다.

## 비주얼 스투디오 설치

- 비주얼 스투디오는 마이크로소프트에서 제공하는 통합개발환경(IDE)이다
- [비주얼 스투디오 다운로드 페이지]에서 비주얼 스투디오를 다운로드하고 설치한다
- 이때, 언리얼 엔진 4.20 버전부터는 공식적으로 비주얼 스투디오 2017을 설치하도록 권장한다고 하니, 최신 버전의 언리얼 엔진에서는 최신 버전의 비주얼 스투디오를 사용하도록 한다

## 컨텐트 브라우저(Content Browser)

컨텐트 브라우저는 언리얼 에디터 내에서 컨텐트 어셋의 생성, 불러오기, 관리, 보기, 변경을 주관하는 영역이다. 이는 유니티의 프로젝트 윈도우(Project Window)에 해당한다고 볼 수 있다.

단, 유니티에서 프로젝트 윈도우에서 보이는 모든 폴더가 `/Assets`라는 최상위 폴더 내에 배치되는 것에 반해, 언리얼 에디터에서 게임 프로젝트 내의 모든 어셋의 경로는 `/Game`이라는 가상 경로에서 시작한다. 가상 경로 `/Game`의 실제 경로는 프로젝트 내의 `/Content` 폴더에 해당한다.

## 프로젝트를 구성하는 폴더들

프로젝트를 구성하는 폴더들은 총 4가지이다.

1. `/Config`: Config 폴더는 게임 프로젝트의 중요한 설정 값을 보관하는 공간이다
2. `/Content`: Content 폴더는 게임 프로젝트에 사용하는 어셋을 관리하는 공간이다
3. `/Intermediate`: Intermediate 폴더는 프로젝트 관리에 필요한 임시 파일들을 저장하는 공간이다. 이는 유니티에서의 `/Library` 폴더와 유사한 역할을 수행한다고 볼 수 있다.
4. `/Saved`: Saved 폴더는 에디터 작업 중에 생성된 세이브 파일, 스크린샷 등의 결과물을 저장하는 공간이다.

따라서, 따로 프로젝트를 압축하거나 형상 관리를 할 일이 있다면 `/Config`와 `/Content` 폴더만을 압축하거나 형상 관리를 하면 될 일이다.

## `.uproject` 확장자를 가진 프로젝트 파일 분석

언리얼 프로젝트 파일에 해당하는 `.uproject` 확장자를 가진 파일을 에디터로 열면 그 내용은 다음과 같다.

```
{
	"FileVersion": 3,
	"EngineAssociation": "4.26",
	"Category": "",
	"Description": ""
}
```

이때, EngineAssociation의 값이 `4.26`인 것은 컴퓨터에 만약 여러 개의 언리얼 엔진이 설치되어 있다면 `4.26` 버전의 언리얼 엔진을 실행해 해당 프로젝트를 열어야 한다는 뜻이다.

## `NetFxSDK` 설치 폴더를 찾을 수 없는 문제 해결

다음과 같은 에러 메시지가 발생하는 경우에는 Visual Studio Installer를 통해 .Net desktop development 설치를 통해 .Net Framework SDK 4.6.0 이상을 설치해주면 해결된다.

```
ERROR: Could not find NetFxSDK install dir; this will prevent SwarmInterface from installing.  Install a version of .NET Framework SDK at 4.6.0 or higher.
```

## 참고 자료

- 이득우, 『이득우의 언리얼 C++ 게임 개발의 정석』
