var data = [{
  username: 'abc',
  email: 'abc@gmail.com',
  pass: '12345',
},
{
  username: 'abcd',
  email: 'abc@gmail.com',
  pass: '12345',
},
{
  username: 'abcde',
  email: 'abc@gmail.com',
  pass: '12345',
}
]
var data2 = [{
  username: 'abc',
  email: 'abc@gmail.com',
  pass: '12345',
},
{
  username: 'abcd',
  email: 'abc@gmail.com',
  pass: '12345',
},
]
var data3 = [{
  product_name: 'abc',
  price: 200,
},
{
  product_name: 'abcd',
  price: 200,
},
]
localStorage.setItem('users', JSON.stringify(data)) // to store
localStorage.setItem('admins', JSON.stringify(data2)) // to store
localStorage.setItem('products', JSON.stringify(data3)) // to store


localStorage.removeItem('products'); // delete products data from storage

var getData = JSON.parse(localStorage.getItem('users')) // to get
console.log(getData)

var getAdminData = JSON.parse(localStorage.getItem('admins')) // to get

var a = []
for (let i = 0; i < getData.length; i++) { // to delete only one obj from array
  if(getData[i].username !== 'abc'){
    a = [...a, getData[i]];
  }
}
getData = a;

localStorage.setItem('users', JSON.stringify(getData)) // to store users updated data
console.log("updated users data: ",getData)


var b = []
for (let i = 0; i < getAdminData.length; i++) {
  if(getAdminData[i].username === 'abc'){ // for only update the required obj
    b = [...b, {...getAdminData[i], email:'xyz@gmail.com'}]
  }
  else{
    b = [...b, getAdminData[i]] // remain data
  }
}
getAdminData = b;

console.log("updated admin data: ",getAdminData)
localStorage.setItem('admins', JSON.stringify(getAdminData))  // to store admins updated data



