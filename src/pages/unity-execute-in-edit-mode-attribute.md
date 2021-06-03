---
title: "[Unity] 편집 모드에 필요한 처리는 [ExecuteInEditMode]에 맡겨!"
date: "2019-01-04"
---

[Documentation | ExecuteInEditMode]: https://docs.unity3d.com/Manual/GUIScriptingGuide.html

원문: [Documentation | ExecuteInEditMode]

Unity에서 개발할 때 가장 기본적인 반복 개발 프로세스는 게임에 변경을 가하는 단계와 게임을 플레이함으로써 해당 변경을 테스트하는 단계들로 이루어진다. 이는 Unity에서 다음 두 가지 모드(Mode)에 대응된다.

1. 편집 모드(Edit Mode): 게임에 변경을 가한다
1. 플레이 모드(Play Mode): 게임을 플레이함으로써 해당 변경을 테스트한다

그런데, 일반적인 Unity상에서의 스크립트를 구성하는 MonoBehaviour 객체들은 플레이 모드에서만 실행(excecute)된다. 즉, Unity 에디터 화면 상단의 툴바(Toolbar)에서 플레이 컨트롤(play control) 버튼을 누르지 않는 이상 해당 스크립트가 일반적으로는 처리되지 않는 것이다. 이때, [ExecuteInEditMode] 어트리뷰트(attribute)는 **편집 모드에서도 MonoBehaviour 스크립트의 각 이벤트 함수가 호출되게 해준다**.

## [ExecuteInEditMode] 소개

특정 스크립트의 모든 인스턴스(instances)가 편집 모드(Edit Mode)에서 실행되게 만든다.

기본적으로, MonoBehaviour는 오직 플레이 모드(Play Mode)에서만 실행된다. 하지만 [ExecuteInEditMode] 어트리뷰트를 추가함으로써 각 MonoBehaviour의 인스턴스의 콜백 함수(callback functions), 즉 이벤트 함수가 Unity 에디터의 편집 모드(Edit Mode)에서도 실행되게 만들어준다.

단, [ExecuteInEditMode] 어트리뷰트를 통해 호출되는 이벤트 함수들은 플레이 모드에서처럼 지속적으로 호출되지는 않는다. 다음은 해당 어트리뷰트를 통해 호출되는 각 이벤트 함수 동작의 차별점이다.

- Update는 씬 뷰(Scene View)에 변경이 있을 때 호출된다 (플레이 모드 시에는 매 프레임마다 호출).
- OnGUI는 게임 뷰(Game View)가 해당 함수 내에서 사용하지 않는 EventType.ScrollWheel 따위의 비-에디터-전용 이벤트를 받았을 때 호출된다. 특히, 각 이벤트가 EventType.KeyDown, EventType.KeyUp 등의 에디터 키보드 단축키 시스템으로 전달되지 않았을 때 호출된다. 게임 뷰로 전달된 이벤트는 큐(queue)에 쌓여 순차적으로 처리되며, 발생 즉시 처리를 보장하지 않는다.
- OnRenderObject나 다른 렌더링 콜백 함수들은 씬 뷰나 게임 뷰를 새로 그릴 때(repaint)마다 호출된다.

## [ExecuteInEditMode] 구현

```csharp
using UnityEngine;

// ExecuteInEditModeExample 스크립트는 GameObject에 부착되어 있다.
// Awake 함수는 GameObject가 런타임에 초기화될 떄 호춢된다.
// 이 스크립트는 또한 에디터 상에서도 호출된다.
// 예컨대, 현재 씬에서 프로젝트 창(Project Window)의
// 다른 씬으로 이동할 때 해당 스크립트가 호출된다.
// Update() 함수 역시 에디터 상에서 호출되는데, 예를 들면,
// GameObject의 transform의 위치가 에디터 상에서 변경될 때 호출된다.
[ExecuteInEditMode]
public class ExecuteInEditModeExample : MonoBehaviour
{
    private void Awake()
    {
        Debug.Log("Editor가 이 Awake를 호출합니다");
    }

    private void OnEnable()
    {
        Debug.Log("Editor가 이 OnEnable를 호출합니다");
    }

    private void Start()
    {
        Debug.Log("Editor가 이 Start를 호출합니다");
    }

    private void Update()
    {
        Debug.Log("Editor가 이 Update를 호출합니다");
    }

    private void OnDisable()
    {
        Debug.Log("Editor가 이 OnDisable을 호출합니다");
    }

    private void OnDestroy()
    {
        Debug.Log("Editor가 이 OnDestroy를 호출합니다");
    }
}
```
