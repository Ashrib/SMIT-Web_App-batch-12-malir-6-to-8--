
var sum = ()  => {
  var res = 4 *5;

  console.log('welcome')
}
sum();



// var data = [
//   Anas Talha rizwan bilal akmal bilal waleed muhib aaliyan zohaib faiq asadullah junaid zeeshan bhai shoaib sarim rizwan soomro huzaifa ilyas siraj umer muzamil owais hasnain kamran ahmed raza faizan amaan umais unaid muhammad muzamil usman shaoud usman ahmed ayan mubashir ibharim husban gulam adnan nadeem azeem zain M.anas talha shahraz shahbaz amjad abdullah umaim arshman ali huzaifa shahrukh imtiaz shahzad arbaz usama
// ]


(() => { // data calling
    console.log('welcome')

   data = [1,2,34]
  }
)()


var dataRead = (a,b, ...all)  => {
  console.log(a,b);
  console.log(all);
}

dataRead(2,3, 'asharib');
dataRead(5,3,'hello', 'world');

var arr = [1,2,3];
var [a,b,c] = arr;

console.log(a);
console.log(b);
console.log(c);


var data = [

  {
    qNo: 1,
    text: 'what is html?',
    options: ['a','b','c'],
    correctOption: 'a'
  },
  {
    qNo: 2,
    text: 'what is html?',
    options: ['a','b','c'],
    correctOption: 'a',
  },
  {
    qNo: 3,
    text: 'what is html?',
    options: ['a','b','c'],
    correctOption: 'a',
  },
  {
    qNo: 4,
    text: 'what is html?',
    options: ['a','b','c'],
    correctOption: 'a'
  },
  {
    qNo: 5,
    text: 'what is html?',
    options: ['a','b','c'],
    correctOption: 'a'
  },
];




var a = 6;  // functional scope

let e ;  // block scope



if(5 == 5){
 let check = true;
}
// console.log(check);

for (var i = 0; i < 10; i++) {
  let data = []
  
}
console.log(i);


// let a = 5;

function sayHi() {  // hoisting
  phrase = "Hello";

  alert(phrase);

  var phrase;
}
// sayHi();


const a1 = 5;
// a1 = 15;  not allow
console.log(a1);







let greet = (p_name = 'guest') => { // default parameter

  console.log(`hello ${p_name}`)
}

greet('asharib')
greet();










let sum2 = (num , num2 = num) => { // default parameter

  console.log(`sum = ${num + num2}`)
}
sum2(2,4);
sum2(2);


let person = ['abc', 19, 20]
let [, , x2] = person;
// console.log(x1);
console.log(x2);
























