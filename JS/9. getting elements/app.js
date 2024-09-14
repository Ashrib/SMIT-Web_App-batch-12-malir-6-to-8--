
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


var getSpan = document.getElementById("span1");
console.log(getSpan.innerText)
console.log(getSpan.innerHTML)
getSpan.innerText = "this is span"

getSpan.className = "sp2"

var getHeadings = document.getElementsByTagName("body");
console.log(getHeadings[0]);








