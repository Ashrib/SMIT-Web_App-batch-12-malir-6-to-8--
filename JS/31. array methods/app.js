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
  {id: 3, name: "Mary"}
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


console.log( [1,2,4].map((elm) => elm*elm).filter(elm => elm<=16));




