var x = '11';
switch(x){
    case 10:
        console.log(true)
        console.log(true)
        break;
    case 11 :
        console.log(false)
        break;
    case '10' :
            console.log(false)
            break;
    default:
        console.log("error");
}