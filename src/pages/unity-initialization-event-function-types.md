---
title: "[Unity] 초기화 이벤트 함수 3형제: Awake, Start, OnEnable"
date: "2018-11-21"
---

[MonoBehaviour.Awake()]: https://docs.unity3d.com/ScriptReference/MonoBehaviour.Awake.html
[MonoBehaviour.Start()]: https://docs.unity3d.com/ScriptReference/MonoBehaviour.Start.html
[MonoBehaviour.OnEnable()]: https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnEnable.html
[MonoBehaviour.OnDisable()]: https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnDisable.html
[이벤트 함수의 호출 순서(Execution Order of Event Functions)]: https://docs.unity3d.com/Manual/ExecutionOrder.html
[스크립트 라이프사이클 플로우차트(Script Lifecycle Flowchart)]: https://docs.unity3d.com/uploads/Main/monobehaviour_flowchart.svg

원문: [MonoBehaviour.Awake()], [MonoBehaviour.Start()], [MonoBehaviour.OnEnable()], [MonoBehaviour.OnDisable()]

최종 업데이트: 2018년 11월 21일

본문은 Update 초기화 이벤트 함수 3형제인 Awake, Start, OnEnable를 소개하는 글이다. 각 함수에 해당하는 유니티 공식 문서를 참고했으며 예제 프로젝트를 빌드하면서 새로이 확인한 사항들도 본문에 추가했다. 최근 필자가 유니티 클라이언트 면접 당시 기출되었던 질문이므로 면접을 앞두고 있다면 한번 읽어봐도 좋을 것이다.

## MonoBehaviour.Awake()

Awake는 스크립트의 인스턴스가 로드(loaded)되는 순간 호출된다.

Awake는 게임이 시작하기 전에 변수나 게임 상태를 초기화하기 위해 사용된다. Awake는 스크립트 인스턴스의 객체 생애주기에 걸쳐 **단 한 번만** 호출된다. Awake는 모든 객체들이 초기화된 이후에야 호출되며, 이 때문에 개발자는 다른 객체들에 안전하게 접근할 수 있다고 전제하고 GameObject.FindWithTag 등의 함수로 이들을 얻을 수 있다. 각 GameObject의  Awake는 각 객체마다 임의의 순서로 호출된다. 이 때문에, 스크립트 간의 참조 관계는 Awake에서 설정하고 Start 내에서 객체 간의 정보를 주고 받는 식으로 초기화 구문들을 사용해야 한다. Awake는 언제나 Start 함수보다 먼저 호출된다. 이는 스크립트 간의 초기화에 있어 순서를 부여하게 해준다.

**참고 1:** Unity에서는 초기화에 있어 생성자(constructor) 대신 Awake를 사용하라. 왜냐하면 생성 시간(construction time)에 있어 컴포넌트의 직렬화된 상태는 정의되지 않았기 때문이다(undefined). 생성자와 마찬가지로 Awake는 단 한 번만 호출된다.

**참고 2:** Awake 함수는 Start와 달리 코루틴(coroutine)으로 사용할 수 없다.

**참고 3:** Awake 함수는 GameObject 객체가 비활성화되어 있는 상태에서는 **호출되지 않는다**.

**참고 4:** Awake 함수는 스크립트 비활성화 여부와 상관 없이 **호출된다**. 즉, 이벤트 함수에 있어서 GameObject 객체의 비활성화 여부와 스크립트의 비활성화 여부는 분리해서 이해해야 한다.

```csharp
using UnityEngine;

public class AwakeExampleClass : MonoBehaviour {

    public const string TagPlayer = "Player";

    private GameObject target;

    private void Awake() {

        Debug.Log("Awake");

        target = GameObject.FindWithTag(TagPlayer);

        if (target != null) {
            Debug.LogFormat("{0} reference has been set successfully.", TagPlayer);
        }
        else {
            Debug.LogErrorFormat("{0} reference has not been set.", TagPlayer);
        }
    }

    // Start() 함수가 없으면 스크립트를 활성화하거나 비활성화하는 체크 박스가 표시되질 않는다.
    private void Start() {
        // do nothing
    }
}
```

## MonoBehaviour.Start()

Start는 스크립트가 활성화되는 순간, 모든 Update 메서드의 최초 호출에 앞서 첫 번째 프레임에 호출된다.

Awake와 마찬가지로, Start는 스크립트 인스턴스의 객체 생애주기에 걸쳐 **단 한 번만** 호출된다. 하지만 Awake가 객체가 초기화되는 순간 스크립트의 비활성화 여부와 관계 없이 호출되는데 비해, Start는 초기화 시점(initialisation time)에 스크립트가 비활성화되어 있다면 Awake가 호출되는 해당 프레임에 호출되지 않는다.

Awake 함수는 씬(Scene) 내의 그 어떤 오브젝트의 Start 함수가 호출되기에 앞서 호출이 된다. 이 사실은 어떤 A라는 객체의 초기화 코드가 다른 B라는 객체의 초기화 코드에 종속되어 있을 때 Awake에서 B부터 초기화한 다음 Start에서 A를 초기화하는 식으로 사용하는데 활용할 수 있다. 다시 말해, 종속 관계에 있는 초기화 코드의 경우는 Awake에서 먼저 초기화를 해준 다음 Start에서 뒤늦은 초기화를 해주는 식으로 초기화에 순서를 부여할 수 있다.

**참고 1:** 단, 게임플레이(gameplay) 도중에 생성된 객체들의 경우에는, 새로 생성된 해당 객체들의 Awake 함수는 씬 내부 모든 기존 객체의 Start 함수 호출이 완료된 이후에야 호출된다.

**참고 2:** Start 함수는 Awake 함수와 달리 코루틴으로 사용할 수 있다.

```csharp
using System.Collections;
using UnityEngine;

public class StartExampleClass : MonoBehaviour {

    private IEnumerator Start() {
        Debug.Log("Start 1");
        yield return new WaitForSeconds(2.5f);
        Debug.Log("Start 2");
    }
}
```
## MonoBehaviour.OnEnable()

OnEnable은 객체가 활성화 상태가 되면 호출된다.

**참고:** OnEnable 함수는 Start와 달리 코루틴으로 사용할 수 없다.

[이벤트 함수의 호출 순서(Execution Order of Event Functions)] 문서에 포함된 [스크립트 라이프사이클 플로우차트(Script Lifecycle Flowchart)]를 참조할 때, 각 초기화 이벤트 함수는 다음 순서대로 호출된다는 것을 확인할 수 있다:

> Awake → OnEnable → Start

```csharp
using UnityEngine;

public class OnEnableExampleClass : MonoBehaviour {

    private void Awake() {
        Debug.Log("Awake");
    }

    private void Start() {
        Debug.Log("Start");
    }

    private void OnEnable() {
        Debug.Log("OnEnable");
    }
}
```

따라서 위의 OnEnableExampleClass가 유니티 상에서 활성화되었다고 가정할 때, 콘솔에 출력될 각 함수들의 호출 순서 내지 문자열은 다음과 같다:

```csharp
Awake
OnEnable
Start
```
