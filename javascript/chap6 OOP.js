/**
 * 객체 지향 프로그래밍
 * 
 * 
 */

 function Person(arg) {
     this.name = arg;

     this.getName = function () {
         return this.name;
     }

     this.setName = function (value) {
        this.name = value;
     }
 }


 var me = new Person('zzoon');
 console.log(me.getName());

 me.setName('iamjr');
 console.log(me.getName());


 /**
  * 각 객체는 자기 영역에서 공통적으로 사용할 수 있는 setName() 함수와 getName() 함수를 따로 생성하고 있다.
  * 이는 불필요하게 중복되는 영역을 메모리에 올려놓고 사용함을 의미하고 자원 낭비를 가져온다.
  * ==> 해결책 : 프로토 타입 사용.
  */

function Person(arg) {
    this.name = arg;
}

Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.setName = function(value) {
    this.name = value;
}

var me = new Person('me');
var you = new Person('you');
console.log(me.getName());
console.log(you.getName());


/***
 * 프로토 타입을 이용한 상속
 * 더글라스 크락포드의 JS상속 방법
 * 인자로 들어온 객체를 부모로하는 자식객체를 생성하여 반환.
 */

function create_object ( o ) {
    function F(){}
    F.prototype = o;
    return new F();
}

 /***
  * create_object() 함수를 이용한 상속
  * 
  */


var person = {
    name: "zooon",
    getName : function() {
        return this.name;
    },
    setName : function(arg) {
        this.name = arg;
    }
}

var student = create_object(person);

student.setName("me");
console.log(student.getName());



/***
 * 오버 라이딩 및 확장 extend
 * 
 */

var person = {
    name: "zooon",
    getName : function() {
        return this.name;
    },
    setName : function(arg) {
        this.name = arg;
    }
}


function create_object ( o ) {
    function F(){}
    F.prototype = o;
    return new F();
}

function extend(obj, prop){
    if(!prop) {
        prop = obj;
        obj = this;
    }
    for (var i in prop) obj[i] = prop [i];
    return obj;
}

var student = create_object(person);

var added = {
    setAge : function(age){
        this.age = age;
    },
    getAge : function() {
        return this.age;
    }
};

extend (student, added);
student.setAge(25);
console.log(student.getAge());