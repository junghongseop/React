
# JSX의 장점과 사용법
## JSX의 장점
### 1. 코드 간결성
#### JSX 사용함
```JavaScript
<div> Hello, {name}</div>
```
HTML의 div태그를 사용해서 name이 이라는 변수가 들어간 인삿말을 표현하고 있음

#### JSX 사용 안함
```JavaScript
React.createElement('div', null, `Hello, ${name}`);
```
React의 createElement 함수를 사용하여 동일한 작업을 수행

createElement 파라미터로 type, props, children를 사용하는 것을 볼 수 있음

### 2. 가독성 향상
가독성은 코드를 작성할 때 뿐만 아니라 유지 보수 관점에서도 굉장히 중요한 부분

가독성이 높을수록 코드상에 존재하는 버그 또한 쉽게 발견할 수 있기 때문

### 3. 인젝션 어택

인젝션 어택 = 입력창에 문자나 숫자 같은 일반적인 값이 아닌 소스 코드를 입력하여 해당 코드가 실행되도록 만드는 해킹 방법

기본적으로 React DOM은 렌더링하기 전에 인베딩된 값을 모두 문자열로 변환하기 떄문에 명시적으로 선언되지 않은 값은 괄호 사이에 들어갈 수 없음 <br>
➡️ XSS라는 크로스 사이트 스크립팅 어택을 방어할 수 있음

## JSX 사용법
JSX는 모든 JS문법을 지원
여기에 XML과 HTML을 섞어서 사용하면 됨

XML/HTML을 코드를 쓰다가 JS문법을 사용하고 싶다면 중괄호를 사용