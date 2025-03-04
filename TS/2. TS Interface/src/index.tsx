let userName : string = "ali";
userName = '';

let total : number = 100;
total = 3;

let names : string[] = ['34']
let numbers : number[] = [3]
numbers.push(4)
let nestedArray : number[][] = [[4],[5]]



let mixArray : (string | number | boolean)[] = [3,'a']
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
let sum = (a : number, b:number) : number =>{
    return a + b;
}

let totalSum : number = sum(5,5);


let greet = (a : string) : string =>{
    return `My name is ${a}` 
}
let msg : string = greet('ali');
console.log(msg);


let arr : any[] = ['a',5];
arr.push(true);


interface Orders{
    id: number,
    product: string,
    quantity: number,
    status: string,
}
// enum
enum OrderStatus{
    order_status0 = 'confirmed',
    order_status1 = 'InProgress ',
    order_status2 = 'Shipped ',
    order_status3 = 'Delievered',
}

const orders : Orders[] = [
    {
        id: 23432,
        product: 'cap',
        quantity: 2,
        status: OrderStatus.order_status0, 
    },
    {
        id: 546546,
        product: 'bag',
        quantity: 2,
        status: OrderStatus.order_status1, 
    },
    {
        id: 56567,
        product: 'shoes',
        quantity: 2,
        status: OrderStatus.order_status2, 
    },
    {
        id: 56567,
        product: 'shoes',
        quantity: 2,
        status: OrderStatus.order_status3, 
    },
]
console.log(orders)


