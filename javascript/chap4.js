var example = function (a,b,c) {
    return a+b+c;
}

example (1,2,3);
example.call(null,1,2,3);
example.apply(null,[1,2,3]);

//null 인자의 역할은 바로 this를 대체하는 것.

function example() {
    console.log(arguments.join());
}
example (1,'string',true)
//

function example() {
    console.log(Array.prototype.join.call(arguments));
}
example (1,'string',true)

/***
 * bind 함수 예제
 * 
 */
var obj = {
    string: 'zero',
    yell: function() {
        alert(this.string);
    }
};

var obj2 = {
    string: 'what?'
}

var yell2 = obj.yell.bind(obj2);

console.log(yell2())

//////
/***
 * constructor는 생성자 함수 그 자체를 가리킴
 * prototype은 생성자 함수에 정의한 모든 객체가 공유할 원형
 * __proto__ 는 생성자함수를 new로 호출할때 정의해두었던 prototype을 참조한 객체
 * prototype은 생성자 함수에 사용자가 직접 넣는ㄴ거고, __proto__는 new호출할때 프로토타입참조하여 만들어짐
 * 생성자에는 prototype, 생성자로부터 만들어진 객체에는 __proto__
 * 따라서 사용자는 prototype만 신경쓰면됨.
 */

 function Person(name, gender){
     this.name = name;
     this.gender = gender;
 }

 Person.prototype.sayhello = function () {
     console.log(this.name + ' said "hello"');
 }


 /**
  * 함수 호이스팅
  * 함수 선언문 형태로 정의한 함수의 유효범위는 코드의 맨처음부터 시작한다.
  * 
  * 함수 호이스팅이 발생하는 이유는 자바스크립트의 변수생성과 초기화의 작업이 분리돼서 진행되기 때문.
  * 
  */
 add(2,3);
 function add(x,y) {
     return x + y;
 }

 add(3,4);

 /**********
  * 자바스크립트에서 함수는 값으로 취급된다.
  * 1. 리터럴에 의해 생성
  * 2. 변수나 배열의 요소, 객체의 프로퍼티등에 할당가능
  * 3. 함수의 인자로 전달 가능
  * 4. 함수의 리턴값으로 리턴 가능
  * 5. 동적으로 프로퍼티를 생성 및 할당 가능
  */


  function myFunction() {
      return true;
  }

  //constructor와 __proto__ 프로퍼티가 있음.
  console.dir(myFunction.prototype);

  //myFunction 함수를 가리킴
  console.dir(myFunction.prototype.constructor);



  /**
   * arguments 는 유사배열객체이다.
   * 따라서 length는 동작하지만 배열 메서드를 사용하는 경우 에러가 발생할 수 있다.
   * 
   */

   function sum(){
       var result = 0;
       for(var i=0; i < arguments.length; i++) {
           result += arguments[i] ;
       }

       return result;
   }

   console.log(sum(1,2,3)); //6
   console.log(sum(1,2,3,4,5,6,7,8,9)) //45

   /**
    * 함수를 호출할때의 this 바인딩. 
    * 함수를 호출하면 해당함수 내부 코드에서 사용된 this는 전역객체에 바인딩된다.
    */

var foo = "I'm foo";
console.log(window.foo); //(출력값 I'm foo)

////
var test = 'This is test';
console.log(window.test)

var sayFoo = function () {
    console.log(this.test); //sayFoo () 함수호출시 this가 전역객체에 바인딩됨.
}

/**
 * 함수 호출에서의 this 바인딩 특성은 내부함수를 호출했을 경우 그대로 적용.
 * 내부함수 호출패턴을 정의하지않았기 때문에 결과가 다르게 출력됨.
 */

 var value = 100;

 var myObject = {
    value: 1,
    func1: function () {   
        this.value +=1 ;
        console.log('func1() : '+this.value);
        func2 = function () {
            this.value +=1 ;
            console.log('func2() : '+this.value);
            func3 = function () {
                this.value +=1 ;
                console.log('func3() : '+this.value);
            }
            func3(); //101
        }
        func2(); //102
    }
}

myObject.func1();

/***
 * 개선된 소스코드
 */

var value = 100;

var myObject = {
    value: 1,
    func1: function () {
        var that = this;
        this.value += 1;
        console.log('func1() : ' + this.value);
        func2 = function () {
            that.value += 1;
            console.log('func2() : ' + that.value);
            func3 = function () {
                that.value += 1;
                console.log('func3() : ' + that.value);
            }
            func3(); //101
        }
        func2(); //102
    }
}

myObject.func1();