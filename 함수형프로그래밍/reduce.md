## reduce

### reduce 함수의 동작
```
memo = add(0,1);
memo = add(memo, 2);
memo = add(memo, 3);
return memo;

add(add(add(0,1),2),3);

```

### 구현
```
function add(a,b){
    return a+b;
}

function _each(list, iter){
    for(var i=0; i<list.length; i++){
        iter(list[i]);
    }
    return list;
}

function _reduce(list, iter, memo){
    _each(list, function(val){
        memo = iter(memo, val);
    })
    return memo;
}


console.log(_reduce([1,2,3], add,0));
>>>6
```
