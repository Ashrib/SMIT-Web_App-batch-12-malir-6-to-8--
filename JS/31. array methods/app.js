let arr = [2, 4, 6];
let arr2 = [45, 676, 34];

let a = arr.map((elm, index, array) => {
  console.log(elm);
  console.log(index);
  console.log(array);

  return elm * elm;
});
console.log(a);

arr2.forEach((elm, index, array) => {
  console.log(elm);
  console.log(index);
  console.log(array);
});

let filterData = arr.filter((num)=> num<6);
console.log(filterData)

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 1, name: "John"},
];
// filter specific user
let filterUser = users.filter((user)=> user.id<3 && user.name==='John');
console.log(filterUser);

let names = 'Bilbo, Gandalf, Nazgul';
let nameArr = names.split(',', 2);
console.log(nameArr);

let text = 'there is some text';
console.log(text.split(' '));

let arr3 = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr3.join(' '); // glue the array into a string using ;
console.log( str ); // Bilbo Gandalf Nazgul


let nestedArr = [ ['a','b', ['d','a',[2,4]]], ['c','d'],'e','f'];
console.log( nestedArr.flat(Infinity).join('') );


console.log( [1,2,4]?.map((elm) => elm*elm)?.filter(elm => elm<=16));



let a1 = [1,2,'a','b'];
// let arrayLike = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };

// console.log(a1.concat(arrayLike))


console.log(users.findIndex((item)=> item.name === 'John'))
console.log(users.findLastIndex((item)=> item.name === 'John'))



let nums = [23,6,89,1,0,5];
let chs = ['a','c','d','b'];
console.log(nums.sort())
console.log(chs.sort())


console.log(nums.sort((a,b)=> a-b))
console.log(nums.sort((a,b)=> b-a))

console.log(Array.isArray([1,2,4]))
console.log(Array.isArray({a:'2'}))



function unique(arr) {
  return arr.filter((item,i,array)=> array.indexOf(item) === i)
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O






