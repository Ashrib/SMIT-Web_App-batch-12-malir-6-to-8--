
var elm = document.getElementById("imgTag")
var links = ["02.jpg","03.PNG"]
var count = 0
function fun(value){
    if(count>1){
        count = 0
    }
    elm.setAttribute("src", links[count]);
    if(value === '+'){
        count++;
        return;
    }
    count--;
}
setInterval(fun, 2000)


