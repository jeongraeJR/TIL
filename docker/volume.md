# docker Volume Mount Types

### volume mount
- Docker가 생성하고 관리하는 방식으로 도커가 관리하는 Host File System의 일부에 데이터가 저장된다.
- Non-docker 프로세스들이 파일 시스템의 해당부분을 수정하면 안된다.
- Docker 에서 데이터를 존속시킬 수 있는 최선의 방법
- 동시에 볼륨을 여러 컨테이너에 마운트할 수 있다.
- 좀 더 많은 docker 컨테이너 명령어 사용 가능

### bind mount
- 데이터를 호스트 시스템의 원하는 곳에 저장가능
- 도커 호스트 또는 컨테이너의 Non-Docker 프로세스들이 언제든지 저장된 데이터를 수정가능하다.
- Volume에 비해 기능이 제한적이다.
- 호스트 머신의 파일 시스템 디렉토리 구조에 의존적이다.
- 따라서 충돌이 발생하거나, 보안에 큰 영향을 줄 수 있으므로 Volume 타입을 권장

### tmfs mount
- Docker Host 또는 컨테이너내의 디스크에서 데이터가 유지되지 않음.
- 컨테이너의 생명주기와 맞춰서 데이터를 보존하고자할때 사용한다.

### Docker-Compose 사용예시
```
  mongodb:
    container_name: mongo
    image: mongo
    ports:
      - "27017:27017"
    volumes:
      - ./data/db:/data/db 
    networks:
```


# 참고 
https://medium.com/dtevangelist/docker-%EA%B8%B0%EB%B3%B8-5-8-volume%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-data-%EA%B4%80%EB%A6%AC-9a9ac1db978c
