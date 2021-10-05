---
title: "[유니티] URP unlit basic shader 코드 및 번역"
date: "2021-10-05"
---

다음 예제는 기본적인 URP 호환 셰이더의 예시이다. 이 셰이더는 기본 메시 형태를 코드에 미리 지정된 컬러로 채우는 셰이더이다.

코드가 실행되는 것을 확인하려면, 다음 ShaderLab 코드를 셰이더 어셋에 복사해 붙여넣으면 된다.

## [URP unlit basic shader 코드](https://gist.github.com/sungkukpark/5405116c379baca2da69b1230bca2ebe)

```hlsl
// Copied from https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.0/manual/writing-shaders-urp-basic-unlit-structure.html and translated by sungkukpark.
// 이 셰이더는 메시 형태를 코드에 미리 지정된 컬러로 채우는 셰이더이다.
Shader "Example/URPUnlitShaderBasic"
{
    // 유니티 셰이더의 프로퍼티 블록이다. 본 예제에서 이 블록은 비어있다.
    // 왜냐하면 프래그먼트(fragment) 셰이더에 출력 컬러가 미리 지정되어 있기 때문이다.
    Properties
    { }

    // 서브셰이더(SubShader) 블록은 셰이더 코드를 담고 있다.
    SubShader
    {
        // 서브셰이더 태그는 언제, 그리고 어떤 조건 하에서 서브셰이더 블록이나 패스가 실행되는지 정의한다.
        Tags { "RenderType" = "Opaque" "RenderPipeline" = "UniversalPipeline" }

        Pass
        {
            // HLSL 코드 블록. 유니티 SRP는 HLSL 언어를 사용한다.
            HLSLPROGRAM
            // 이 줄은 버텍스 셰이더의 이름을 정의한다.
            #pragma vertex vert
            // 이 줄은 프래그먼트 셰이더의 이름을 정의한다.
            #pragma fragment frag

            // Core.hlsl 파일은 자주 쓰이는 HLSL 매크로나 함수 정의를 포함한다.
            // 또한, 이 파일은 Common.hlsl나 SpaceTransforms.hlsl와 같은
            // 다른 HLSL #include 래퍼런스들 또한 포함한다.
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            // 이 구조체 정의는 어떤 변수를 포함하는지 정의한다.
            // 이 예제는 Attributes 구조체를 버텍스 세이더의 입력 구조체로 받는다.
            struct Attributes
            {
                // positionOS 변수는 오브젝트 스페이스의 정점 위치를 갖는다.
                float4 positionOS   : POSITION;
            };

            struct Varyings
            {
                // 이 구조체의 위치 변수는 반드시 SV_POSITION 시멘틱을 가져야만 한다.
                float4 positionHCS  : SV_POSITION;
            };

            // Varyings 구조체 안에 정의된 프로퍼티를 가진 버텍스 셰이더 정의.
            // vert 함수의 타입은 반드시 해당 함수가 반환하는 (구조체) 타입과 동일해야 한다.
            Varyings vert(Attributes IN)
            {
                // Varyings 구조체 타입의 출력 객체 (OUT) 선언.
                Varyings OUT;
                // TransformObjectToHClip 함수는 오브젝트 스페이스의 버텍스 위치를
                // 동차 클립 스페이스의 위치로 변환한다.
                OUT.positionHCS = TransformObjectToHClip(IN.positionOS.xyz);
                // 출력을 반환.
                return OUT;
            }

            // 프래그먼트 셰이더 정의.
            half4 frag() : SV_Target
            {
                // 컬러 변수를 정의하고 이를 반환한다.
                half4 customColor = half4(0.5, 0, 0, 1);
                return customColor;
            }
            ENDHLSL
        }
    }
}
```

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
