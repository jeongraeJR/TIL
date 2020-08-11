## 기존의 코드 작성 방식
```
var temp_users = [];
for(var i=0; i<users.length; i++){
    if(users[i].age >= 30){
        temp_users.push(users[i]);
    }
}

var names=[];
for(var i=0; i<temp_users.length; i++){
    names.push(temp_users[i].name);
}


for(var i=0; i<users.length; i++){
    if(users[i].age < 30){
        temp_users.push(users[i]);
    }
}

var ages = [];
for(var i=0; i<temp_users.length; i++){
    age.push(temp_users[i].age);
}

```

## 함수형 프로그래밍 방식으로 변경
- 함수형 프로그래밍은 코드의 중복을 줄인다.
- 응용형 함수
- 고차함수 : 함수를 인자로 받거나 함수를 리턴
- 재활용성이 증가한다.
### filter
```
function _filter(list,predi){
    var new_list = [];
    for(var i=0; i<list.length; i++){
        if(predi(list[i])){
            new_list.push(list[i]);
        }
    }
    return new_list;
}
```

```
_filter(users, function(user){return user.age>30;})
```
### map
```
function _map(list, mapper){
    var new_list=[];
    for(var i=0; i<list.length; i++){
        new_list.push(mapper(list[i]));
    }
    return new_list;
}
```

```
//호출
_map(list, function(user){
    return user.name;
})
```

### 응용
```
_map(
    _filter(users, function(user){return user.age >= 30;}),
    function(user){return user.name;}
)
```

## filter와 map의 중복을 제거
### each
```
function _each(list, iter){
    for(var i=0; i<list.length; i++){
        iter(list[i]);
    }
    return list
}

```

### 응용
```

function _filter(list,predi){
    var new_list = [];
    _each(list, function(val){
        if(predi(val)) new_list.push(val);
    })
    return new_list;
}

function _map(list, mapper){
    var new_list=[];
    _each(list, function(val){
        new_list.push(mapper(val));
    })
    return new_list;
}
```

## 메소드와 순수 함수의 차이
- jquery 객체 또는 querySelectorAll 로 받아온 객체는 Array가 아니라 array like 객체이다.
- Array가 아니기 때문에 사용할 수 없다.
```
console.log(
    document.querySelectorAll('*').map(function(node){
        return node.nodeName;
    })
)

>> Uncaught TypeError: document.querySelectorAll(...).map is not a function

```

### 순수 함수
- 배열이 아닌 값이어도 출력
- 순수 함수로 만드는 기법이 메소드보다 다형성면에서 좀 더 좋은 점이 있다.
```
console.log(
    _map(document.querySelectorAll('*'),function(node){
        return node.nodeName;
    })
);
```
