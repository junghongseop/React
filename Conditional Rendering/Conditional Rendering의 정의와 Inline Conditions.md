# Conditional Rendering의 정의와 Inline Conditions
조건부 렌더링은 어떠한 조건에 따라서 렌더링이 달라지는 것을 의미

truthy 값 = ture, mtobj, 0이 아닌 숫자, mtstring이 아닌 문자열<br>
false 값 = false, 0, -0, bigin(), mtstring, null, undefined, not a number

element variable은 렌더링해야 할 때 컴포넌트를 변수처럼 다루고 싶을 때 사용

## Inline if
if문과 동일한 효과를 내기 위해서 &&을 사용

end연산자 처럼 두 조건이 모두 true일 때 오른쪽 엘리먼트가 결과값이 되고 false라면 왼쪽 엘리먼트가 결과값

end-end연산자를 jsx 코드 안에 중괄호를 사용해서 직접 넣는 방법

## Inline else if
inline-if-else는 if-else문을 필요한 곳에 직접 넣어서 사용하는 방법

조건문 값에 따라서 다른 엘리먼트를 보여줄 때 사용


> 컴포넌트를 렌더링하고 싶지 않을 때는 null을 리턴

class 컴포넌트의 렌더 함수에서 null을 리턴하는 것은 컴포넌트의 생명주기에 영향을 주지 않음
