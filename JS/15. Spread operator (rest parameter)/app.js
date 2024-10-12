

function getValues(username,sid, ...data ){ //rest parameter
    console.log(username)
    console.log(sid)
    console.log(data)

}

// getValues(3,5,7,8,10)
// getValues([6,5,7,8,10,12,"hello"],5)

getValues('ali', '1234', [1,3,4,6], true, 1000)
