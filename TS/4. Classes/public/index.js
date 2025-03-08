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
