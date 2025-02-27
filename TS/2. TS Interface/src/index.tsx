let userName : string = "ali";
userName = '';

let total : number = 100;
total = 3;

let names : string[] = ['34']
let numbers : number[] = [3]
numbers.push(4)


let mixArray : (string | number)[] = [3,'a']
console.log(mixArray)

// interfaces
interface User{
    name: string,
    contact: number,
}
interface Admin{
    name: string,
    contact: number,
}
let user1 : User = {
    name: 'ali',
    contact: 11 ,
}

let admin : Admin = {
    name: 'usman',
    contact: 12 ,
}



interface Person{
    name: string,
    _id: string,
    address?: string[],
}

const p1 : Person = {
    name: '',
    _id: '', 
    address: ['karachi']
}
const p2 : Person = {
    name: 'person2',
    _id: '12234', 
}


// functions types
let sum = (a : number,b:number)=>{
    console.log(a+b)
}