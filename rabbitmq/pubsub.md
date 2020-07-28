## Exchanges
Rabbit MQ 메시징 모델의 핵심 아이디어는 Producer가 큐에 직접적으로 메세지를 전달하지 않는다는 것이다. 대신 Producer는 교환서에만 메시지를 보낼 수 있고, 교환소는 그 메세지를 Queue에 push 한다.
교환소가 메세지를 받은 이후 무슨 행동을 해야할지는 교환 유형에 따라 달라진다. 교환 유형은 다음과 같다.
```
direct, topic, headers, fanout
```

- 바인딩 : 교환소와 Queue 사이의 관계
