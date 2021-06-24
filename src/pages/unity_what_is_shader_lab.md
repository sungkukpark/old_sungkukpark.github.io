---
title: "[유니티] 셰이더 랩(ShaderLab)이란?"
date: "2021-06-24"
---

[셰이더 랩: 셰이더 만들기]: https://docs.unity3d.com/Manual/SL-Shader.html
[셰이더 랩: 서브셰이더 만들기]: https://docs.unity3d.com/Manual/SL-SubShader.html
[셰이더 랩: 패스 만들기]: https://docs.unity3d.com/Manual/SL-Pass.html
[셰이더 랩: 셰이더 프로그램 추가하기]: https://docs.unity3d.com/Manual/shader-shaderlab-code-blocks.html
[셰이더 랩: 커맨드]: https://docs.unity3d.com/Manual/shader-shaderlab-commands.html
[셰이더 랩: 머테리얼 프로퍼티 정의하기]: https://docs.unity3d.com/Manual/SL-Properties.html
[셰이더 랩: 폴백 지정하기]: https://docs.unity3d.com/Manual/SL-Fallback.html

## 셰이더 랩(ShaderLab)이란?

셰이더 랩(ShaderLab)은 **유니티의 선언형 언어**로서 **"셰이더(Shader)" 객체를 정의하는 언어**이다. 유니티 셰이더 소스 파일에서 쓰인다. 셰이더 랩은 중첩된 중괄호 `{`, `}` (nested-braces) 문법을 사용해 셰이더 객체를 기술한다.

## 셰이더(Shader)란?

셰이더(Shader; 여기서 Shader는 일반적으로 GPU에서 실행되는 프로그램으로서의 shader가 아니라 Shader 객체를 일컫는다. 대문자와 소문자의 차이를 구분할 것)는 유니티 특정 개념으로서, "셰이더(shader) 프로그램과 다른 정보의 래퍼(wrapper)"에 해당한다. 셰이더(Shader)는 하나의 파일 안에 여러 개의 셰이더(shader) 프로그램을 정의하게 해주고, 유니티로 하여금 어떻게 이 프로그램들을 사용하게 할 지 지정한다.

셰이더(Shader) 객체는 중첩된 구조로서 서브셰이더(SubShader)와 패스(Pass)라고 부르는 구조체들로 구성된다.

## 셰이더 랩의 호환성

셰이더 랩 기능, 즉, **셰이더 랩: 코드 블록(ShaderLab: Shader block)** 기능은 빌트-인 렌더 파이프라인, URP, HDRP), 커스텀 SRP 모두와 호환된다. 즉, 셰이더 랩은 어떤 유니티 렌더 파이프라인에서도 호환된다.

## 셰이더 랩의 기능

유니티 상에서 셰이더 랩을 통해 정의할 수 있는 것들은 다음과 같다:

- 셰이더 객체의 전체 구조를 정의하는 일. 다음을 참고: [셰이더 랩: 셰이더 만들기], [셰이더 랩: 서브셰이더 만들기], [셰이더 랩: 패스 만들기]
- 코드 블록을 통해 HLSL로 작성된 셰이더 프로그램 추가하는 일. 다음을 참고: [셰이더 랩: 셰이더 프로그램 추가하기]
- 커맨드를 통해 GPU가 셰이더를 실행하기 전에 GPU의 렌더 스테이트(render state)를 변경하는 일. 또는 다른 패스와 연관된 특정 동작을 수행하는 일. 다음을 참고: [셰이더 랩: 커맨드]
- 셰이더 코드의 프로퍼티를 개발자가 직접 수정할 수 있도록 머테리얼 인스펙터(Inspector)로 노출시키는 일. 그리고 이중 일부를 머테리얼 어셋으로 저장하는 일. 다음을 참고: [셰이더 랩: 머테리얼 프로퍼티 정의하기]
- 유니티가 현재 하드웨어에서 셰이더 객체 내의 어떤 서브셰이더도 실행할 수 없는 경우 실행될 폴백(fallback) 동작을 정의하기. 다음을 참고: [셰이더 랩: 폴백 지정하기]
