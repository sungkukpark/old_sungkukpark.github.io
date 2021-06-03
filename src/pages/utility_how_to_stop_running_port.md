---
title: "[Utility] 기존에 점유된 포트의 프로세스를 중지하는 방법"
date: "2020-05-16"
---

Gatsby 등을 사용해 특정 포트를 사용하려고 하면 다음 메시지와 함께 해당 포트를 사용할 수 없는 문제가 있다.

```
Something is already running at port 8000
✔ Would you like to run the app at another port instead? … no
```

이때는 다음 터미널 명령을 통해 기존에 점유된 포트의 프로세스를 중지하는 식으로 대응할 수 있다.

```
kill -9 $(lsof -i TCP:8000 | grep LISTEN | awk '{print $2}')
```

## 참고 자료

- [[Utility Post] What’s Running on Port 8000? (And how to stop it)](https://medium.com/@valgaze/utility-post-whats-running-on-port-8000-and-how-to-stop-it-2ed771fbb422)
