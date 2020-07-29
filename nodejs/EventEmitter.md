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

## Passing arguments and this to listeners
eventEmitter.emit() 메소드는 리스너 함수에 전달될 임의의 arguments 집합을 허용한다. 리스너 함수가 호출될때 this키워드는 의도적으로 리스너 함수가 연결된 Event emitter 의 인스턴스를 참조하도록 설정된다.

```
const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
  console.log(a, b, this, this === myEmitter);
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true
});
myEmitter.emit('event', 'a', 'b');
```
ES6의 화살표 함수를 리스너로 사용할 수 있다. 하지만 사용하게되면 this 키워드는 더이상 Evnet Emitter 인스턴스를 참조하지 않는다.
```
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit('event', 'a', 'b');
```
## Handling events only once
eventEmitter.on() 함수를 사용하여 등록된 리스너는 해당 이름의 이벤트가 발생할때마다 호출된다. 그런데 eventEmitter.once() 함수를 사용하면 특정 이벤트에 대해서 한 번만 호출되는 리스너를 등록할 수 있다. 한 번 이벤트가 발생하면 리스너는 등록해제된다음 호출된다.
```
const myEmitter = new MyEmitter();
let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Ignored
```

# 참고
https://nodejs.org/api/events.html
