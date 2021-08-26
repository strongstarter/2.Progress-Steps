'use strict'
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book: function(){} - old syntax
    book(flightNum, name) {  // book method
    console.log(`${name} booked a seat on ${this.airline} 
    flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}, ${name}`})
  },
}

lufthansa.book(200, 'Jiyeon Lim');
lufthansa.book(300, 'John Smith');
console.log(lufthansa)

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//Does not work. 
//book(23, 'Sarah Willians'); // just a regular fn.
//How to set 'this' keword manullay, tellign JS explicitely what 'this' points to.
// call, apply, bind method.

//Call Method 
book.call(eurowings, 23, 'Sarah Williams') //fn (여기서 book)는 그냥 object. 그리고 obj는 method를 가짐. 
//그러므로 fn도 method를 가질 수 있음.
console.log(eurowings);

book.call(lufthansa, 500, 'Jiyeon LiMu')
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 600, 'Mary Cooper');
console.log(swiss)

//요즘 잘 안씀. 
//Apply Method - sames as call method but doesn't receive a list of argument after 'this' keyword.
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)
console.log(swiss)

book.call(swiss, ...flightData); // 52번 줄과 같은 코드임. apply 대신 call 매소드.
//그리고 spread operator(...)을 쓴다. 

//Bind Method
// doesn't call the fn. Instead, returns a new function where the 'this' keyword'
// is bound. it's set to whatever value we pass into 'bind'.

//book.call(eurowings, 23, 'Sarah Williams')
const bookEW = book.bind(eurowings);// returns a new fn. not calling book fn.
const bookLH = book.bind(lufthansa);
const bookSX = book.bind(swiss);
 //we dont have to call 'call' method everytime. Instead, creat a new fn with the bind
 //method to use 'book' fn easily? 
bookEW(40, 'Steven Morel');

//lets take it further. 
const bookEW23 = book.bind(eurowings, 33);
bookEW23('Jonas Schemedtmann');
bookEW23('Martha cooper');

//With EventListener.
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++
    console.log(this.planes);
    
};
//lufthansa.buyPlane();
document.querySelector('.buy').addEventListener
('click', lufthansa.buyPlane.bind(lufthansa));



//Partial application: specifying Part of the argument of the orginal fn is already 
//applied. = already set.
// partial  = we can preset the parameter  
const addTax = (rate, value) => value + value * rate;  
console.log(addTax(0.1, 200));

//addTax 펑션에 rate를 지정해서 써보기 => bind 메소드를 쓴다. 
//addVAT에 addTax를 bind 메소드를 이용해서 만들어보자 
//addTax functin에 bind를 메소드를 써보자. 그리고 preset the rate always!

const addVAT= addTax.bind(null, 0.2)// bind의 첫 argument는 this keyword임. 
//근데 여기선 그냥 this 키워드 필요없으니 null을 넣는다. (starndard임)
//addVAT = value => value + value * 0.2;

console.log(addVAT(100)); // rate이 고정되었음 , bind는 거의 새로운 펑션을 줌.
console.log(addVAT(200));
console.log(addVAT(300));

//Nice challenge  - How to rewrite the above. 

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.3);
console.log('--------')
console.log(addVAT2(100));
console.log(addVAT2(200));
console.log(addVAT2(300));
console.log(addTaxRate(0.5)(100))

//Coding Challegne #1
const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JS', '1: Python', '2: Rust', '3: C++'],
    //This generates [0,0,0,0]. More in the next section.
    answers: new Array(4).fill(0),

    registerNewAnswer() {1
        //Get answer
        const answer = Number(
            prompt(
                `${this.question} \n 
                 ${this.options.join('\n')}\n \n
                (Write opteion number)`
                )
        );
        //console.log(answer);

        // Register answer
        // typeof : testing code? ?
        typeof answer === 'number' && answer < this.answers.length &&
        this.answers[answer]++
      
        //console.log(this.answers)
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
};

//poll.registerNewAnswer()


document
    .querySelector('.answer')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));
    

poll.displayResults.call({answers: [5, 2, 3]}, 'string')


//Immediate invoked fn expression (IIFE)
const runOnce = function() {
    console.log('This will never run again');
};
runOnce();

//IIFE
(function() {
    console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();




console.log('+++++++++++++++++Closure배우기');
//function factory_movie(title) {
//    return {
//        get_title: function() {
//            return title;
//        },
//        set_title: function(_title) {
//            if(typeof _title === 'string') {
//                title = _title
//            } else {
//                alert('제목은 숫자안됨. 글씨만 됨.')
//            }
//        }
//    }
//}
//
//var ghost = factory_movie('Ghost in the shell');
//var matrix = factory_movie('Matrix');
//
//alert(ghost.get_title());
//alert(matrix.get_title());
//ghost.set_title(1)
//alert(ghost.get_title());
//alert(matrix.get_title());

var arr = []
for(var i = 0; i < 5; i++) {
    arr[i] = function(id) {
        return function() {
      return id;
    }
  }(i);
}



for(var index in arr) {
    console.log(arr[index]());
}

//Example 1 of Closure
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }

}

g();
f();
console.dir(f);

// Re-assigning f function.
h();
f();
console.dir(f);



//Example 2 of Closure "Timer"
//const boardPassengers = function(n, wait) {
//    const perGroup = n / 3;
//
//    setTimeout(function (){
//        console.log(`We are now boarding all ${n} passengers`)
//        console.log(`There are 3 groups, each with ${perGroup} passengers`)
//    },  wait * 1000);
//   
//    console.log(`Will start boarding in ${wait} seconds`)
//};
//
//const perGroup = 1000;
//boardPassengers(180, 3)


// Coding challenge #2 = thinking challenge over coding challenge 
(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red'

    document.querySelector('body').addEventListener('click', () => 
    header.style.color = 'blue')
})();

//setTimeout setInterval
//setTimeout((a, b) => console.log('ha'), 1000, a, b (or ...spread optr))

const ingredients = ['olives', 'spinach']
const pizzaTimer = setTimeout((ing1, ing2) => 
console.log (`Here is your pizza with ${ing1} and ${ing2}`),3000,
...ingredients
);
console.log('Waiting...')

if(ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval
//to play clock every 5 sec
//setInterval(function() {
//    const now = new Date();
//   console.log(now);
//}, 3000);


