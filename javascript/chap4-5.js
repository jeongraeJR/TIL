/**
 * 4.5 프로토타입 체이닝
 * prototype 프로퍼티는 함수의 임장에서 자신과 랑크된 프로토타입 객체를 가리키고 있으며
 * 이에반해 __proto__  링크는 객체의 입장에서 자신의 부모객체인 프로토타입객체를 내부의 숨겨진 링크로 가리키고 있음.
 * 생성자 함수의 prototype 프로퍼티와 foo객체의 __proto__ 프로퍼티는 같은 프로토타입 객체를 가리키고 있다.
 */

 function Person(name) {
    this.name = name;
 }

 var foo = new Person('foo');

 console.dir(Person);
 console.dir(foo);

 /**
  * 객체 리터럴 방식으로 생성된 객체의 프로토타입 체이닝
  * 자기 자신의 프로퍼티뿐만이 아니라, 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티 또한 마치 자신의 것처럼 접근 가능. 
  */

var myObject = {
    name: 'foo',
    sayName: function(){
        console.log('My Name is '+this.name);
    }
}


myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickName')); //false
myObject.sayNickName();


/**
 * 프로토타입 체이닝?
 * 해당 객체에 접근하려는 프로퍼티또는 메소드가 없다면 __proto__링크를 따라 부모역할을 하는 프로토타입 객체의
 * 프로퍼티를 차례대로 검색하는것.
 */





 /***
  * 생성자 함수로 생성된 객체의 프로토타입 체이닝
  * 
  *  "자바스크립트에서 모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 취급한다."
  */ 

  function Person(name, age, hobby){
      this.name = name;
      this.age = age;
      this.hobby = hobby;
  }
  
  //foo 객체 생성
  var foo = new Person('foo', 30, 'tennis');

  //프로토타입 체이닝
  console.log(foo.hasOwnProperty('name'));
  console.log(Person.prototype);

/**
 * 프로토타입 체이닝의 종점
 * 결국 모든 객체는 Object.prototype에 체이닝되므로 객체가 가진 프로퍼티와 메서드에 접근 가능.
 */



/***
 * 표준 빌트인 프로토타입 객체에도 사용자가 직접 정의한 메서드들을 추가하는 것을 허용한다.
 * 
 */

String.prototype.setMethod = function () {
    console.log('This is the String.prototype.testMethod()');
}

var str = "this is test.";
str.setMethod();
console.log(dir);


/***
 * 프로토타입 객체 역시 자바스크립트 객체이므로 동적으로 프로퍼티를 추가/삭제하는 것이 가능하다.
 * 
 */

function Person(name) {
    this.name = name;
}

var foo = new Person('foo');

Person.prototype.sayHello() = function () {
    console.log('Hello');
}

foo.sayHello();

/***
 * 프로토타입 객체의 this 바인딩
 */

 function Person(name) {
     this.name = name;
 }

 Person.prototype.getName = function () {
     return this.name;
 }

 //foo에서 호출했기때문에 foo에 바인딩됨.
 var foo = new Person('foo');
 console.log(foo.getName());

 //getName()을 호출한 객체가 Person.prototype 이므로 여기에 바인딩됨.
 Person.prototype.name = "person";
 console.log(Person.prototype.getName());


 /***
  * 함수를 생성할때 디폴트 프로토타입 객체를 다른 일반 객체로 변경하는 것이 가능하다.
  * 
  */

  function Person(name){
      this.name = name;
  }

  console.log(Person.prototype.constructor);

  var foo = new Person('foo');
  console.log(foo.country); 

  Person.prototype = {
      country : 'korea',
  };
  console.log (Person.prototype.constructor);

  var bar = new Person('bar');
  console.log(foo.country);
  console.log(bar.country);
  console.log(foo.constructor);
  console.log(bar.constructor);


  /**
   * 객체의 프로퍼티 읽기나 메서드를 실행할때에만 프로토타입 체이닝이 동작한다.
   * 반대로 쓰기에는 동작하지 않음. 객체의 없는 프로퍼티에 값을 쓰려고할 경우 동적으로 객체에 프로퍼티를 추가하기때문.
   * 
   */

   
function Person(name){
    this.name = name;
}

Person.prototype.country = 'Korea';

var foo = new Person('foo');
var bar = new Person('bar')
console.log(foo.country);
console.log(bar.country);
foo.country = 'USA';

console.log(foo.country);
console.log(bar.country);