function toggleTheme(){
    var bodyElm = document.getElementsByTagName("body")[0];
    var bodyClass = bodyElm.getAttribute("class");
    console.log(bodyElm.getAttribute("class"))

    if(bodyClass === "light"){
        bodyElm.setAttribute("class", "dark")
    }
    else{
        bodyElm.setAttribute("class", "light")
    }
}





var mainDiv = document.getElementById("main")
console.log(mainDiv)

// var userName = prompt("enter your name");
// heading.innerText = userName;

// console.log(heading)


var users = [ 'ali', 'hassan', 'arbaz'];

// for (let i = 0; i < users.length; i++) {
//     var heading = document.createElement("h1");
//         heading.innerText = users[i];
//         heading.setAttribute("class", "red")
//         heading.setAttribute("id", "abc")

//         mainDiv.appendChild(heading);

    
// }




var tableElm = document.createElement("table");
tableElm.setAttribute("border", "1")
for (let i = 0; i < 5; i++) {
    var tableRow1 = document.createElement("tr");
    var tbCol = document.createElement("td");
    var tbCol2 = document.createElement("td");
    tbCol.innerText = "col 1";
    tbCol2.innerText = "col 2";
    tableRow1.appendChild(tbCol)
    tableRow1.appendChild(tbCol2)
    tableElm.appendChild(tableRow1)
}

mainDiv.appendChild(tableElm)