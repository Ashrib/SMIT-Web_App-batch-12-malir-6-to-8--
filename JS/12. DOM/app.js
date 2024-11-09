function toggleTheme() {
  var bodyElm = document.getElementsByTagName("body")[0];
  var bodyClass = bodyElm.getAttribute("class");
  console.log(bodyElm.getAttribute("class"));

  if (bodyClass === "light") {
    bodyElm.setAttribute("class", "dark");
  } else {
    bodyElm.setAttribute("class", "light");
  }
}

var mainDiv = document.getElementById("main");
console.log(mainDiv);

// var userName = prompt("enter your name");
// heading.innerText = userName;

// console.log(heading)

var users = ["ali", "hassan", "arbaz"];

// for (let i = 0; i < users.length; i++) {
//     var heading = document.createElement("h1");
//         heading.innerText = users[i];
//         heading.setAttribute("class", "red")
//         heading.setAttribute("id", "abc")

//         mainDiv.appendChild(heading);

// }

var tableElm = document.createElement("table");
tableElm.setAttribute("border", "1");
for (let i = 0; i < 5; i++) {
  var tableRow1 = document.createElement("tr");
  var tbCol = document.createElement("td");
  var tbCol2 = document.createElement("td");
  tbCol.innerText = "col 1";
  tbCol2.innerText = "col 2";
  tableRow1.appendChild(tbCol);
  tableRow1.appendChild(tbCol2);
  tableElm.appendChild(tableRow1);
}

mainDiv.appendChild(tableElm);

console.log(document.getElementsByTagName("div")[0].nodeType);

console.log(document.childNodes[1].childNodes[1].childNodes);
var ul = document.getElementsByTagName("ul")[0].childNodes;

var eNode = 0,
  tNode = 0;
for (var i = 0; i < ul.length; i++) {
  if (ul[i].nodeType === 1) {
    eNode++;
  } else {
    tNode++;
  }
}
console.log(eNode);
console.log(tNode);

var ul1 = document.getElementsByTagName("ul")[0]
console.log(ul1.parentNode);
console.log(ul1.firstChild);
console.log(ul1.lastChild);
console.log(ul1.nextSibling);
console.log(ul1.previousSibling);


console.log(mainDiv);
var toCount = 0;
for(var i=0; i<mainDiv.childNodes.length; i++){
  if( mainDiv.childNodes[i].nodeName.toLowerCase() ==="h2" ){
    toCount++;
  }

  // console.log(mainDiv.childNodes[i].nodeName.toLowerCase())
}
console.log(toCount)



console.log(mainDiv.hasAttribute('class'))


console.log(ul1.hasAttribute('class'))
console.log(ul1.getAttribute('class'))
ul1.setAttribute('id', 'ulID')
console.log(ul1.getAttribute('id'))



console.log(ul1.attributes[0].nodeValue) // for simple string id


var li1 = document.getElementById('li1');


var liText = document.createTextNode('list item 1');
var i = document.createElement('i');

i.appendChild(liText);
li1.appendChild(i)

ul1.insertBefore(i, li1);

console.log(liText)

function addList(){
  console.log(ul1.childNodes)
  var count = 0;
  for(var i=0; i < ul1.childNodes.length; i++){
    if(ul1.childNodes[i].nodeName.toLowerCase() === 'li'){
      count++;
    }
  }
  var li = document.createElement('li');
  li.innerText = `list ${count + 1}`
  ul1.appendChild(li)
  console.log(count)
}

function removeList(){
  if(ul1.lastChild.nodeName.toLowerCase() === 'li'){
    ul1.removeChild(ul1.lastChild);
    return;
  }
  for(var i=ul1.childNodes.length-1; i >= 0; i--){  // reverse loop to get last li element
    if(ul1.childNodes[i].nodeName.toLowerCase() === 'li'){
      ul1.removeChild(ul1.childNodes[i]);
      break;
    }
  }

}






