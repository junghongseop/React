# useMemo, useCallback, useRef
## 1. useMemo
useMemo hook은 memoized value를 리턴하는 훅<br>
memoization은 최적화를 하기 위해 사용하는 개념

useMemoHook 파라미터로 memoizedValue를 생성하는 create함수와 의존성 배열을 받는다.
#### useMemo() 사용법
```JavaScript
const memoizedValue = useMemo(
    () => {
        // 연산량이 높은 작업을 수행하여 결과를 반환
        return computeExpensiveValue(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
);
```
메모이제이션의 개념처럼 의존성 배열에 들어있는 변수가 변했을 경우에만 새로 create함수를 노출하여 결과값을 반환하며 그렇지 않은 경우에는 기존함수의 결과값을 그대로 반환<br>
렌더링할때마다 연산량이 높은 작업을 피할수 있다. 

useMemo 훅을 사용할 때 기억해야 할 점은 useMemo로 전달된 함수는 렌더링이 일어나는 동안 실행된다는 점<br>
➡️ 일반적으로 렌더링이 일어나는 동안 실행돼서는 안될 작업을 useMemo의 함수에 넣으면 안됨

- useMemo 훅에 의존성 배열을 넣지 않고 사용하는 것은 아무런 의미가 없음
- useMemo 훅에 의존성 배열을 빈 배열로 둔다면 컴포넌트가 마운될때만 함수가 호출

## 2. useCallback
값이 아닌 함수를 반환<br>
➡️ 배열의 값이 바뀐 경우에만 새로 정의해서 리턴

#### useCallback() 사용법
```JavaScript
const memoizedCallback = useCallback(
    () => {
        doSometing(의존성 변수1, 의존성 변수2);
    };
    [의존성 변수1, 의존성 변수2]
)
```
의존성 배열에 있는 변수 중 하나라도 변경되면 메모이제이션된 콜백 함수를 반환

## 3. useRef
레퍼런스를 사용하기 위한 훅

<b>레퍼런스란?</b><br>
특정 컴포넌트에 접근할 수 있는 객체를 의미

레퍼런스객체에는 current라는 속성이 있는데 이것은 현재 레퍼런스하고 있는 엘리먼트를 의미

#### useRef() 사용법
```JavaScript
const refContainer = useRef(초깃값);
```
파라미터로 초기값을 넣으면 해당 초기값으로 초기화된 레퍼런스 객체를 반환<br>
만약 초기값이 null 이라면 current의 값이 null인 레퍼런스 객체가 반환<br>
➡️ 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지, 즉 컴포넌트가 마운트 해제 전까지는 계속 유지된다는 것

내부 데이터가 변경되었을때 별도로 알리지 않음
➡️ current 속성을 변경한다고 해서 재랜더링이 일어나지 않음
