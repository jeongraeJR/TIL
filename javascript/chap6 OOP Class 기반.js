/**
 * 클래스 기반의 상속
 *  클래스의 역할을 하는 함수로 상속을 구현.
 */

 function Person(arg) {
     this.name = arg;
 }

 Person.prototype.setName = function(value) {
     this.name = value;
 };

 Person.prototype.getName = function() {
     return this.name;
 }

 function Student (arg) {
     
 }

 var you = new Person('iamjr000');
 Student.prototype = you;

 var me = new Student('zzoon');
 me.setName("zzoon");
 console.log(me.getName());

/***
 * 위 코드의 문제점 : 부모 클래스와 자식 클래스의 인스턴스가 독립적이지 않음.
 * 
 */

 
function Person(arg) {
    this.name = arg;
}

Person.prototype.setName = function(value) {
    this.name = value;
};

Person.prototype.getName = function() {
    return this.name;
}

function Student (arg) {
    
}

function F(){};
F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;

Student.super = Person.prototype;

var me = new Student();
me.setName('zzoon');
console.log(me.getName());