# NGINX BASIC Rate Limiting

```
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;
 
server {
    location /login/ {
        limit_req zone=mylimit;
        
        proxy_pass http://my_upstream;
    }
}
```

### key
한도가 적용되는 요청 특성을 규정한다.   
즉, 클라이언트 IP 주소에 대한 이진 표현을 가지고 있는 NGINX 변수 $binary_remote_addr 변수 사용.

### zone
```
zone = 키워드 : 크기
```
각 IP 주소의 상태와 요청 제한 URL에 엑세스한 빈도 저장.  
1Mbyte = 약 16,000 개의 IP주소를 저장가능하다.
### rate 
최대 요청속도를 설정한다.
```
rate = 10 r/s
```
ex )초당 10개의 요청을 초과할 수 없음. (100 밀리초마다 1개의 요청에 해당함)
* burst를 허용하지않기 때문에 이전에 허용된 burst 이후에 100밀리초 이후에 도착하면 요청이 거부된다.

## Handling burst
```
location /login/ {
    limit_req zone=mylimit burst=20;
 
    proxy_pass http://my_upstream;
}
```
- 서비스를 운영하다보면 burst를 허용해야하는 경우가 있다.
- burst 매개 변수는 클라이언트가 zone 에서 지정한 속도를 초과하여 수행할 수 있는 요청 수를 의미한다.
- 이전 요청을 대기열에 넣은 후 100 밀리초 이내에 도착하는 요청. 즉, 대기열 크기를 의미한다.
- 대기중인 요청수가 대기열의 크기를 초과하는 경우 503 코드를 반환한다.

## Queueing with No Delay
```
location /login/ {
    limit_req zone=mylimit burst=20 nodelay;
 
    proxy_pass http://my_upstream;
}
```
- burst가 있는 구성은 사이트를 느리게 보이게 할 수 있다.
- ex) 20번째 패킷은 2초동안 전달될때까지 기다림.
  => burst 파라미터와 함께 Nodelay 파라미터를 추가한다.
  
 ## 참고
 https://www.nginx.com/blog/rate-limiting-nginx/
