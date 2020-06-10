## virtualenv
- 프로젝트마다 환경을 분리하지 않고 라이브러리를 사용하면 충돌이 일어날 수 있는데, virtualenv는 각각 다른 환경을 만들어준다.
- 프로젝트마다 버전을 정하고 프로젝트에 필요한 패키지를 그 환경에만 독립적이게 사용할 수 있게 해줌.
### virtual env 활성화
```
source venv/bin/activate
```

## template
- 프리젠테이션과 비즈니스 로직을 구분하는데 도움이 된다.
- 응용 프로그램 패키지 안에 있는 템플릿 폴더에 저장된다.

## 필요 라이브러리 설정
- 개발환경 셋팅 후 requirements.txt 를 만듦
```
pip3 list > requirements.txt
```
또는
```
pip3 freeze > requirements.txt
```
- requirements.txt를 사용하여 필요한 패키지 한꺼번에 다운로드
```
pip3 install -r requirements.txt
```
