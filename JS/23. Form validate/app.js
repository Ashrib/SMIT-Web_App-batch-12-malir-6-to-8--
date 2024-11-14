var usernameData = false;

function inputValid(e)
{
  if(e.target.value.length < 3){
    console.log(e.target.nextElementSibling)
    e.target.nextElementSibling.innerText = 'atleast 3 char required'
    e.target.nextElementSibling.style.display = 'block'
    return;
  }
  e.target.nextElementSibling.style.display = 'none';
  usernameData = true;


}
function submitData(e){
  e.preventDefault();

  var username = document.getElementById('username');
  var password = document.getElementById('password');

  if(password.value.length < 11){
    console.log(password.nextElementSibling)
    password.nextElementSibling.innerText = 'weak password'
    return;
  }
  password.nextElementSibling.style.display = 'none'

  if(!usernameData ) return
   
  // usersData.push({
  //   username: username.value,
  //   password: password.value,
  // })
var i= 0;
while(i < usersData.length){
  if(usersData[i].username === username.value){
    alert("username already exist!");
    return;
  }
  i++;
}

  usersData = [...usersData ,   { // 2nd method with spread operator
    username: username.value,
    password: password.value,
  }
]

  console.log(usersData);

  username.value = ''; // to empty input
  password.value = '';
  usernameData = false;
}

var usersData = [
  {
    username: 'abc1',
    password: '1234567890',
  },
  {
    username: 'abc2',
    password: '1234567890354',
  }
]