## 원인
find_one 함수로 가져온 데이터를 json형식으로 응답하려고 하면 ObjectId('') is not JSON serializable 오류가 발생하였다.  
그 이유는 mongodb의 ObjectID 타입변수와 date타입변수가 끼어들면서 이것을 json으로 변환하는도중 에러가 발생한 것이었다.  
mongodb는 데이터를 내부적으로 bson 형태로 저장하는데 이것의 차이점을 잘 몰랐던게 원인인 것 같다.
다행히 Pymongo 모듈이 json_util 을 제공하기때문에 bson객체를 다룰 수 있다고 한다.  


### 모듈 가져오기
```
pip install python-bsonjs
```
```
import json
from bson.json_util import dumps
```

### 응답하기
bson 객체를 jsonString으로 변환한후 다시 json객체로 변환
```
docs = db.collection.find_one(condition)
response = make_response({'items': json.loads(dumps(docs))})
response.status_code = 200
return response
```

## 참고
https://stackoverflow.com/questions/16586180/typeerror-objectid-is-not-json-serializable
