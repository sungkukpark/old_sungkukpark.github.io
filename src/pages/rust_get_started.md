---
title: "[Rust] Rust 설치하기"
date: "2021-02-02"
---

## Rust 설치

macOS나 Linux와 같은 Unix 계열 OS에서는 다음 명령을 통해 Rust를 설치하게 된다.

```rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

위의 명령어를 입력하면 다음 메시지가 뜬다.

## Rust에 오신 것을 환영합니다!

여기서는 Rust 프로그래밍 언어의 공식 컴파일러와 Rust의 패키지 매니저인 Cargo를 다운로드하고 설치할 것입니다.

Rustup 메타데이터와 툴체인은 Rustup 다음 홈 디렉토리(home directory)에 설치될 것입니다: 

```rust
/Users/[사용자명]/.rustup
```

이 경로는 `RUSTUP_HOME` 환경 변수를 통해 추후 변경할 수 있습니다.

Cargo의 홈 디렉토리는 다음에 위치하게 됩니다:

```rust
/Users/[사용자명]/.cargo
```

이 경로는 `CARGO_HOME` 환경 변수를 통해 추후 변경할 수 있습니다.

cargo, rustc, rustup와 여타 다른 명령어들은 다음 Cargo의 bin 디렉토리에 추가될 것입니다:

```rust
/Users/[사용자명]/.cargo/bin
```

이 경로는 다음 프로필 파일들의 PATH 환경 변수를 변경함으로써 추후 추가될 것입니다.

```rust
/Users/[사용자명]/.profile
/Users/[사용자명]/.bash_profile
/Users/[사용자명]/.bashrc
/Users/[사용자명]/.zshenv
```

당신은 언제든 rustup의 자가-삭제 기능을 통해 Rust를 지울 수 있고 이는 언제든 복구 가능합니다.

현재 설치 옵션들입니다:

```
default host triple: x86_64-apple-darwin
default toolchain: stable (default)
profile: default
modify PATH variable: yes
```

```
1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
```

## 설치 옵션 선택하기

이제 주어진 메뉴 중에 하나를 고르면 된다.

```
1) 기본(default) 설정으로 설치하기
2) 설치 옵션을 변경하기
3) 설치 취소하기
```

나는 기본 설정으로 설치를 진행하도록 하겠다.

1을 입력한 뒤 Enter를 치면 이후에는 자동으로 다운로드가 진행되며 Rust를 설치하게 된다. 설치 이후에는 다음과 같은 메시지와 함께 설치가 완료되게 된다.

## Rust가 막 설치되었습니다. 멋집니다!

Rust를 시작하기 위해서는 Cargo의 bin 디렉토리 (`$HOME/.cargo/bin`)를 PATH 환경 변수에 추가할 필요가 있습니다. 다음에 로그인하는 경우에 이는 자동으로 수행됩니다.

만약 현재 쉘(shell)을 변경하고 싶으면 다음 명령을 입력하세요:

```rust
source $HOME/.cargo/env
```

## 설치가 잘 되었는지 테스트하기

Rust와 Cargo(Rust의 패키지 매니저)가 설치가 잘 되었는지 테스트하기 위해서는 터미널에 다음 명령을 입력하면 된다:

```
cargo --version
```

만약, Rust와 Cargo가 정상적으로 설치되었다면 위의 명령을 입력했을 때 다음과 유사한 결과값이 출력되게 된다:

```
cargo 1.49.0 (d00d64df9 2020-12-05)
```

## 참고 자료

- [Getting started - Rust Programming Language](https://www.rust-lang.org/learn/get-started)
