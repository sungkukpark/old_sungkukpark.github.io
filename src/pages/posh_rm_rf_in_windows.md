---
title: "[Powershell] 윈도우에서의 rm -rf"
date: "2020-08-02"
---

## Commmand Prompt의 경우

일반적인 윈도우 Commmand Prompt에서 폴더 및 파일을 재귀적으로 지울 때는 다음 명령과 옵션을 사용한다.

```
del /f /q /s [폴더 또는 파일 경로]
```

해당 del 명령어에 대한 도움말을 얻고 싶다면 다음 명령을 실행한다.

```
del \?
```

## Powershell의 경우

윈도우 Powershell에서 폴더 및 파일을 재귀적으로 지울 때는 다음 명령과 옵션을 사용한다.

```
Remove-Item -Recurse -Force [폴더 또는 파일 경로]
```

해당 Remove-Item에 대한 도움말을 얻고 싶다면 다음 명령을 실행한다.

```
help Remove-Item
```

## 참고 문헌

- [Remove-Item (Microsoft.PowerShell.Management) - PowerShell | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7)
