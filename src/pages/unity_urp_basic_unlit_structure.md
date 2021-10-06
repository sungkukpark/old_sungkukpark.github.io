---
title: "[유니티] URP unlit basic shader 코드 및 번역"
date: "2021-10-05"
---

다음 예제는 기본적인 URP 호환 셰이더의 예시이다. 이 셰이더는 기본 메시 형태를 코드에 미리 지정된 컬러로 채우는 셰이더이다.

코드가 실행되는 것을 확인하려면, 다음 ShaderLab 코드를 셰이더 어셋에 복사해 붙여넣으면 된다.

## [URP unlit basic shader 코드](https://gist.github.com/sungkukpark/5405116c379baca2da69b1230bca2ebe)

`gist:sungkukpark/5405116c379baca2da69b1230bca2ebe#urp-basic-unlit-structure_sample.shader`

이 프로그먼트 셰이더는 게임오브젝트를 어두운 빨간색 (RGB 값 (0.5, 0, 0))으로 칠한다.

![unlit-shader-tutorial-basic-hardcoded-color](./unity_urp_basic_unlit_structure/unlit-shader-tutorial-basic-hardcoded-color.png)

다음 섹션은 이 기본 유니티 셰이더의 기본 구조를 소개한다.

## 프로퍼티 블록

프로퍼티 블록은 사용자가 머테리얼의 인스펙터 창을 통해 설정할 수 있는 프로퍼티들의 선언을 포함한다.

하지만 이 예제에서는 사용자가 정의할 수 있는 어떤 머테리얼 프로퍼티도 외부로 노출시키지 않으므로 프로퍼티 블록은 비어있다.

## 서브셰이더 블록

유니티 셰이더 소스 파일은 최소 하나 이상의 서브셰이더(SubShader) 블록을 포함한다. 메시를 렌더링할 때, 유니티는 타겟 기기의 GPU와 호환가능한 가장 첫 서브셰이더를 선택한다.

서브셰이더 블록은 선택적으로 서브셰이더 태그(Tags) 블록을 가질 수 있다. 서브셰이더 태그 블록을 선언하기 위해서는 `Tags` 키워드를 사용하도록 한다.

```hlsl
Tags { "RenderType" = "Opaque" "RenderPipeline" = "UniversalPipeline" }
```

> WIP

## 원본 문서

- [URP unlit basic shader | Universal RP | 12.0.0](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.0/manual/writing-shaders-urp-basic-unlit-structure.html)
