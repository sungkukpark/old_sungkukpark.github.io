---
title: "[OpenGL] GLWL 소개 및 설치 (윈도우와 Mac의 경우)"
date: "2021-09-28"
---

## GLFW 소개

GLFW는 오픈 소스 멀티플랫폼 라이브러리로서 데스크탑에서의 OpenGL, OpenGL ES, Vulkan 개발을 지원한다. GLFW는 창(windows), 컨텍스트(contexts), 서페이스(surfaces)를 생성하고 입력과 이벤트를 받는 간결한 API를 제공한다.

GLFW는 C로 작성되었으며 윈도우, macOS, X11, 그리고 Wayland 운영 체제를 지원한다.

## GLFW 설치

### 윈도우의 경우

1. [GLFW 공식 홈페이지](https://www.glfw.org/)에서 GLFW를 다운로드 받는다.

2. Visual Studio를 통해 새로운 프로젝트를 생성한 뒤 해당 GLFW 라이브러리의 `include` 폴더를 `C/C++ -> Additional Include Directories`에 추가한다.

3. 해당 GLFW의 라이브러리 파일을 `Configuration Properties -> Linker -> Input`에 추가한다.

4. C++ 파일을 생성한 다음 [GLFW 튜토리얼 코드](https://www.glfw.org/documentation.html)를 복사해 붙여넣는다.

5. Visual Studio를 통해 해당 프로젝트를 빌드하고 실행한다.

## Mac의 경우

1. 다음 명령을 통해 Homebrew에서 GLFW를 설치한다.

```shell
brew install glfw
```

2. C++ 파일을 생성한 다음 [GLFW 튜토리얼 코드](https://www.glfw.org/documentation.html)를 복사해 붙여넣는다.

```
/* Ask for an OpenGL Core Context */
#define GLFW_INCLUDE_GLCOREARB
#include <GLFW/glfw3.h>

int main(void)
{
    GLFWwindow* window;

    /* Initialize the library */
    if (!glfwInit())
        return -1;

    /* Create a windowed mode window and its OpenGL context */
    window = glfwCreateWindow(640, 480, "Hello World", NULL, NULL);
    if (!window)
    {
        glfwTerminate();
        return -1;
    }

    /* Make the window's context current */
    glfwMakeContextCurrent(window);

    /* Loop until the user closes the window */
    while (!glfwWindowShouldClose(window))
    {
        /* Render here */
        glClear(GL_COLOR_BUFFER_BIT);

        /* Swap front and back buffers */
        glfwSwapBuffers(window);

        /* Poll for and process events */
        glfwPollEvents();
    }

    glfwTerminate();
    return 0;
}
```

3. 다음 명령을 통해 주어진 C++ 파일을 컴파일한다. `[/path/to/cpp/file]` 문자열은 컴파일할 C++ 파일의 경로로 대체한다.

```shell
clang++ -std=c++11 -stdlib=libc++ -lglfw -framework CoreVideo -framework OpenGL -framework IOKit -framework Cocoa -framework Carbon [/path/to/cpp/file]
```

4. 터미널을 통해 컴파일된 `a.out` 파일을 실행한다.

## 참고 자료

- [OpenGL Development on OS X](https://gist.github.com/v3n/27e810ac744b076ceeb7)
