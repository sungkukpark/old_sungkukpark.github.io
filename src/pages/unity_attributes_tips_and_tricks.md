---
title: "[Unity] 유니티 어트리뷰트(Attributes) 활용 팁 총정리"
date: "2019-01-01"
---

[Unity Practice (Sungkuk Park)]: https://github.com/sungkukpark/unitypractice.git

<!-- 참고용 예제 저장소: [Unity Practice (Sungkuk Park)] -->

## 최근 변경 내역

- [Header] 항목 추가 (2019년 1월 2일)
- [ContextMenu] 항목 추가 (2019년 1월 2일)
- [ContextMenuItem] 항목 추가 (2019년 1월 2일)
- [Multiline] 항목 추가 (2019년 1월 2일)

---

## 개요 (Overview)

Unity 엔진이 제공하는 어트리뷰트(Attributes) 관련된 각종 팁과 요령을 사용 목적에 따라 소개한다. 특히, 인스펙터 창(Inspector)을 용도에 맞게 활용하는 활용 팁들을 많이 수록했고 그 이외에도 어트리뷰트를 활용하는 예제들을 포함했다.

---

## 인스펙터 창 확장

### [Header]: 인스펙터 창의 구역을 범주별로 나누기

인스펙터 창에서 여러 개의 공개 변수를 표시하고 이를 입력 받아야 하는 경우가 있다. 이때, 너무 많은 변수들이 규칙 없이 나열되어 있으면 한눈에 알아보기 어렵다. 이때, [Header] 어트리뷰트를 사용해 인스펙터 창의 구역을 범주별로 나누면 인스펙터 창을 한눈에 들어오게 만들 수 있다.

```csharp
using UnityEngine;

public class HeaderExample : MonoBehaviour
{
    [Header("Character Name")]
    public string charName = "Hero";
    
    [Header("Character Stats")]
    public int maxHealth = 100;
    public int maxMana = 100;

    [Header("Quest Log")]
    public int encounteredQuestCount;
    public int completedQuestCount;
    public int failedQuestCount;
}
```

<!-- ![HeaderAttr]({{ site.url }}/assets/2019-01-01-unity-attributes-tips-and-tricks/HeaderAttr.png) -->

### [ContextMenu]: 컴포넌트에 나만의 동작을 추가하기

인스펙터 창은 단지 변수를 편집하는 용도로 쓰는 것이 아니라, 변수에 대한 나만의(custom) 동작을 따로 추가하는 식으로 확장해 사용할 수 있다. 이때, [ContextMenu]는 해당 컴포넌트(Component)에 대해 나만의 함수를 추가해 호출할 수 있게 해준다. [ContextMenu] 어트리뷰트가 **변수가 아닌 함수 위에 추가**되는 것에 주목할 것.

```csharp
using UnityEngine;

public class ContextMenuExample1 : MonoBehaviour
{
    private const int MaxHealth = 100;

    public int currentHealth = MaxHealth;

    [ContextMenu("ResetHealthToMaximum")]
    public void ResetHealthToMaximum()
    {
        currentHealth = MaxHealth;
    }
}
```

<!-- ![BeforeContextMenu]({{ site.url }}/assets/2019-01-01-unity-attributes-tips-and-tricks/BeforeContextMenu.png) -->

<!-- ![AfterContextMenu]({{ site.url }}/assets/2019-01-01-unity-attributes-tips-and-tricks/AfterContextMenu.png) -->

### [ContextMenuItem]: 변수에 나만의 동작을 추가하기

또한, [ContextMenuItem]을 활용하면 해당 변수(variable) 대해 나만의 함수를 추가해 호출할 수 있게 해준다. [ContextMenuItem] 어트리뷰트가 **함수가 아닌 변수 위에 추가**되는 것에 주목할 것.

```csharp
using UnityEngine;

public class ContextMenuExample2 : MonoBehaviour
{
  private const int MaxHealth = 100;

    [ContextMenuItem("Set Random Health Value", "RandomizeHealth")]
    public int currentHealth = MaxHealth;

    public void RandomizeHealth()
    {
        currentHealth = UnityEngine.Random.Range(0, 100);
    }
}
```

<!-- ![BeforeContextMenuItem]({{ site.url }}/assets/2019-01-01-unity-attributes-tips-and-tricks/BeforeContextMenuItem.png) -->

<!-- ![AfterContextMenuItem]({{ site.url }}/assets/2019-01-01-unity-attributes-tips-and-tricks/AfterContextMenuItem.png) -->

---

## 변수 입력 범위 지정

### [Range]: 인스펙터 창에서 입력받을 값의 범위를 지정하기

인스펙터 창으로 값을 입력 받아야 하는 경우가 있는데, RGB Color 값처럼 0에서 255 사이의 정수값만을 입력해야 하는 경우가 있다. 이때, 아래와 같이 [Range] 어트리뷰트를 사용해 인스펙터 창에서 입력받을 값의 범위를 지정할 수 있다.

```csharp
using UnityEngine;

public class RangeExample : MonoBehaviour
{
    // 0부터 255까지의 정수값을 인스펙터 창을 통해 지정
    [Range(0, 255)]
    public int intVariableThatMustBeClamped = -255;

    // 0부터 1까지의 실수값을 인스펙터 창을 통해 지정
    [Range(0, 1)]
    public float floatVariableThatMustBeClamped = -100;

    // 0부터 100까지의 실수값을 인스펙터 창을 통해 지정
    [Range(0, 100)]
    public double doubleVariableThatMustBeClamped = 200;
}
```

단, **해당 변수에 들어있는 값은 아래와 같이 실제 Range 어트리뷰트에 인자로 주어진 범위 내로 한정되지는 않는다**. 해당 범위는 단지 인스펙터 창에서 입력 가능한 범위에 영향을 줄 뿐이다.

<!-- ![BeforeClamped]({{ site.url }}/assets/2019-01-01-unity-attributes-tips-and-tricks/BeforeClamped.png) -->

아래에서는 인스펙터 창에서의 편집을 통해 Range 어트리뷰트에 인자로 주어진 범위 내의 값을 다시 지정했다. 주어진 범위 바깥의 값을 입력할 수 없는 것을 확인할 수 있다.

<!-- ![AfterClamped]({{ site.url }}/assets/2019-01-01-unity-attributes-tips-and-tricks/AfterClamped.png) -->

---

## 문자열 변경

### [TextArea]: 인스펙터 창에서 여러 줄의 텍스트 편집하기

여러 줄의 텍스트(multi-line text)를 string 타입의 공개 변수를 선언해 인스펙터 창으로 입력 받고 싶은 경우가 있을 것이다. 예컨대, 게임 내 등장인물들 간의 대화(dialogues) 데이터를 프로토타이핑하는 경우를 상정할 수 있다. 하지만, 기존 인스펙터 창의 string 변수를 입력받는 필드는 한 줄씩만 입력받는다. 우선, 아래와 같이 string 타입의 변수가 public으로 선언되고 실제 여러 줄의 텍스트로 해당 변수에 할당되었다고 가정하자.

```csharp
using UnityEngine;

public class TextAreaExample : MonoBehaviour
{
    public string multiLineTextInput = "Pikachu\n Raichu\n Charmander\n Squirtle";
}
```

이 경우, 실제 변수 "multiLineTextInput"에는 정확히 여러 줄의 텍스트가 정상적으로 할당되어 있다. 하지만, 인스펙터 창에서는 한 줄 씩만 보여주므로 아래와 같이 인스펙터 창을 통한 편집이 매우 어렵다.

<!-- ![NoTextAreaAttr]({{ site.url }}/assets/2019-01-01-unity-attributes-tips-and-tricks/NoTextAreaAttr.png) -->
> 일반적인 string 변수는 인스펙터 창에서 한 줄 씩만 편집할 수 있다.

이때, 아래와 같이 [TextArea] 어트리뷰트를 사용하면 인스펙터 창에서도 여러 줄의 텍스트를 편집하는 것이 가능하다.

```csharp
using UnityEngine;

public class TextAreaExample : MonoBehaviour
{
    [TextArea]
    public string multiLineTextInput = "Pikachu\n Raichu\n Charmander\n Squirtle";
}
```

<!-- ![YesTextAreaAttr]({{ site.url }}/assets/2019-01-01-unity-attributes-tips-and-tricks/YesTextAreaAttr.png) -->
> [TextArea] 어트리뷰트를 통해 인스펙터 창에서 여러 줄의 텍스트를 편집할 수 있게 되었다.

 그러나 여전히 Insepctor 창은 장문의 텍스트를 관리하는 용도로는 적합하지 않으므로, JSON이나 다른 파일 기반으로 여러 줄의 텍스트를 입력받기를 권장한다.

### [Multiline]: 인스펙터 창에서 여러 줄의 텍스트 편집하기 (다른 방법)

[TextArea] 어트리뷰트의 경우는 인스펙터 창에서 변수명 다음에 줄바꿈을 한 뒤 텍스트를 변경하는 식으로 출력된다. 만일, 인스펙터 창에서 다른 변수와 동일하게 변수명 뒤에 줄바꿈 없이 여러 줄의 텍스트를 편집하는 구역이 표시되게 하고 싶으면 [TextArea] 대신 [Multiline] 어트리뷰트를 쓰면 된다.

```csharp
using UnityEngine;
 
 public class MultiLineEditingExample : MonoBehaviour
 {
     [Header("Using TextArea")]
     [TextArea]
     public string multiLineTextInput1 = "Pikachu\n Raichu\n Charmander\n Squirtle";
     
     [Header("Using Multiline")]
     [Multiline]
     public string multiLineTextInput2 = "Pikachu\n Raichu\n Charmander\n Squirtle";
 }
```

<!-- ![MultilineAttr]({{ site.url }}/assets/2019-01-01-unity-attributes-tips-and-tricks/MultilineAttr.png) -->

---

## 캡슐화 (Encapsulation)

### [HideInInspector]: 인스펙터 창에서 public 변수 숨기기

다음처럼 public 변수이지만 인스펙터 창에서는 보이거나 변경해서는 안 되는 변수가 있다고 치자.

```csharp
using UnityEngine;

public class HideInInspectorExample : MonoBehaviour
{
    public int publicVariableButMustNotShowInInspector= 10;
}
```

이때, [HideInInspector]를 사용하면 해당 변수를 인스펙터 창에서 숨기면서 해당 변수가 여전히 직렬화(be serialized)되도록 만들어준다.

```csharp
using UnityEngine;
 
 public class HideInInspectorExample : MonoBehaviour
 {
     [HideInInspector]
     public int publicVariableButMustNotShowInInspector= 10;
 }
```

---

## 직렬화 (Serialization)

### [FormerlySerializedAs]: 변수명을 바꾸면서도 기존의 변수값을 보존하기

일반적으로, 인스펙터 창을 통해 변수값을 입력한 뒤 나중에 변수명을 바꾸면 해당 변수의 값은 초기화된다. 변수명을 바꾸는 것은 자주 있는 일이기 때문에 매번 인스펙터 창에 접근해 해당 변수값을 기억했다가 다시 그 값을 할당하는 것은 지나치게 번거롭다.

예를 들어, 다음과 같은 변수가 선언되고 다음과 같은 변수값이 인스펙터 창을 통해 할당되었다고 가정하자.

```csharp
using UnityEngine;

public class FormerlySerializedAsExample : MonoBehaviour
{
    public string importantDataThatHasToBeRenamed;
}
```

<!-- ![BeforeRenamed]({{ site.url }}/assets/2019-01-01-unity-attributes-tips-and-tricks/BeforeRenamed.png) -->

이때, [FormerlySerializedAs] 어트리뷰트를 사용하면 변수명을 바꾸면서도 기존의 변수 값을 보존할 수 있다. 용법은 다음과 같다:

`[FormerlySerializedAs("기존 변수명")]`

아래와 같이, [FormerlySerializedAs] 어트리뷰트를 통해 기존의 직렬화된(serialized) 변수값이 보존되게 된다.

```csharp
using UnityEngine;
using UnityEngine.Serialization;

public class FormerlySerializedAsExample : MonoBehaviour
{
    [FormerlySerializedAs("importantDataThatHasToBeRenamed")]
    public string renamedImportantDataThatHasToBeRenamed;
}
```

<!-- ![AfterRenamed]({{ site.url }}/assets/2019-01-01-unity-attributes-tips-and-tricks/AfterRenamed.png) -->

### [SerializeField]: 인스펙터 창에서 private 변수 확인 또는 변경하기

```csharp
using UnityEngine;

public class SerializeFieldExample : MonoBehaviour
{
    private float _privateVariableButMustBeModifiedInInspector;
}
```

이 경우, [SerializeField]를 사용하면 해당 변수를 인스펙터 창에 공개하면서도 여전히 스크립트 상에서는 private 변수로 취급할 수 있다. 이는 private 변수값의 변화를 인스펙터 상에서 추적하는 디버깅 용도로서 유용하다.

```csharp
using UnityEngine;

public class SerializeFieldExample : MonoBehaviour
{
    [SerializeField]
    private float _privateVariableButMustBeModifiedInInspector;
}
```

단, private 변수라도 인스펙터 창에서 해당 변수를 마음대로 변경할 수 있으므로 이는 **객체 지향의 정보 은닉성(Information Hiding)에 위배**된다. 따라서, [SerializeField]는 데이터 변경의 비용 절감에서 얻는 편익이 정보 은닉성을 위배할 때 발생하는 비용보다 클 때만 도입하도록 한다.
