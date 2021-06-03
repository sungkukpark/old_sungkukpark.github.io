---
title: "[React] GraphQL 소개"
date: "2020-12-01"
---

## GraphQL이란 무엇인가

GraphQL은 API를 위한 쿼리(query; 질의) 언어로서 이미 존재하는 데이터로 쿼리를 수행하기 위한 서버사이드 런타임이다. 여기서 쿼리(query)란 명사형으로 쓰면 데이터베이스의 특정 정보에 대한 요청(request)를 뜻하며 동사형으로 쓰면 그 요청 행위를 뜻한다. GraphQL은 페이스북(Facebook)에 의해 개발되고 오픈소스화된 새로운 API 표준으로서 REST를 대체하는 쿼리이다.

요컨대,

1. GraphQL은 **언어(language)**이다
2. GraphQL은 **런타임(runtime)**이다

### GraphQL은 언어이다

GraphQL은 언어이다. 만약 특정 클라이언트 어플리케이션이 이 언어를 가르치면 해당 어플리케이션은 선언적으로 그것이 필요한 데이터 요구사항을 지정할 것이고 이에 대응하는 백엔드 데이터 서비스 역시 GraphQL을 이해하고 이에 반응할 것이다.

### GraphQL은 런타임이다

GraphQL은 런타임이다. 그리고 런타임(runtime)이란 일종의 실행 계층(layer)으로서 서버 애플리케이션이 GraphQL 언어로 작성된 어떤 요청이든 이해하고 반응할 수 있는 실행 계층이다. 간단히 말해서, 이는 GraphQL 언어의 통역사 내지 GraphQL어(語)를 구사하는 데이터 서비스의 에이전트(agent) 역할을 하는 계층이라고 이해하면 된다.

## 참고 자료

- [Samer Buna, *Learning GraphQL and Relay* (Packt, 2016)](https://www.packtpub.com/web-development/learning-graphql-and-relay)
