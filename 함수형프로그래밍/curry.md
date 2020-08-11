## currying
- 원하는 시점까지 미뤘다가 최종적으로 평가하는 기법.
- 필요한 인자를 채울떄까지 함수의 본체를 실행하는 기법.

```
function _curry(fn){
    return function(a){
        return function(b){
            return fn(a,b);
        }
    }
}

```

```
var add = _curry(function(a,b){
    return a+b;
})

var add10 = add(10);
console.log(add10(5));

console.log(add(5)(3));
```

### 좀 더 실용적으로 변경
```
function _curry(fn){
    return function(a, b){
        return arguments.length == 2 ?
            fn(a,b) : function(b){return fn(a,b);}
    }
}

console.log(add(1,2))
```

## curryr
```
var sub = _curry(function(a,b){
    return a - b;
})

console.log(sub(10, 5));
var sub10 = sub(10);
console.log(sub10(5));`
```
- 표현력이 잘 맞지 않음
- 마치 5에 10을 빼는것처럼 표현됨.

### curryr 로 구현하자.
```
function _curryr(fn){
    return function(a,b){
        return arguments.length == 2 ?
            fn(a,b) : function(b){return fn(b,a);}
    }
}
var sub = _curryr(function(a,b){
    return a - b;
})

console.log(sub(10, 5));
var sub10 = sub(10);
console.log(sub10(5));

```

## _get
- 값을 에러없이 좀 더 안전하게 가져올 수 있다.
```
function _get(obj, key){
    return obj == null? undefined : obj[key];
}
```

### 실행
```
var user1 = users[0];
console.log(user1.name);
// 없는 경우에 에러가 나지 않음.
console.log(_get(user1, 'name'));
```

### currying 적용
```
var _get = _curryr(function (obj, key){
    return obj == null? undefined : obj[key];
});


console.log(_get('name')(user1))

```

### 응용 
```
_map(
    _filter(users, function(user){return user.age >= 30;}),
    _get('age')
)

```
