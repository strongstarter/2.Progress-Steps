'use strict'
//Worker라는 클래스

//1. 직원 등록 
//이름, 
//직급, 
//근무부서, 
//내선번호,
// 맡은 업무를 등록하기. 

//2. 정보 조회 하기. 
//Print함수: 해당 직원의 정보를 출력할 수 있어서 인사팀에서 그 함수를 통해 직원정보 조회한다.

//3. 조회한 직원 정보를 전달한다. 
//toEmployee 함수: 조회한 정보를 모은다. 

//모은 정보를 전달할거당.

//4. 전달할 대상을 특정한다. 
//toEmployee에 매개편수 사용해서 특정한 누군가에게만 보내도록 수정해봐라.

//class Worker {
//    constructor(name, title, unit, contact, duty) {
//        this.name = name;
//        this.title = title;
//        this.unit = unit;
//        this.contact = contact;
//        this.duty = duty;
//    }
//
//    print(name){
//        if(name === !this.name) {
//            throw new Error('The name does NOT exist.');
//        }
//
//        return this.name === name;
//    };
//
//    toEmployee(){};
//}
//
//const jiyeon = new Worker(
//    "jiyeon", "manager", "quality", "123", "playing"
//)
//
//const sanghyun = new Worker(
//    "sanghyun", "director", "quality", "555", "programing"
//)
//console.log(jiyeon);
//console.log(sanghyun);

//define([
//    'require',
//    ''
//], function(require, factory) {
//    'use strict';
//    
//});

const Person = function (firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never do this 
    //this.calcAge = function() {
    //    console.log(2037 - this.birthYear);
    //};
}


const jonas = new Person ('jonas', 1991);
console.log(jonas);

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}
const matilda = new Person ('Matilda', 2017);
const jack = new Person ('Jack', 1988);
const jay = 'jay'
console.log(matilda, jack);

console.log(jonas instanceof Person);
console.log(jay instanceof Person); //false

//Prototypes
console.log(Person.prototype)
Person.prototype.calAge = function() {
    console.log(2037 - this.birthYear);
}

jonas.calAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.specis = 'Homo Sapiens';
console.log(jonas.specis, matilda.specis);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));