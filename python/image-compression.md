## 파이썬, pillow를 이용한 이미지 압축
png 파일 같은 경우에는... 50% 이하로 줄어들지 않는거 같다.

```
import urllib.request
from PIL import Image

def main():
    url = 's3URL'
    image = Image.open(urllib.request.urlopen(url))
    print(type(image))
    image.save('test1.jpg', 'JPEG', optimize=True, quality=95)
    #image.save('test2.png', 'PNG', compress_level=9)
    width, height = image.size
    print (width,height)


if __name__ == "__main__":
    # execute only if run as a script
    main()
```
