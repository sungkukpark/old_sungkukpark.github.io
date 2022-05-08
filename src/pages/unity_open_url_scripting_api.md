---
title: "[유니티] 유니티 상에서 URL 열기"
date: "2022-05-08"
---

```csharp
using UnityEngine;
using System.Collections;

public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Application.OpenURL("http://unity3d.com/");
    }
}
```

## 참고 자료

- [Unity - Scripting API: Application.OpenURL](https://docs.unity3d.com/ScriptReference/Application.OpenURL.html)
