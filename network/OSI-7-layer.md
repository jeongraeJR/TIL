## 물리계층 
전기적, 물리적 신호를 다룬다. 얼만큼의 전압으르 가져야 하며, 전선은 어때야하는지 등의 규격을 정의한다. 랜선 및 허브

## 데이터 링크 계층
노드간의 데이터 전송을 책임지며 물리계층의 오류를 수정한다. CRC 기반의 오류제어와 흐름제어를 위한 규격을 제공한다. MAC주소와 관련됨

## 네트워크계층
라우터 기능. 패킷을 목적지까지 전달하며 IP주소가 부여된다.

## 전송계층
신뢰성있는 데이터 전송을 보장하기위한 규격을 제공한다. 패킷전송의 오류 및 흐름제어를 담당하며 대표적인 프로토콜은 TCP이다.

## 세션 계층
소프트웨어(프로세스) 간의 통신을 위해서는 세션이 필요하다. 세션 계층은 이들끼리의 통신을 관리하기위한 규격을 제공한다.
포트(Port) 연결이라고 볼 수 있다.

## 표현계층
데이터를 다루기 좋은 형태로 가공(인코딩/디코딩)한다. 암호화가 표현계층에 해당된다.

## 응용 계층
응용 프로그램들간에 전달되는 데이터를 해석하교 표시하기위한 규격을 제공한다. HTTP, FTP가 대표적이다.