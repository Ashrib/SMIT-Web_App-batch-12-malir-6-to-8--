
function tellTime(){
    var currentTime = new Date();
    // document.write(currentTime.toString());
    console.log(currentTime.toString());
}

tellTime();


function consoleUser(){
    console.log("allow")
    console.log("welcome")
    console.log("courses show")
    console.log("courses show")
    console.log("courses show")
    console.log("courses show")
}


function documentUser (){
        document.write("allow")
        document.write("welcome")
        document.write("courses show")
        document.write("courses show")
        document.write("courses show")
        document.write("courses show")
}


var age = 18
if(age >= 18){
    // to console
    consoleUser();

    // to print screen
    documentUser() 
}

if(age < 18){
    consoleUser();
}

function greetingUser(personName) {

    alert("Welcome "+ personName);
    alert("Thanks for visting");
}

var login = true;
var userName = prompt("enter your name");

console.log(Number(userName))



if(login === true && userName === "ali"){
    greetingUser(userName);
}
if(login === true && userName === 'asharib'){
    greetingUser(userName);
}


