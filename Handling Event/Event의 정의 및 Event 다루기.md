# Event의 정의 및 Event 다루기
#### DOM의 Event
```JavaScript
<button onclick="activate()">
    Activate
</button>
```

#### React의 Event
```JavaScript
<button onClick={activate}>
    Activate
</button>
```

DOM에서는 이벤트를 처리할 함수를 문자열로 전달하지만 리엑트에서는 함수 그대로를 전달

Event Handler = 어떤 사건이 발생하면 사건을 처리하는 역할
