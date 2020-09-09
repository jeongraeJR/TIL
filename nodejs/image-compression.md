### imagemin 라이브러리를 사용한 이미지파일크기 압축

특정 이미지 url로부터 이미지 크기 압축을 하고자할 경우,
요청한 buffer를 받아온 후 파일압축을 시도한다.

- (앞으로 공부해야할 것들)
buffer, binary, stream 을 좀 더 공부해볼 필요가 있다.

```
                            

var s3Url = 'Your imgae url';                 
var request = require('request').defaults({ encoding: null });
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const fs = require("fs");


request.get(s3Url, function (err, res, buffer) {
  (async () => {
    const files = await imagemin.buffer(buffer, {
        destination: 'build/images',
        plugins: [
            imageminMozjpeg({quality:40}),
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.5, 0.5]
            })
        ]
    });
  
    console.log(files);
    fs.writeFile("test.png",files, function(){
      if(err){
        console.log(err);
      }else{
        console.log("완료");
      }
    })
  })(); 
  
});
```
