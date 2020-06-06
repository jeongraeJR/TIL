function HelloFunc(funct) {
    this.greeting = 'hello';
}

HelloFunc.prototype.call = function (func) {
    func ? func (this.greeting) : this.func(this.greeting);
}

var userFunc = function(greeting) {
    console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();

//출력결과 hello


function saySomething(obj, methodName, name) {
    return (function(greeting) {
        return obj[methodName](greeting,name);
    })
}

function newObj(obj, name) {
    obj.func = saySomething(this, "who", name);
    return obj;
}

newObj.prototype.who = function (greeting, name) {
    console.log( greeting + " " + (name || "everyone"));
}

var obj1 = new newObj(objHello, "zzoon");
obj1.call();

/***
 * 정해진 형식의 함수를 콜백해주는 라이브러리가 있을 경우, 그 정해진 형식과는 다른 형식의 사용자 정의함수를 호출할때 유용.
 * 
 */