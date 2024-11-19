var usernameData = false;

function inputValid(e) {
  /// onInput validation for username input
  if (e.target.value.length < 3) {
    console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.innerText = "atleast 3 char required";

    e.target.nextElementSibling.style.display = "block";
    return;
  }
  e.target.nextElementSibling.style.display = "none";
  usernameData = true;
}
function submitData(e) {
  e.preventDefault();

  var username = document.getElementById("username");
  var password = document.getElementById("password");

  if (password.value.length < 11) {
    console.log(password.nextElementSibling);
    password.nextElementSibling.innerText = "weak password";
    return;
  }
  password.nextElementSibling.style.display = "none";

  if (!usernameData) return;

  // usersData.push({
  //   username: username.value,
  //   password: password.value,
  // })
  var i = 0;
  while (i < usersData.length) {
    if (usersData[i].username === username.value) {
      alert("username already exist!");
      return;
    }
    i++;
  }

  usersData = [
    ...usersData,
    {
      // 2nd method with spread operator
      username: username.value,
      password: password.value,
    },
  ];

  console.log(usersData);

  username.value = ""; // to empty input
  password.value = "";
  usernameData = false;
}

var usersData = [
  {
    username: "abc1",
    password: "1234567890",
  },
  {
    username: "abc2",
    password: "1234567890354",
  },
];

function checkForSelection(e) {
  e.preventDefault();
  if (document.getElementById("states").selectedIndex === 0) {
    alert("Please select a state.");
    return;
  }
  console.log(document.getElementById("states").value);
}

function validateRadios(e) {
  e.preventDefault();

  console.log(radios)
  var radios = document.getElementsByName("r1");
  console.log(radios)
  
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log(radios[i].value)
      return ;
    }
  }
  alert("Please check one.");
  
}


function validateEmail(e) {
  e.preventDefault();
  var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
  var emailInp = document.getElementById("email").value;
  if(!emailInp.match(regex) ){
    alert("invalid");
    return;
  }


}
