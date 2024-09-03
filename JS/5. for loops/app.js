
// for(var i = 0; i <= 4; i++){
//     console.log("hello", i);
// }

var citiesArray = [ "karachi", "islamabad", "islamabad", "lahore"];
var checkCity = "islamabad";
// var isMatched = false;
// var count = 0;

// for(var i = 0; i < citiesArray.length; i++){
//     console.log(citiesArray[i]);
//     if(checkCity === citiesArray[i]){
//         alert("yes, index:" + i);
//         isMatched = true;
//         break;
//     }
//     //  console.log(citiesArray[i]);
// }
// if(isMatched === false){
//     alert("no");
// }

// for(var i = 0; i < citiesArray.length; i++){
//     if(checkCity === citiesArray[i] ){
//         count++;
//     }
//     if(count ===2){
//         alert("yes"+count);
//         isMatched = true;
//         break;
//     }
// }
// if(isMatched === false){
//     alert("no");
// }


// for(var i = 1; i <= 10; i+=2){
//     // document.write(i*2+"<br>");
//         console.log("hi" , i)
    
// } 


// for(var i = 10; i >= 1; i--){
//     console.log("hi" , i)
// }


// // 2nd logic
// var arr2 = [];
// for(var i=0; i<citiesArray.length; i++){
//     if(checkCity === citiesArray[i]){
//         arr2.push(citiesArray[i])
//     }
//     if(arr2.length === 2){
//         alert("found 2 time")
//         break;
//     }
// }




// for(var i=0; i<5; i++){
//     console.log("-----------")
//     console.log(i, "outer loop")
    
//     for(var j=0; j<10; j++){
//         console.log(j, "inner loop")
//     }
    
// }


var num1 = [ 5,6,3,8,9];
var num2 = [ 12,44,67,33];
var totals = [];
var  multiply = 0;


for(var i = 0; i<num1.length; i++){
    console.log("outer loop",num1[i]);
    
    for(var j=0; j<num2.length; j++){
        console.log("inner loop",num1[i]*num2[j])
        multiply += num1[i] * num2[j];
    }
    console.log("multiply: ",multiply)
    totals.push(multiply)
    multiply = 0;
}

console.log(totals)













