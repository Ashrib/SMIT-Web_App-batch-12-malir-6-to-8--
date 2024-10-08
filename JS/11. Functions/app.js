// // function greetingUser(passName){
// //     console.log(passName)
// //     // console.log("Welcome" )
// //     // console.log("thanks for visting!")

// // }


// // function totalSum(a){
// //     console.log(a)
// //     // console.log(a + b)
// // }

// // console.log("before function")

// // // greetingUser();


// // // var isLogin = true;
// // // if(isLogin === true){
// // //     // to greet user
// // //     greetingUser();
// // // }

// // // var loginAfterLong = true
// // // if(loginAfterLong === true){
// // //      // to greet user
// // //      greetingUser();
// // //     // ask about plans
// // //     askAboutPlans();
// // // }


// // var userName = prompt("your name");
// // greetingUser(userName)






// // // if(userName === "ali"){
// // //     greetingUser(userName);
// // // }

// // // if(userName === "usman"){
// // //     greetingUser(userName)
// // // }

// // // totalSum(5,6)
// // // totalSum(15,60)
// // // totalSum(15,100)



// // totalSum('ali')
// // totalSum(100)
// // totalSum(true)
// // totalSum([3,4,6])

// var number = 100;

// function toSum(num1, num2){
//     if(num1 === 0 && num2 == 0){
//         return ;
//     }
//      return num1+num2;
    
// }
 
// toSum(10, 15, '10');


// var total;
// if(number > 90 && number < 101)
// {
//     total = toSum(number, 50)
// }
//  else if( number > 70){
//     total = toSum(number , 150)
//  }

//   console.log(total)








var hoursSp =  document.getElementById("hours");
var minSp =  document.getElementById("min");
var secSp =  document.getElementById("sec");

setInterval(()=>{
    
    var time = new Date();
    hoursSp.innerText = time.getHours()
    minSp.innerText = time.getMinutes()
    secSp.innerText = time.getSeconds()
}, 1000) 

function createRandom(){
    return Math.round(Math.random() *100 );
}
function sumNumbers(a,b){

    var numRandom = createRandom();
    return (a+b) *numRandom;
}
// var total = sumNumbers(5,10) * 100


console.log(sumNumbers(5,10))


function getArray(arr=[]){
    var num = 0;
    for (let i = 0; i < arr.length; i++) {
        if(num < arr[i]){
            num = arr[i];
        }
    }
    console.log(arr)
    return num;
}
console.log(getArray([5,8,9,22]))




var array1 = [ 3, 'yes', true, [0,1,34] ]
console.log(array1[3][2])

function getData(){
  return [10,15,2,6,7]
}
function getLogin(username, pass){
    if(username && pass){
        return getData() ;
    }
    else{
        console.log('error')
    }

}

console.log(getLogin("abc123", "12345"))



// var sumNums  = 10;
function toAdd(){
    var sumNums = 15; // local variable
    return sumNums;
}
sumNums =  toAdd();
console.log(sumNums) //new variable



var array = [];
function addToArray(arrElm){
    array.push(arrElm)
    return array;
}

// var userInp = prompt("");

//   console.log(addToArray(userInp))
//   console.log(addToArray(354))




  /// 
    // 5!
    // 5*4*3*2*1


function factorial(num){
    if(num <= 1 ){
        return 1;
    }
    return num * factorial(num-1);

}
console.log(factorial(4));


