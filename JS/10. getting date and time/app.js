

var currentTime = new Date();


console.log(( currentTime));
console.log(typeof( currentTime));

document.write(currentTime.toString())


var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(dayNames[currentTime.getDay()]);


console.log("day: ",currentTime.getDay());
console.log("hours: ",currentTime.getHours());
console.log("min: ",currentTime.getMinutes());
console.log("sec: ",currentTime.getSeconds());
console.log("year: ",currentTime.getFullYear());
console.log("time: ",currentTime.getTime());
console.log("milli-sec: ",currentTime.getMilliseconds());


var futureTime = new Date("June 30, 2035");

var currentMilli = currentTime.getTime()
var futureMilli = futureTime.getTime()
var diff = futureMilli - currentMilli

console.log(currentMilli)
console.log(futureMilli)

console.log(Math.floor(diff/ (24 * 60 * 60 * 1000)))

var time2 = new Date();
console.log(time2)

time2.setMonth(2)
time2.setHours(13)

console.log(time2)