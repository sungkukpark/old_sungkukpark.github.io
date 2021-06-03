---
title: "[.NET] VS Code에서 .NET Core \"Hello World\" 앱 만들기"
date: "2020-05-25"
---

## 요구 조건

- [.NET Core SDK](https://dotnet.microsoft.com/download). 이 SDK는 Runtime을 포함한다
- [C# extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp). VS Code Marketplace에서 다운로드받을 수 있다

## C# "Hello World" 앱 만들기

### 앱 초기화

- 터미널이나 커맨드 프롬프트 창을 띄워 앱을 생성할 폴더로 이동한다
- 이때, `cd`나 `mkdir` 커맨드를 활용하면 된다
- 원하는 폴더상에서 커맨드 쉘에 다음 명령을 입력한다:

```csharp
dotnet new console
```

### 앱 초기 설정

- 이제 다음 명령으로 해당 프로젝트를 VS Code를 통해 연다:

```csharp
code .
```

- 이때, 만약 VS Code에서 해당 프로젝트를 처음 여는 경우 "빌드와 디버깅에 필요한 어셋이 필요합니다. 추가하시겠습니까(Required assets to build and debug are missing. Add them?)"라는 알림창이 뜰 것이다
- 여기서 **Yes**를 선택한다

### 앱 빌드 및 실행

- 마지막으로, 커멘드 쉘에 다음 명령을 입력해 해당 프로젝트를 빌드 및 실행한다:

```csharp
dotnet run
```
