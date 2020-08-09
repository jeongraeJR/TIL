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
