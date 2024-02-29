# 다양항 Forms
### Textarea 태그
여러 줄에 걸쳐 긴 텍스트를 입력받기 위한 HTML 태그

### Select 태그
드롭다운 목록을 보여주기 위한 html 태그

모두 value라는 attribute를 통해서 값을 전달하고 값을 변경할 때는 onChange에서 setValue 함수를 사용하여 값을 업데이트함

### File input 태그
디바이스의 저장장치로부터 사용자가 하나 또는 여러 개의 파일을 선택할 수 있게 해주는 HTML 태그

FileInput 태그는 그 값이 읽기 전용이기 때문에 React에서는 uncontrolled 컴포넌트가 됨

### Mutliple input
여러 개의 state를 선언하여 각각의 입력에 대해 사용하면 여러 개의 입력을 다룰수 있음

### Input Null Value
제어 컴포넌트에 value prop은 넣고 자유롭게 입력할 수 있게 만들고 싶다면 값에 undefined 또는 null을 넣어주면 됨