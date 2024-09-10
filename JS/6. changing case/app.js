var string = "Karachi";
string = string.toLowerCase();
// console.log(string)
string = string.toUpperCase();
// console.log(string)

// var citiesArray = ["Karachi", "lahore", "islamabad"];
// var checkCity = prompt("enter city").toLowerCase();

// for(var i=0; i < citiesArray.length; i++){
//     if(checkCity === citiesArray[i].toLowerCase()){
//         alert("yes");
//     }
// }

// document.write(checkCity);

// var userName = prompt("enter name").toLowerCase();
// var firstCh = userName.slice(0,1).toUpperCase();
// var remainCh = userName.slice(1);
// var nameToShow = firstCh + remainCh

// console.log(firstCh)
// console.log(remainCh)
// document.write(nameToShow)

// var month = prompt("enter month").toLowerCase();
// var monthToShow = month.slice(0,1).toUpperCase() + month.slice(1,3);
// document.write(monthToShow);

// var text = "some  text";

// for(var i=0; i<text.length; i++){

//     if(text.slice(i, i+2) === "  "){
//         console.log("double space not allow!")
//     }

// }

var text2 = "The New Yorker magazine doesn't allow the phrase World War II. text The New Yorker magazine doesn't allow the phrase World War II. text";
for (var i = 0; i < text2.length; i++) {
  if (text2.slice(i, i + 12) === "World War II") {
    text2 = text2.slice(0, i) + "Second world war" + text2.slice(i + 12);
  }
}
console.log(text2);
 