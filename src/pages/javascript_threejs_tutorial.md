---
title: "[JavaScript] three.js 튜토리얼"
date: "2021-10-15"
---

[three.js]: https://threejs.org/build/three.js

## three.js 예제 코드 템플릿 만들기

1. 다음과 같은 HTML 파일을 하나 생성한다.
2. [three.js] 파일을 다운로드 받은 뒤 해당 파일을 HTML 파일이 위치한 루트 디렉토리를 기준으로 `js/three.js` 경로에 배치한다. 즉, `js`라는 빈 폴더를 만든 다음 그 안에 `three.js` 파일을 배치한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My first three.js app</title>
    <style>
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <script src="js/three.js"></script>
    <script>
      // 예제로 작성할 JavaScript 코드는 여기에 들어간다.
    </script>
  </body>
</html>
```

## 화면(Scene) 만들기

three.js에서 뭔가를 화면에 출력하기 위해서는 다음 3요소가 필요하다:

1. 화면(Scene)
2. 카메라(Camera)
3. 렌더러(Renderer)

즉, 카메라로 화면에 뭔가를 렌더링하는 것이다.

```js
// Create a scene.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
```

## 정육각형(cube) 그리기

```js
// Draw a cube.
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

renderer.render( scene, camera );
```

## 정육각형 애니메이팅하기

위의 코드에서 `renderer.render( scene, camera );` 이 줄을 제거한 다음, 다음 코드 블록을 추가한다.

```js
// Animate the cube.
const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();
```

## 최종 예제

`gist:sungkukpark/3b52697a0bda30531ba71936e3ec529b#threejs_tutorial.html`

## 참고 자료

- [Creating a scene – three.js docs](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
- [Three.js Fundamentals](https://threejsfundamentals.org/)
