---
title: "[Windows] 윈도우 메뉴 왼쪽으로 열리는 것을 오른쪽으로 열리게 하기"
date: "2021-07-19"
---

1. 먼저 `regedit` 명령을 실행해 레지스트리 편집기를 연다.
2. 다음 문자열을 주소 표시줄에 붙여넣어 해당 경로로 이동한다.

    ```bash
    HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows
    ```

3. `REG_SZ`[^1] 타입의 `MenuDropAlignment` 항목의 값을 `0`에서 `1`로 변경한다.
4. 여기서 `0`은 오른쪽으로 열리게 하기(왼손잡이용)다.
5. 여기서 `1`은 왼쪽으로 열리게 하기(오른손잡이용)다.

[^1]: 여기서 `REG_SZ`의 값은 `0x01`으로 "고정 길이의 유니코드 문자열" 타입을 의미한다.
