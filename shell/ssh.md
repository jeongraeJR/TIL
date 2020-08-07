### SSH 파일 내려받기
```
scp -r -i file.pem user@host:<원격지파일경로> <로컬파일경로>
```

### SSH 터널링
```
ssh -i "file.pem" user@host -L <로컬 포트>:<터널링 대상 호스트>:<터널링 대상포트>
```
