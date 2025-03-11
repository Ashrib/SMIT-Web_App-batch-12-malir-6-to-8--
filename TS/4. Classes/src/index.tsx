//  Classes
class Person {
    name: string;
    id: number;
    contact: number;
    constructor(name:string, id:number, contact:number){
        this.name = name;
        this.id = id;
        this.contact = contact;
    }
    show(){
        console.log('name: ',this.name , "id:" , this.id)
    }
    
}

const person1 = new Person('ali',9795, 98954654);
const person2 = new Person('abc',6575678, 7987);
person1.show();


class Percentage{
    obtMarks : number;
    total: number = 500;

    constructor(obtMarks:number,total:number){
        this.obtMarks = obtMarks;
        this.total = total;
    }
    cal(){
        console.log(this.obtMarks/this.total *100 , "%")
    }
    showDetails(){
        console.log(this.obtMarks,this.total )
    }
}

let p1 = new Percentage(450,500);
let p2 = new Percentage(400,500);
p1.obtMarks = 500
p1.cal();
p1.showDetails();


class Order{

    private id: string = 'bihi983';
    readonly serialNo: string = 'o8798094'
    name: string;

    constructor(name:string){
        this.name = name;
    }

    show(){
        console.log(this.id)
    }

}

const order1 = new Order('bike');
console.log(order1.serialNo)
// order1.serialNo = '5346'   //can't assign
order1.name = "dsgdfg"



class Admin{
    show(){
        console.log('admin account')
    }
}
class User{
    show(){
        console.log('User account')
    }
}

let user1  = new User();
if(user1 instanceof Admin){
    console.log('yes')
}else{
    console.log('no')
}


type accState = 'admin' | 'user'
function create(acc: accState){
    let obj         
    if(acc === 'admin'){
    obj = new Admin()
    }
    else{
        obj = new User()
    }
    return obj;
}

let getObj = create('admin');
if(getObj instanceof Admin){

}

