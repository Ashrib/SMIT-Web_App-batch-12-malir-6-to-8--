

function getValues(username,sid, ...data ){ //rest parameter
    console.log(username)
    console.log(sid)
    console.log(data)

}

// getValues(3,5,7,8,10)
// getValues([6,5,7,8,10,12,"hello"],5)

getValues('ali', '1234', [1,3,4,6], true, 1000)





var arr = [1,2,3,4];
var arr2 = [1,2,3,4];
var arr3 = [...arr, ...arr2];
console.log(arr3)


var array = [2,[1,2], [4,5] , 3, 6, [2,3]];


console.log(Array.isArray(array) );
var newArr = []

for(var i =0; i<array.length; i++){
    if(Array.isArray(array[i])){
        // console.log(array[i])
        // newArr.push(...array[i]);
        newArr = [...newArr, ...array[i]];
    }
    else{
        // newArr.push(array[i])
        newArr = [...newArr, array[i]];

    }
    
    
}

console.log(newArr );










