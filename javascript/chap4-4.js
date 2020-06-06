/**
 * new 연산자로 함수를 생성자로 호출하면, 다음과 같은 순서로 동작한다.
 * 1. 빈 객체 생성 및 this 바인딩 . 생성자 함수가 생성한 객체는 생성자 함수의
 * prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정한다.
 * 2. this 를 통한 프로퍼티 생성
 * 3. 생성된 객체 리턴 
 * 특별하게 리턴하는 객체가 없어도 this로 바인딩된 새로생성한 객체가 리턴됨.
 * 
 * 
 */

 var Person = function (name) {
     //함수코드 실행전
     this.name = name;
     //함수 리턴
 }


 var foo = new Person('foo');
 console.log(foo.name);
 console.log(foo.__proto__);
/**
 * {construtor : f}
 * __proto__ : Object
 */


/**
 *  Person 함수가 생성자로 호출되면, 함수코드가 실행되기전에 빈객체가 생성됨.
 *  여기서 생성된 빈 객체는 Person () 생성자 함수의 prototype 프로퍼티가 가리키는 객체 (Person.prototype 객체)를
 * __proto__ 링크로 연결해서 자신의 프로토타입으로 설정.
 */


 /**
  * 객체 리터럴 방식과 생성자 함수를 통한 객체 생성 방식의 차이?
  * 1. 객체 리터럴 방식으로 생성된 객체는 같은 형태의 객체를 재생성할 수 없음.
  * 2. 생성자 함수를 호출할때에는 다른 인자를 넘김으로서 같은 형태의 서로 다른 객체를 생성할 수 있는것.
  */

  //주의 !!!!! new를 사용하지 않고 생성하면 전역객체에 this 바인딩 되므로 new 생성자를 사용해줄것.



/**
 * apply () 메서드를 이용한 명시적인 this 바인딩
 * 
 */

function Person (name, age, gender)
{
    this.name = name;
    this.age = age;
    this.gender = gender;
}

//foo 빈 객체 생성 (리터럴 방식)
var foo = {};

//함수를 호출하면서 this를 foo객체에 명시적으로 바인딩.
Person.apply (foo, ['foo',30,'man']);
console.dir(foo);




/**
 * Array.prototype => 배열 객체의 부모역할을 하는 자바스크립트 기본 프로토타입 객체.
 * Array.prototype.slice 를 자신의 메서드처럼 호출.
 * This 를 arguments 객체로 바인딩
 * 
 */
function myFunction (){
    console.dir(arguments);

    //arguments.shift(); 에러발생

    var args = Array.prototype.slice.apply(arguments);
    console.dir(args);

}

myFunction(1,2,3)


/**
 * 함수 리턴.
 * 규칙 1) 일반 함수나 메서드는 리턴값을 지정하지 않을 경우 undefined 값이 리턴된다.
 */

var noReturnFunc = function () {
    console.log('This function ahs no return statement');
}

var result = noReturnFunc();
console.log(result);

/**
 * 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴된다.
 * 만약 ))) this로 바인딩 되는 생성된 객체가 아닌 다른 객체를 리턴한다면 어떻게 될까?
 * ==> 명시적으로 넘긴 객체나 배열이 리턴된다.
 */

 function Person(name, age, gender){
     this.name = name ;
     this.age = age;
     this.gender = gender;

     return {name:'bar', age:20, gender:'woman'}
 }

 var foo = new Person('foo', 30, 'man');
 console.dir(foo);


 /**
  * 생성자 함수의 리턴값으로 넘긴 값이 객체가 아닌 boolean, 숫자, 문자열의 경우 this로 바인딩된 객체가 리턴된다.
  * 
  */

 function Person(name, age, gender){
    this.name = name ;
    this.age = age;
    this.gender = gender;

    return 100;
}

var foo = new Person('foo', 30, 'man');
console.dir(foo);
