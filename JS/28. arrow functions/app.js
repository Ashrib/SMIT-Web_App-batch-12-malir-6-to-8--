
var sum = ()  => {
  var res = 4 *5;

  console.log('welcome')
}
sum();


var data = []


// (() => { // data calling
//     console.log('welcome')

//    data = [1,2,34]
//   }
// )()


var dataRead = (a,b, ...all)  => {
  console.log(a,b);
  console.log(all);
}

dataRead(2,3, 'asharib');
dataRead(5,3,'hello', 'world');

var arr = [1,2,3];
var [a,b,c] = arr;

console.log(a)
console.log(b)
console.log(c)












