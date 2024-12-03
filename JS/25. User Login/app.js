
var isLogin = JSON.parse(localStorage.getItem("login"));
console.log(isLogin)
if(isLogin) {
  window.location.replace('./pages/dashboard/dashboard.html');
  
}


var url = window.location.href 
console.log(window.location.hostname)

// window.location.replace("https://www.google.com") ;


function getData(){
  return JSON.parse(localStorage.getItem('users'))
}
function setData(data){
  localStorage.setItem('users', JSON.stringify(data))
}

var users = (getData()) ?  [...getData()] : [];


function submitForm(e){
  e.preventDefault();


  var emailInp = document.getElementById('email').value;
  var usernameInp = document.getElementById('username').value;
  var passwordInp = document.getElementById('password').value;



  users = [...users , 
    { username: usernameInp,
      password: passwordInp,
      email: emailInp,
      
    }]
    setData(users);
    console.log(users);




}