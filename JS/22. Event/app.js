function change(e, check) {
  // console.log(check);
  // console.log(e.target.getAttribute("src"));
  if (check === "over") {
    e.target.setAttribute("src", "./03.PNG");
    return;
  }
  e.target.setAttribute("src", "./02.jpg");
}

function focusInp(e) {
  console.log(e.target);
  e.target.style.background = "lightgreen";
}
function validateInp(e, checkInp) {
  console.log(e.target.value);
  var nameError = document.getElementsByClassName("name-error")[0];
  var passError = document.getElementsByClassName("pass-error")[0];
  var emailError = document.getElementsByClassName("email-error")[0];
  // console.log(e.target.parentNode.childNodes );
  // console.log(nameError );
  e.target.style.background = "transparent";
  if (checkInp === "name") {
    if (e.target.value.length < 3) {
      nameError.innerText = "name should be 3 char";
      nameError.style.display = "block";
      return;
    }
    nameError.style.display = "none";
  }

  if (checkInp === "pass") {
    if (e.target.value.length < 9) {
      passError.innerText = "password is weak";
      passError.style.display = "block";
      return;
    }
    passError.style.display = "none";
  }

  if (checkInp === "email") {
    if (e.target.value.indexOf("@") === -1) {
      emailError.innerText = "invalid email";
      emailError.style.display = "block";
      return;
    }
    emailError.style.display = "none";
  }
}

function passVisiblility(e) {  //password show/hide
  // to password show or hide
  // console.log(e.target.previousSibling)
  if (e.target.innerText == "show") {
    e.target.previousSibling.setAttribute("type", "text");
    e.target.innerText = "hide"; // toggle = show
    return;
  }
  e.target.innerText = "show"; // toggle = show
  e.target.previousSibling.setAttribute("type", "password");
}
function addStyle(e) {
  if (e.target.className.indexOf("redText") === -1) { // to check there is class redText already exist or not; if -1:not exist, if any index return:exist
    e.target.className += " redText"; // add another class
    return; // return here
  }
  e.target.className = e.target.className.replace("redText", ""); // to remove redText class if already exist
}
function showMore() { // show more text
  document.getElementById("para").innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus aperiam, facere commodi ab ex quibusdam unde doloribus delectus vitae. Inventore expedita eius dolor eum minus assumenda blanditiis sequi doloremque.";
}
