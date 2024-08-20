var num = 10;

if (num === 10) {
  // console.log("true")
}

if (9 !== 10) {
  // console.log("true: 10")
}

if (5 > 7) {
  console.log(true);
}

if (5 < 7) {
  console.log(true);
}

if (7 <= 7) {
  console.log(true);
}

if (9 >= 7) {
  console.log(true);
}

if (1 == 1) {
  console.log("if block");
} else {
  console.log("else block");
}

var marks = 80;

if (marks > 79) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else if (marks >= 70) {
  console.log("B");
} else if (marks >= 70) {
  console.log("B");
} else {
  console.log("fail");
}

var weight = 70;
var age = 18;

if (weight > 60 && age > 17) {  // &&
  console.log("Come to our tryout!");
} else {
  console.log("Come to our cookout!");
}


var sport = "football"
var GPA = 1.5;

if ((40 > 50 && GPA > 2.5) || sport === "football") {
  console.log("Welcome to Bubba State!");
} else {
  console.log("Have you looked into appliance repair?");
}

var gender = "male";

if(age >= 18){
    
    if(gender === "male"){
        alert("web and app");
        
    }
    else{
        alert("graphic");
    }

}else{
    if(age <=17 && age >=12){

        alert("techno kids");
    }
    else{
        alert("sorry");

    }
}
