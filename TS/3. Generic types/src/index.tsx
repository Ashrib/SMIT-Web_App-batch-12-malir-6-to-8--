
let numSum = (a:any, b:any) :any =>{
    return a+b;
}
let a:number= numSum(5,5)
console.log(numSum(5,5))


let stringSum = (a:string, b:string) :string =>{
    return a+b;
}
let b:string= numSum('a','b')

console.log(b)


function concat <Type>(a:Type , b:Type) : string  {
    return `${a}  ${b}`;
}

console.log(concat<number>(9,10));
concat<string>('abc', 'cd');






interface User<Type> {
    name : string,
    data: Type,
}

const user1 : User<number> = {
    name:'abc',
    data: 3,
}
const user2 : User<string> = {
    name:'abc',
    data: '',
}

interface Product<Type extends object> {
    name : string,
    price: number,
    data: Type,
}

const p1 : Product<{}> = {
    name : 'string',
    price: 8,
    data: {
        a: 6,
        b: 6,
    },
}
const p2 : Product<{}> = {
    name : 'string',
    price: 8,
    data: {
        a: 6,
        b: 6, 
        c: '6',
    },
}
console.log([p1,p2])


interface Admin<Type extends {_id: string}> {
    name : string,
    data: Type,
}

const admin1 : Admin<{_id: string, depart:string}> = {
    name: '',
    data: {
        _id:'',
        depart:'',
    },
}

const admin2 : Admin<{_id: string, salary:number, a:string}> = {
    name: '',
    data: {
        _id:'',
        salary: 90000,
        a:';'
    },
}


const admins : (Admin<{ _id:string}>)[] = [
    admin1, admin2
]

admins.push({
    name:'',
    data:{
        _id:'',
    }
})
console.log(admins)
















