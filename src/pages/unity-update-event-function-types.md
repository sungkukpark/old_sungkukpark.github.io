---
title: "[Unity] Update 이벤트 함수 3형제: FixedUpdate, Update, LateUpdate"
date: "2018-11-14"
---

[MonoBehaviour.Update()]: https://docs.unity3d.com/ScriptReference/MonoBehaviour.Update.html
[MonoBehaviour.LateUpdate()]: https://docs.unity3d.com/ScriptReference/MonoBehaviour.LateUpdate.html
[MonoBehaviour.FixedUpdate()]: https://docs.unity3d.com/ScriptReference/MonoBehaviour.FixedUpdate.html
[이벤트 함수의 호출 순서(Execution Order of Event Functions)]: https://docs.unity3d.com/Manual/ExecutionOrder.html
[스크립트 라이프사이클 플로우차트(Script Lifecycle Flowchart)]: https://docs.unity3d.com/uploads/Main/monobehaviour_flowchart.svg
[Unity Practice (Sungkuk Park)]: https://github.com/sungkukpark/unitypractice.git

본문은 Update 이벤트 함수 3형제인 FixedUpdate, Update, LateUpdate를 개발자에게 친숙한 순서인 Update, LateUpdate, FixedUpdate 순서로 소개하는 글이다. 각 함수에 해당하는 유니티 공식 문서를 참고했으며 예제 프로젝트를 빌드하면서 새로이 확인한 사항들도 본문에 추가했다. 최근 필자가 유니티 클라이언트 면접 당시 기출되었던 질문이므로 면접을 앞두고 있다면 한번 읽어봐도 좋을 것이다.

## MonoBehaviour.Update()

Update 함수는 MonoBehaviour가 활성화되어 있을 때 매 프레임마다 호출된다.
Update는 유니티에서 가장 자주 사용되는 함수 중 하나이다.
그러나 모든 MonoBehaviour가 Update 함수를 가지고 있어야 하는 것은 아니다.

### UpdateExampleClass 예제에 대한 설명

1. 본 예제는 유니티의 인스펙터 상에서 UpdateExampleClass (Script)를 꺼둔 상태에서의 동작을 기술한다.
2. UpdateExampleClass는 Awake의 호출과 함께 시작된다.
3. 이때, 해당 게임 오브젝트는 false 값을 가진 activeSelf 변수를 가진다.
4. Start와 Update 함수들을 호출하기 위해 유니티 인스펙터 상에서 UpdateExampleClass (Script)를 활성화시키자.
5. activeSelf가 true로 바뀔 때 Start()와 Update() 함수들이 호출되어 결과적으로는 UpdateExampleClass가 실행될 것이다.

```csharp
public class UpdateExampleClass : MonoBehaviour {

    private float update;

    private void Awake() {
        Debug.Log("Awake");
        update = 0.0f;
    }

    private IEnumerator Start() {
        Debug.Log("Start1");
        yield return new WaitForSeconds(2.5f);
        Debug.Log("Start2");
    }

    private void Update() {
        update += Time.deltaTime;
        if (update > 1.0f) {
            update = 0.0f;
            Debug.Log("Update");
        }
    }
}
```

따라서 위의 UpdateExampleClass가 유니티 상에서 활성화되었다고 가정할 때, 콘솔에 출력될 각 함수들의 호출 순서 내지 문자열은 다음과 같다:

```csharp
Awake
Start1
Update
Update
Start2
Update
Update
Update
Update
// (...) MonoBehaviour가 활성화된 경우 "Update"만 무한 반복
```

여기서 "Start2" 이전에 "Update"가 2번 출력되는 것은 코루틴으로 구현된 Start()의 호출 간격이 2.5초이기 때문이다.

## MonoBehaviour.LateUpdate()

LateUpdate 함수는 Update 함수와 마찬가지로 MonoBehaviour가 활성화되어 있을 때 매 프레임마다 호출된다.

단, LateUpdate는 모든 Update 함수들이 호출된 이후에 호출된다.
이는 스크립트의 호출에 있어 순서를 부여할 때 유용하다.
예컨대, 팔로우 카메라(follow camera)는 반드시 LateUpdate에 구현되어야 한다.
왜냐하면 해당 오브젝트가 Update 함수 안에서 움직였을 가능성이 존재하기 때문이다.
또한, 유니티 상에서 LateUpdate는 Update와 마찬가지로 코루틴(Coroutine)으로 사용할 수 없다.

### LateUpdate에 대한 부가적인 정보

1. LateUpdate 함수 안에서 직전의 LateUpdate로부터 경과된 시간(elapsed time)를 계산하려면 Time.deltaTime을 사용하라.
2. LateUpdate 함수는 해당 MonoBehaviour가 활성화되어 있을 때에만 호출된다.
3. LateUpdate 함수를 호출하려면 해당 컴포넌트 내에서 해당 함수를 오버라이드(override)하라.

```csharp
public class LateUpdateExampleClass : MonoBehaviour {

    private void Update() {
        Debug.Log("Update");
    }

    private void LateUpdate() {
        Debug.Log("LateUpdate");
    }
}
```

따라서 위의 LateUpdateExampleClass가 유니티 상에서 활성화되었다고 가정할 때, 콘솔에 출력될 각 함수들의 호출 순서 내지 문자열은 다음과 같다:

```csharp
Update
LateUpdate
Update
LateUpdate
// (...) MonoBehaviour가 활성화된 경우 무한 반복
```

## MonoBehaviour.FixedUpdate()

FixedUpdate는 MonoBehaviour가 활성화되어 있을 때 매 고정 프레임레이트 프레임(fixed framerate frame)마다 반복된다.

FixedUpdate는 강체(Rigidbody)를 다룰 때 Update 대신 사용해야만 한다. 예컨대, 강체에 일정한 힘을 가할 때 매 프레임마다 호출되는 Update 함수 내부가 아니라 매 고정 프레임마다 해당 힘을 목표가 되는 강체에 가해야 한다.

유니티 공식 문서인 [이벤트 함수의 호출 순서(Execution Order of Event Functions)]의 [스크립트 라이프사이클 플로우차트(Script Lifecycle Flowchart)]를 참고할 때, 물리(Physics) 사이클이 Update와 LateUpdate 호출이 포함된 게임 로직(Game Logic) 사이클보다 항상 선행하므로 최종적인 Update 함수들의 호출 순서는 다음과 같다:

> FixedUpdate → Update → LateUpdate

```csharp
public class FixedUpdateExampleClass : MonoBehaviour {

    public Rigidbody rb;

    private void Start() {
        rb = GetComponent<Rigidbody>();
    }

    private void FixedUpdate() {
        if (rb != null) {
            rb.AddForce(10.0f * Vector3.up);
        }
        Debug.Log("FixedUpdate");
    }

    private void Update() {
        Debug.Log("Update");
    }

    private void LateUpdate() {
        Debug.Log("LateUpdate");
    }
}
```

따라서 위의 FixedUpdateExampleClass가 유니티 상에서 활성화되었다고 가정할 때, 콘솔에 출력될 각 함수들의 호출 순서 내지 문자열은 다음과 같다:

```csharp
FixedUpdate
Update
LateUpdate
FixedUpdate
Update
LateUpdate
// (...) MonoBehaviour가 활성화된 경우 무한 반복
```

---

원문: [MonoBehaviour.Update()], [MonoBehaviour.LateUpdate()], [MonoBehaviour.FixedUpdate()]

최종 업데이트: 2018년 11월 14일
