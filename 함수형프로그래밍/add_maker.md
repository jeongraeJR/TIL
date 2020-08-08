### add_maker
```
function add_maker(a){
    return function(b){
        return a+b;
    }
}
```
- 내부의 function은 a를 참조하는 클로저가 되기도한다.
- 일급함수와 클로저의 개념이 사용된 함수.
- a를 참조할뿐 변경하지는 않기 떄문에 순수함수라고 할 수 있다.
```
var add10 = add_maker(10);
console.log(add10(20))
```
### 다른 예제
```
function f4(f1,f2,f3){
    return f3(f1()+f2())
}
```

```
f4(
    function(){return 2;},
    function(){return 1;},
    function(a){return a * a}
);
>> 9
```
- 함수형 프로그래밍이란 순수함수들을 이용하여 로직을 만들어 나가는 것..
- 순수함수로 평가시점을 만들어내면 좀 더 유리하다.
