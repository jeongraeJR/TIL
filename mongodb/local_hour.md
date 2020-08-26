### Local Hour 로 바꾸기
mongodb 의 시간대는 디폴트로 UTC 로 저장된다.

그런데 개발을 하다보면 현지 시간으로 바꿔서 검색할 일이 생긴다.
나 같은 경우엔 시간대별 데이터를 추출해야 했는데 , 따라서 다음과 같은 쿼리문을 작성하였다.

utc 를 우리나라 표준시 kst 로 변환하여 시간만 추출해서 보여준다.

```
db.getCollection('컬렉션이름').aggregate(
  [
      {
          $project: { local_hour : {$hour:{"$subtract":["$shooting_date",-32400000]}}}
      }
  ]
)
```

그냥 로컬 날짜값만 참조하고 싶으면 다음과 같이 사용하면 된다.

```
db.getCollection('컬렉션이름').aggregate(
  [
      {
          $project: { local_date : {"$subtract":["$shooting_date",-32400000]}}
      }
  ]
)
```
