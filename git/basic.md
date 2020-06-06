## 기본 명령어
  저장소 만들기
```
git init
```
  원격 저장소 추가
```
git remote add origin <GIT 주소>
```
  원격 저장소 목록 보기
```
git remote -v
```

## COMMIT 되돌리기
  커밋 이력 보기
```
git reflog
```
  특정 헤드로 이동하기 
```
git reset --hard HEAD@{HeadNumber}
ex) git reset --hard HEAD@{0}
```

## Branch 생성
  브랜치 생성
```
git branch <브랜치이름>
```
  원격 브랜치 생성
```
git push origin <브랜치이름>
```
  브랜치 이동
```
git checkout <브랜치이름>
```
  브랜치 원격 연동
```
git branch --set-upstream-to origin/<브랜치이름>
```
  
