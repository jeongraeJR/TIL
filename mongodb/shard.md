## 샤드 클러스터
### 샤드
샤드는 샤드 클러스터에 대한 샤드 데이터의 하위 집합을 포함한다. 클러스터의 조각들이 함께 클러스터의 전체 데이터 세트를 보관한다. 
MongoDB 3.6을 기준으로, 중복성과 고가용성을 제공하기 위해 샤드를 복제 세트로 배치해야 한다.
### 구성서버 
구성 서버는 sharded 클러스터의 메타 데이터를 저장한다.