## HSET
Key 값을 기준으로 다중 field/value를 갖는 Hash Store이다. 키가 없으면 해시를 포함하는 새키가 생성되고, 이미 있는 경우 덮어쓰기가 된다.

### example
```
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HGET myhash field1
"Hello"
```
