

var cities = ["karachi", "lahore", "Islamabad"];

console.log(cities)

// alert("welcome to " + cities[0] )

var mixedValues = [20, "karachi", true];
console.log(mixedValues)

mixedValues  = [5, 10, 20];
console.log(mixedValues)


mixedValues[0] = "hello";
mixedValues[2] = 25;
mixedValues[4] = 25;

console.log(mixedValues[3])
console.log(mixedValues)

mixedValues[4] = null;
console.log(mixedValues)


mixedValues.pop(); // remove at the end
mixedValues.pop();
mixedValues.pop();
console.log(mixedValues)


mixedValues.push("hi", "bye", 70); // add one or more at the end
console.log(mixedValues)


mixedValues.shift() // remove from the beginning
console.log(mixedValues)


mixedValues.unshift(50, 100) // add one or more from the beginning
console.log(mixedValues)


mixedValues.splice(2,1); // deleting
console.log(mixedValues)


mixedValues.splice(2,0, "hey"); // adding without deleting
console.log(mixedValues)


mixedValues.splice(0,0, 600); // adding without deleting
console.log(mixedValues)



var copyArry = mixedValues.slice(2,4)
console.log( "copy array: ",copyArry )


var text = "Hello this is Asharib";
var var2 = text.slice(2,4)
console.log("var2: ",var2)


