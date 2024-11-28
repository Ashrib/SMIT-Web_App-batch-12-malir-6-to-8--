function submitForm(e){
  e.preventDefault();


  var passValue = document.getElementById("password").value
  var emailValue = document.getElementById("email").value


  console.log(emailValue)
  console.log(passValue)



  if(passValue==='12345' && emailValue === 'test@xyz.com'){
    window.location.replace('../dashboard/dashboard.html')
  }


  
}