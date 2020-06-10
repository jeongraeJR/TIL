## 1대N 관계에서의 모델링
- embeding : 카디널리티가 ont-to-few 이고 외부 컨텍스트에서 embeded object에 대해 접근할 필요가 없을시 N side 객체를 embed 시킴
- child-referencing : 카디널리티가 one-to-many 또는 N-side Object가 독립형이어야 하는경우 N Side에 대한 참조배열을 사용한다.
- parent-referencing : 카디널리티가 one-to-squillions 인 경우 One side에 대한 참조를 사용한다

## CURSOR
- 쿼리 결과에 대한 포인터. find() 명령어는 도큐먼트를 직접 반환하지 않고 커서를 반환한다.
- 다음 한 개의 도큐먼트를 가져오기 위해서 next() 호출

### 커서를 이용한 도큐먼트 반환
```
db.myCollection.find().toArray()
```
