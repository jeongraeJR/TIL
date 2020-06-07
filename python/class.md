## 정적 메소드
self 프로퍼티를 가질 수 없으며 인스턴스 변수에 접근할 수 없다. 따라서 인스턴스 속성, 인스턴스 메소드가 필요없을 때 사용한다.

## 클래스 메소드
객체 인스턴스를 의미하는 self 대신 cls 라는 클래스를 의미하는 파라미터를 전달받음. cls 파라미터를 통해 클래스 변수등을 엑세스할 수 있다.


```
class Rectangle:
    count = 0

    def __init__(self, width, height):
        self.width = width
        self.height = height
        Rectangle.count += 1

    def calcArea(self):
        area = self.width * self.height
        return area
    
    @staticmethod
    def isSquare(rectWidth, rectHeight):
        return rectWidth == rectHeight

    @classmethod
    def printCount(cls):
        print(cls.count)


square = Rectangle.isSquare(5, 5)
print(square)
rect1 = Rectangle(5, 5)
rect2 = Rectangle(2, 5)
rect1.printCount()
rect2.printCount()
```
