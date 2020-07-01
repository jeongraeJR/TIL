# Restrict Bucket Access
S3 버킷에 Cloud Front 를 통해서만 접근할 수 있도록 설정하는 옵션으로 외부 사용자가 s3 버킷에 직접 접근하는 것을 제한한다.

## OAI
- S3에 접근할때 사용할 식별자. 이 식별자를 통해 S3의 접근을 허용할지 결정한다.

### 적용하는법
1. S3의 Public Access 를 모두 차단한다.
2. Cloud Front 콘솔로 이동한다.
3. 생성 또는 편집옵션의 [Restrict Bucket Access]에서 [Yes]를 선택한다.
4. [Origin Access Identity] 에서 oai가 없을경우 [Create a New Identity] 를 선택한다.
5. [Grant Read Permissions on Bucket]에서 [Yes, Update Bucket Policy]를 선택
6. S3의 버킷정책에 다음과 같은 문이 표시되는지 확인
```
{
	"Sid": "1",
	"Effect": "Allow",
	"Principal": {
		"AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity EAF5XXXXXXXXX"
		},
	"Action": "s3:GetObject",
	"Resource": "arn:aws:s3:::AWSDOC-EXAMPLE-BUCKET/*"
}
```
7. 생성된 OAI 는 Cloud Front 콘솔의 Origin Access Identity 메뉴에서 확인가능하다.
### 참고
https://aws.amazon.com/ko/premiumsupport/knowledge-center/cloudfront-access-to-amazon-s3/
