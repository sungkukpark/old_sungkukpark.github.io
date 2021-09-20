---
title: "[Unity] 애니메이션 이벤트(AnimationEvent) 동적으로 추가하기"
date: "2021-09-20"
---

[AnimationEvent]: https://docs.unity3d.com/ScriptReference/AnimationEvent.html
[SendMessage]: https://docs.unity3d.com/ScriptReference/GameObject.SendMessage.html
[AnimationClip.AddEvent]: https://docs.unity3d.com/ScriptReference/AnimationClip.AddEvent.html
[AnimationUtility.SetAnimationEvents]: https://docs.unity3d.com/ScriptReference/AnimationUtility.SetAnimationEvents.html

## 애니메이션 이벤트(AnimationEvent)란?

애니메이션 이벤트([AnimationEvent])는 GameObject.SendMessage 메서드와 유사한 방식으로 애니메이션이 재생되는 동안 스크립트 함수를 호출하는 이벤트이다.

AnimationEvent는 인자 0..1개를 취한다. 인자는 float, int, string, object 또는 또 다른 AnimationEvent 타입의 인자를 취할 수 있다.

## AnimationEvent 동적으로 추가하기

애니메이션 이벤트는 [AnimationClip.AddEvent] 메서드를 통해 동적으로 애니메이션 클립(AnimationClip) 인스턴스에 추가할 수 있다.

```csharp
// Animator를 가지고 있는 GameObject에 여러 개의 AnimationEvent를 동적으로 추가하는 샘플 코드
using UnityEngine;

public class AddEventExample : MonoBehaviour
{
    public void Start()
    {
        var anim = GetComponent<Animator>();
        var clip = anim.runtimeAnimatorController.animationClips[0];
        
        // 주어진 객체의 애니메이션이 2초 지속된다고 가정할 때,
        // 0.5초 시점에 AnimationEvent로 전달된 int형 인자값을 출력하는 이벤트 추가
        var evt1 = new AnimationEvent
        {
            intParameter = 12345,
            time = 0.5f,
            // 이벤트를 통해 호출할 함수명 1
            functionName = "PrintInt"
        };
        
        // 주어진 객체의 애니메이션이 2초 지속된다고 가정할 때,
        // 1.5초 시점에 AnimationEvent로 전달된 string형 인자값을 출력하는 이벤트 추가
        var evt2 = new AnimationEvent
        {
            stringParameter = "test",
            time = 1.5f,
            // 이벤트를 통해 호출할 함수명 2
            functionName = "PrintStr"
        };

        clip.AddEvent(evt1);
        clip.AddEvent(evt2);
    }

    // 이벤트를 통해 호출될 함수 1
    public void PrintInt(int i)
    {
        print("PrintInt: " + i + " called at: " + Time.time);
    }
    
    // 이벤트를 통해 호출될 함수 2
    public void PrintStr(string str)
    {
        print("PrintStr: " + str + " called at: " + Time.time);
    }
}
```

## AnimationEvent를 정적으로 추가하기

위에서 알아본 AddEvent 메서드는 애니메이션 이벤트를 동적으로 추가한다. 여기서 AddEvent로 추가된 AnimationEvent는 플레이 모드가 종료되는 경우에 사라지게 된다. 해당 클립에 추가한 이벤트의 영속성(persistence)을 유지하기 위해서는 유니티 에디터 내에서 [AnimationUtility.SetAnimationEvents] 메서드를 호출하도록 한다.

요컨대, AnimationEvent를 동적으로 추가할 때는 [AnimationClip.AddEvent], 그게 아니라 유니티 에니터 내에서 정적으로 추가할 때에는 [AnimationUtility.SetAnimationEvents]를 활용하도록 한다.
