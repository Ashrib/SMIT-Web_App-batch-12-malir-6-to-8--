var mainDiv = document.getElementById("main")
console.log(mainDiv)

// var userName = prompt("enter your name");
// heading.innerText = userName;

console.log(heading)


var users = [ 'ali', 'hassan', 'arbaz']
for (let i = 0; i < users.length; i++) {
    var heading = document.createElement("h1");
    heading.setAttribute("class", "red")
    heading.innerText = users[i];
    
    mainDiv.appendChild(heading)
    
}