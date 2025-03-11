"use strict";
//  Classes
class Person {
    constructor(name, id, contact) {
        this.name = name;
        this.id = id;
        this.contact = contact;
    }
    show() {
        console.log('name: ', this.name, "id:", this.id);
    }
}
const person1 = new Person('ali', 9795, 98954654);
const person2 = new Person('abc', 6575678, 7987);
person1.show();
class Percentage {
    constructor(obtMarks, total) {
        this.total = 500;
        this.obtMarks = obtMarks;
        this.total = total;
    }
    cal() {
        console.log(this.obtMarks / this.total * 100, "%");
    }
    showDetails() {
        console.log(this.obtMarks, this.total);
    }
}
let p1 = new Percentage(450, 500);
let p2 = new Percentage(400, 500);
p1.obtMarks = 500;
p1.cal();
p1.showDetails();
class Order {
    constructor(name) {
        this.id = 'bihi983';
        this.serialNo = 'o8798094';
        this.name = name;
    }
    show() {
        console.log(this.id);
    }
}
const order1 = new Order('bike');
console.log(order1.serialNo);
// order1.serialNo = '5346'   //can't assign
order1.name = "dsgdfg";
class Admin {
    show() {
        console.log('admin account');
    }
}
class User {
    show() {
        console.log('User account');
    }
}
let user1 = new User();
if (user1 instanceof Admin) {
    console.log('yes');
}
else {
    console.log('no');
}
function create(acc) {
    let obj;
    if (acc === 'admin') {
        obj = new Admin();
    }
    else {
        obj = new User();
    }
    return obj;
}
let getObj = create('admin');
if (getObj instanceof Admin) {
}
