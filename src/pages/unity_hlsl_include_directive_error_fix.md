---
title: "[유니티] HLSL #include 전처리기 지시어가 경로 찾을 수 없는 에러 해결"
date: "2022-04-21"
---

## 문제 기술

유니티 셰이더 작성 시, HLSL #include 전처리기 지시어가 주어진 경로를 찾을 수 없는 에러가 발생했다.

## 예제 코드

```hlsl
HLSLPROGRAM
#include "UnlitPass.hlsl"
ENDHLSL
```

> 여기서 `UnlitPass.hlsl` 파일은 `#include` 지시자를 포함한 파일과 같은 폴더에 위치해있었다.

## 해결 방법

유니티의 [프로젝트 윈도우](https://docs.unity3d.com/Manual/ProjectView.html)에서 찾을 수 없는 어셋을 선택한 뒤 오른쪽 클릭을 하고 `Reimport`를 하거나 `Reimport All`을 해서 모든 파일을 새로 import하는 방식으로 문제를 해결했다.

## 참고 자료

- [DirectX graphics and gaming | Direct3D | HLSL | #include Directive](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-appendix-pre-include)
