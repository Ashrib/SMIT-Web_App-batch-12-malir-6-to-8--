

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
console.log( "after splice: (remove)", mixedValues)


mixedValues.splice(2,0, "hey"); // adding without deleting
console.log( "after splice: (adding)", mixedValues)


mixedValues.splice(2,3, 55,44,200); // adding and deleting
console.log( "after splice: (add and remove both)", mixedValues)


// slice for copy
var copyArray = mixedValues.slice(0);
console.log("copy array1:", copyArray);

var copyArray2 = mixedValues.slice(2, 5);
                            //   (2, 5-1)
console.log("copy array2:", copyArray2);

// [1 , 2, 3, 4]
// -4  -3  -2 -1
var copyArray3 = mixedValues.slice(-3);
console.log("copy array3:", copyArray3);


var copyArray4 = mixedValues.slice(-5,-2);
                            //   (index, (-2)-1)
console.log("copy array 4:", copyArray4);