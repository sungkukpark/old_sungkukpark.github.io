---
title: "[Unity] Immediate Mode GUI (IMGUI)란?"
date: "2018-12-14"
---

[Immediate Mode GUI (IMGUI)]: https://docs.unity3d.com/Manual/GUIScriptingGuide.html

IMGUI라고 부르는 Immediate Mode GUI 시스템은 유니티의 GameObject 기반의 UI 시스템과는 **완전히 별개의** UI 시스템이다. IMGUI는 코드에 의해 구동되는 GUI 시스템으로 프로그래머의 도구로서 활용될 목적으로만 설계되었다. IMGUI는 특정 스크립트의 OnGUI 호출에 의해 구동된다. IMGUI의 구현 예는 다음과 같다:

```csharp
using UnityEngine;

public class IMGUIBasicsExample : MonoBehaviour
{
    private void OnGUI()
    {
        if (GUILayout.Button("Press Me"))
        {
            Debug.Log("Hello!");
        }
    }
}
```

위의 코드는 다음과 같은 버튼이 게임 씬(scene) 상에 표시되는 결과를 가져온다:

![GUIScriptingGuideHelloExample](./unity_immdiate_mode_gui/GUIScriptingGuideHelloExample.png)

## Immediate Mode GUI의 목적

Immediate Mode GUI 시스템은 다음과 같은 목적으로 사용된다:

- 인-게임 디버깅 디스플레이나 도구 제작
- 스크립트 컴포넌트를 위한 커스텀 인스펙터 제작
- Unity를 확장하기 위한 새로운 에디터 윈도우나 도구 제작

IMGUI 시스템은 플레이어가 사용하고 상호작용하게 되는 일반적인 인-게임 UI로 사용되기 위해 설계된 것이 아니다. 해당 목적을 위해서는 Unity가 기본으로 제공하는 GameObject 기반의 UI 시스템을 사용하면 된다. 이 UGUI 시스템은 GameObject 기반의 UI 요소 편집 및 배치 기능을 제공하며 UI의 시각적인 디자인과 레이아웃 용도로 더 적합하다.

“Immediate Mode”라는 수식어는 IMGUI가 생성되고 그려지는 방식 자체를 지시한다. IMGUI 요소를 생성하기 위해서는 프로그래머가 `OnGUI`라는 이름의 특별한 함수 안에 코드를 작성해야 한다. 인터페이스를 표시하는 해당 코드는 매 프레임마다 실행되며, 화면에 직접 그려진다. 이 과정에서 `OnGUI` 코드가 부착된 객체 이외의 게임 오브젝트나 hierarchy 씬 상의 객체는 해당 프로세스에 관여하지 않는다.

IMGUI는 다양한 기능을 가진 GUI 요소들을 코드를 통해 생성할 수 있도록 해준다. IMGUI는 개발자가 게임 오브젝트를 직접 생성하거나, 수동으로 배치하거나, 해당 기능을 조작하기 위한 코드를 작성하는 일 없이 코드 몇 줄을 작성하는 것만으로 원하는 GUI 요소들을 생성하게 해준다. 해당 코드는 단일한 함수 호출만으로 각 GUI 컨트롤(control)을 그리고 조작하는 기능을 제공한다.

---

원문: [Immediate Mode GUI (IMGUI)]
