---
title: "[모델링] 3D 모델링 6원칙"
date: "2021-01-30"
---

3D 모델링 6원칙으로는 다음과 같은 원칙들이 있다:

1. 형태(Form)
2. 디테일(Detail)
3. 크기(Scale)
4. 적응성(Adaptation)
5. 재사용성(Reuse)
6. 표면 품질(Surface Quality)

다음은 각 원칙에 대한 요약이다.

## 1. 형태(Form)

- 모델링을 할 때 최우선적으로 염두에 둬야 하는 것은 만드는 **대상의 전체적인 형태**이다.
- 아무리 복잡한 형태도 단순한 도형의 조합이다.
- 가장 특징적인 형태를 먼저 만들고 그 이후에 디테일을 추가하라.

## 2. 디테일(Detail)

- LOD(Level Of Details, 디테일 차등화)를 염두에 두고 디테일을 추가하라.
- 이에 대해서는 [일차, 이차, 삼차 형태(Primary, Secondary, and Tertiary Shapes)](http://www.neilblevins.com/art_lessons/primary_secondary_and_tertiary_shapes/primary_secondary_and_tertiary_shapes.htm)라는 블로그 포스팅을 참조하라.

## 3. 크기(Scale)

- 가능하면 모든 모델링 대상을 실제 사물의 크기나 비율에 맞게 제작하라.

## 4. 적응성(Adaptation)

- 가능하면 모든 모델링 대상을 추후에 변경하기 쉽게 제작하라.
- 이는 비파괴적인(Non-desctructive) 모델링을 의미할 수도 있고 모디파이어(modifier)를 추가해 나중에 언제든지 되돌릴 수 있도록 모델링하는 것일 수 있다.

## 5. 재사용성(Reuse)

- 기존에 자신이 만들어뒀던 모델들을 재사용하라
  - 이는 엄청나게 많은 시간을 절약하게 해준다.

## 6. 표면 품질(Surface Quality)

- 표면 품질을 향상시키는데 집중하라.
- 모델링 표면의 지오메트리(Geometry)가 어떤 식으로 흐르는가에 따라 렌더링 결과가 달라진다. 따라서, 다음과 같은 주의사항에 유념하라:
  - N-곤[^1]은 셰이딩(shading)이 들어가는 표면에만 사용하라.
  - 폴리곤(polygon)[^2]은 꼭 필요한 경우가 아니라면 사용하지 마라.
  - 각 노멀(normal)[^3]이 항상 올바른 방향을 바라보도록 하라.

## 원문

- [6 key principles for 3D modeling](https://youtu.be/OVbIOHAI3iY)

[^1]:
  N-곤은 4개 이상의 버텍스(vertex)로 이뤄진 면(face)을 일컫는다.

[^2]:
  폴리곤은 3개의 버텍스로 이뤄진 면을 일컫는다.

[^3]:
  면이 바라보는 벡터를 일컫는다. 법선(法線) 벡터라고도 부른다.
