

for(var i = 0; i <= 4; i++){
    console.log("hello", i);
    
}


var citiesArray = [ "karachi", "islamabad", "lahore"];
var checkCity = "islamabad";


for(var i = 0; i < citiesArray.length; i++){
    console.log(i);
    if(checkCity === citiesArray[i]){
       alert("yes, index: "+ i);
       break; 
    }
}



for(var i = 1; i <= 10; i++){
    document.write(i*2+"<br>");
    
} 
