# JSX의 정의와 역할
## 1. JSX의 개념
JSX = A Syntax Extension to JavaScript (자바스크립트의 확장 문법)

### JSX가 자바스크립트의 문법을 확장시키는 방법
JSX는 자바스크립트와 XML, HTML을 합친 것<br>
#### JSX 예제 코드
```JavaScript
const element = <h1>Hello, world! </h1>;
```
## 1. JSX의 역할
JSX는 내부적으로 XML, HTML 코드를 JS로 변환하는 과정을 거침. <br>
➡️ 실제로 우리가 JSX로 코드를 작성해도 최종적으로는 JS 코드가 나오게 됨

JSX를 JS로 변환하는 역할을 하는 것이 createElement라는 함수

#### JSX의 사용여부에 따른 코드 비교
```JavaScript
사용한 코드
const element = (
    <h1 className="greeting">
        Hello,world!
    </h1>
)

사용하지 않은 코드

const element = React.createElement (
    'h1',
    { className: 'greeting' },
    'Hello, world!'
)
```

React는 객체들을 읽어서 DOM을 만드는 데 사용하고 항상 최신 상태로 유지합니다.

객체 = element

## createElement 함수의 파라미터
1. 엘리먼트의 유형, 타입
ex) div, span과 같은 html 태그가 올 수도 있고 다른 React 컴포넌트가 들어갈 수도 있음.

2. props
3. children <br>
엘리먼트가 포함하고 있는 자식 엘리먼트