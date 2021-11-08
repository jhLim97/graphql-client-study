# graphql-study

graphql 학습을 위한 저장소

### 학습하게 된 계기

- 그룹 프로젝트에서 새로운 기술에 도전해 보기 위해서 선택
- 공식문서에 나와있는 설명 중 아래와 같은 요소들이 매력적이라 생각함
  - api 버전별 관리할 필요가 없다.
  - 정해진 response가 아닌, 필요한 데이터를 원하는만큼 클라이언트에서 정해서 가져올 수 있다.
## 클라이언트
### 많은 라이브러리 중 Apollo를 선택한 이유

- 공식문서에서 아래와 같이 세 가지 라이브러리에 대한 설명을 명시해줌으로써, 선택의 여지를줌

1. Apollo-client (**자료많고, 시작단계에서 익히기 쉽다.**)

   ⇒ 이해하기 쉽고 유연하며 강력한 GraphQL 클라이언트를 구축하기 위한 커뮤니티 주도의 노력으로 확장해왔다. React, Vue 등과 관련된 자바스크립트 인기있는 라이브러의 클라이언트이다.

2. Relay

   ⇒ 성능에 크게 최적화되어 있으며 가능한 경우 네트워크 트래픽을 줄이려고 하는 등 성능면에서는 우수하지만, 러닝커브가 상대적으로 크다. 지금 막 시작한다면 추천하지는 않는다.

3. urql

   ⇒ Relay 및 Apollo에 비해 GraphQL 클라이언트에 대해 보다 동적인 접근 방식이며 새로운 프로젝트입니다. React에 중점을 두고 있지만 핵심은 단순성과 확장성에 중점을 둡니다.

- 위의 대표적인 3가지 라이브러리 중 빠르게 학습하고 React에 효과적으로 사용할 수 있는 Apollo를 선택

### 실습 내용

- useQuery와 useMutation
  - 전자는 데이터 요청만 보내고 수정, 삭제와 같은 작업은 후자를 이용
  - 이와 같은 React Hooks 함수를 제공하면서 데이터를 가져오고 UI를 업데이트하는 일련의 과정을 지원
## 서버
### 실습 내용
- 공식문서의 apollo-server 실습수행
- epress 서버와 결합해서 사용하고 싶은경우 apollo-server-express패키지를 사용하면 된다.
### 주요 개념
1. Schema
* 클라이언트가 요청할 수 있는 데이터 구조를 정의한다.
* Rest API와 달리 하나의 엔드포인트가 존재하는 대신, 스키마를 관리해야 한다.
* Rest API가 swagger를 통해 API 문서를 관리하듯이, Graphql은 introspection를 통해 스키마를 관리할 수 있다.
2. Resolver
* 특정 쿼리가 요청됐을 때, 해당하는 타입에 따라 원하는 로직을 수행하도록 매칭시켜주는 역할을 한다.
* 아래와 같이 특정 쿼리를 Resolver 함수에 매핑할 수 있다.
```jsx
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};
```
