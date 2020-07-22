# Evnet Emitter

## Event
Node.js의 코어 API 대부분은비동기 이벤트 기반 아키텍처를 사용해서 만들어진다. 이벤트를 내보내는 모든 객체는 EventEmitter 클래스의 인스턴스이다. 
EventEmitter 객체가 이벤트를 내보내면 이벤트에 붙여지는 모든 함수들은 동기적으로 호출된다. 호출된 리스너에 의해 반환된 값은 무시되고 폐기된다.
eventEmitter.on() 함수는 리스너를 등록하는데에 사용되고 eventEmitter.emit() 함수는 이벤트를 트리거하는데에 사용된다.
```
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
```

# 참고
https://nodejs.org/api/events.html
