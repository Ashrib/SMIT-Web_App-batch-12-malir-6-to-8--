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






