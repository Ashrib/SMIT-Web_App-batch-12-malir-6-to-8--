
var usersData = JSON.parse(localStorage.getItem('users'));


function searchData(user) {
  for (let i = 0; i < usersData.length; i++) {
    if(user.password === usersData[i].password && user.email === usersData[i].email){
      return usersData[i];
    }
  }
  
}

function submitForm(e){
  e.preventDefault();
  var passValue = document.getElementById("password").value;
  var emailValue = document.getElementById("email").value;

  var isLogin = searchData({password: passValue,email: emailValue,})
  if(isLogin){
    console.log(isLogin)
    localStorage.setItem('login',JSON.stringify(isLogin));
    window.location.replace('../dashboard/dashboard.html')
  }

  
}





