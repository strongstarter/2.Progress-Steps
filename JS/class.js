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


//Class in ES6

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //Instance methods
    calAge1() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if(name.includes (' ')) this._fullName = name;
        else alert (`${name} is not a full name!`);
        }

    get fullName() {
        return this._fullName;
    }

    //Static method
    static hey() {
        console.log('Hey there 😶💩');
    }
}


class StudentCl extends PersonCl {  
    constructor(fullName, birthYear, course) {
        //always needs to happen first!
        super(fullName, birthYear)
         this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calAge1() { // overriding of its psarent class (PersonCl here)
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel 
        more like ${2037 - this.birthYear + 10}`);
    }
}

const martha = new StudentCl ('Martha Jones', 2012,
'Computer Science');

martha.introduce();
martha.calAge1();

// Object.creat proto chaining.
const PersonProto = {
    calAge2() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
}

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`)
}

const jay2 = Object.create(StudentProto);
jay2.init('Jay', 2010, 'computer science');
jay2.introduce();
jay2.calAge2();

// Another Class Example 

// 1) Public field
// 2) Private fiedls
// 3) Public methods
// 4) private methods
// (There is also the static version)

class Account {
    // 1) Public fields (instances, NOT prototype)
    local = navigator.language;
    

    // 2) Private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) { 
        this.owner = owner;
        this.currency = currency;

        //Protected Property 
        this.#pin = pin;
        //this.#movements = [];
        //this.locale = navigator.language;
        
        console.log(`Thanks for opening an account, ${owner}`);
    }

    // 3) Public methods
//Public Interface.. better than the outside manual manipulator.
    getMovements() {
        return this.#movements;
    }

    diposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.diposit(-val);
        return this;
    }


    requestLoan(val) {
        if(this._approveLoan(val)) {
        this.diposit(val);
        console.log(`Loan approved!!😎 `)
        return this;
        }

    }

    _approveLoan(val) {
        return true;
    }


    
    static helper() {
        console.log('Hello');
    }
    // 4) Private methods
    //#approveLoan(val) {
        
}

const acc1 = new Account('jonas','EUR', 1111,);
console.log(acc1);

//acc1._movements.push(250);
//acc1._movements.push(-140);
acc1.diposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
//acc1.#approveLoan(1000);
console.log(acc1.getMovements())


console.log(acc1);
//console.log(acc1.#pin);
//console.log(acc1.#approveLoan(100))

Account.helper();

// Chaining
acc1.diposit(300).diposit(500).withdraw(35).requestLoan(2500).withdraw(4000);
console.log(acc1.getMovements());