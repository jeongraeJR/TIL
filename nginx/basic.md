# Master and Worker Processes
- NGINX는 한 개의 마스터 프로세스와 하나 이상의 worker process를 갖는다.
- 만약 캐시 설정을 한다면 cache loader 와 cache manager 프로세스도 시작과 동시에 실행된다.
- Master Process 의 주요 목적은 설정 파일을 읽고 검사하는 것이다. (워커 프로세스 유지등.)
- Worker PRocess 는 request를 실제로 처리한다.
- NGINX는 OS-의존성 메커니즘에 의존하여 worker process 간의 요청을 효율적으로 분배한다.
- worker process의 갯수는 nginx.conf 설정 파일에 있는 worker-process 항목에 따라 정의된다. 또한 고정 숫자로 설정하거나 사용가능한 cpu 코어 수에 따라 자동으로 조정하도록 구성할 수 있다.

# Controlling NGINX
- 설정을 리로드하기위해 NGINX를 정지하거나 리스타트하는 방법이 있다. 또는 마스터 프로세스에 시그널을 보낸다.
```
nginx -s <SIGNAL>
```

### SIGNAL
- quit : 정상 종료
- reload : 설정파일 리로드
- reopen : 로그파일 리오픈
- stop : 즉시 종료.

# Creating NGINX PLUS AND NGINX Configuration Files
- NGINX 는ㄴ 특정 포맷의 설정 파일을 사용한다는 점에서 다른 서비스와 유사하다.
- 기본 파일 : nginx.conf
- 설정 파일은 지시자와 매개 변수로 이루어져 있다.

### Contexts
```
events : General Connector Processing
http : http traffic
mail : mail traffic
stream : TCP and UDP traffic
```

# Virtual Servers
- 각 트래픽 처리 컨텍스트에서 하나 이상의 서버 블록을 사용하요 요청처리를 제어하는 가상 서버 정의 ( 트래픽 유형에 따라 다름)
- http context : 특정 도메인 또는 IP 주소의 리소스 요청 처리를 제어.
- mail 또는 TCP/UDP traffic : 각각 특정 TCP 포트 또는 UNIX 소켓에 도착하는 트래픽의 처리를 제어.

# nginx inheritance
- 하위 컨텍스트는 일반적으로 상위 레벨에 포함된 지침의 설정을 상속한다.
  또한 부모로부터 상속된 설정을 재정의할 수 있다.
  
# Http Loadbalancing
- nginx를 매우 효율적인 HTTP 로드밸런서로 사용하여 트래픽을 여러 APP 서버에 분산시키고 nginx로 웹 어플리케이션 성능, 확장성, 신뢰성을 향상시키는 것이 가능하다.

# Load balancing Mechanism
```
Round-Robin : 라운드 로빈 방식으로 배포
최소연결 (least-connected): 다음 요청이 활성 연결 수가 가장 적은 서버에 할당됨.
IP-HASH : 해시 함수를 사용하여 다음 요청에 대해 선택한 서버를 결정한다 ( 클라이언트 ip 주소 기준)
```
# Health Check
- nginx 의 역방향 프록시 구현에는 인밴드(or passive) 서버 상태 점검이 포함된다.
- 특정 서버의 응답이 오류와 함께 실패할 경우, nginx는 인바운드 요청에 대해 이 서버를 선택하지 않도록 노력한다.

# Debugging Log
  디버깅 로그를 활성화하려면 빌드 중 디버깅을 지원하도록 nginx 를 구성해야한다.
```
./configure --with-debug
```
그런 다음,error_log 지시와 함께 디버그 수준을 설정해야한다.
```
err_log /path/to/log debug
```
nginx가 디버깅을 지원하도록 구성되었는지 확인하려면 nginx-v 명령 실행
```
configure arguments : --with-debug
```
디버그 레벨 설정, 디버그 레벨을 지정하지 않고 재정의하면 디버깅 로그가 비활성화됨.
 - 주기적 메모리 버퍼에 로깅하기
```
error_log memory:32m debug
```
=> 디버그 레벨의 메모리 버퍼에 로깅하는것은 부하가 높은 경우에도 성능에 큰 영향을 미치지 않는다.

# SYSLOG
- error_log 및 access-log는 syslog에 대한 로깅을 지원하도록 지시한다.
- 다음의 변수는 syslog에 로깅을 구성한다.


```
server=address
```
syslog 서버의 주소를 정의한다. 도메인 또는 ip주소, 선택적 포트 등을 지정가능.
```
facility=string
```
RFC3164에 정의된대로 syslog 메시지의 기능을 설정한다.
```
severity=string
```
RFC3164에 정의된 access_log 메세지의 심각도를 설정한다 (레벨 설정). 가능한 값은 error log 지시의 두번쨰 파라미터와 동일하다. 
 오류 메세지의 심각도는 nginx가 결정하므로 error_log 지시자의 매개변수는 무시된다.
```
tag = string
```
syslog의 태그를 설정한다. (기본값:nginx)
```
nohostname
```

## 참고
https://docs.nginx.com/
