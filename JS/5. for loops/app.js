
for(var i = 0; i <= 4; i++){
    console.log("hello", i);
}

var citiesArray = [ "karachi", "islamabad", "islamabad", "lahore"];
var checkCity = "islamabad";
var isMatched = false;
var count = 0;

for(var i = 0; i < citiesArray.length; i++){
    console.log(citiesArray[i]);
    if(checkCity === citiesArray[i]){
        alert("yes, index:" + i);
        isMatched = true;
        break;
    }
    //  console.log(citiesArray[i]);
}
if(isMatched === false){
    alert("no");
}

for(var i = 0; i < citiesArray.length; i++){
    if(checkCity === citiesArray[i] ){
        count++;
    }
    if(count ){
        alert("yes"+count);
        isMatched = true;
        break;
    }
}
if(isMatched === false){
    alert("no");
}


for(var i = 1; i <= 10; i+=2){
    // document.write(i*2+"<br>");
        console.log("hi" , i)
    
} 

for(var i = 10; i >= 1; i--){
    console.log("hi" , i)
}







