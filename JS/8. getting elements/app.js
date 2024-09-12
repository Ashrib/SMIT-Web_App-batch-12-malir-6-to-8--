
var h1 = document.getElementById("heading1");
console.log(h1);

var h2 = document.getElementsByClassName("head1");
console.log(h2[0]);

var h1Text = h1.innerText;
console.log(h1Text);

console.log(h1.innerHTML)

h2[1].innerText = "this is heading";

var userName = prompt("enter your name");
document.getElementById("para1").innerText = userName;


