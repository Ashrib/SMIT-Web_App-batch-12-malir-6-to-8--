"use strict";
let userName = "ali";
userName = '';
let total = 100;
total = 3;
let names = ['34'];
let numbers = [3];
numbers.push(4);
let nestedArray = [[4], [5]];
let mixArray = [3, 'a'];
console.log(mixArray);
let user1 = {
    name: 'ali',
    contact: 11,
};
let admin = {
    name: 'usman',
    contact: 12,
};
const p1 = {
    name: '',
    _id: '',
    address: ['karachi']
};
const p2 = {
    name: 'person2',
    _id: '12234',
};
// functions types
let sum = (a, b) => {
    return a + b;
};
let totalSum = sum(5, 5);
let greet = (a) => {
    return `My name is ${a}`;
};
let msg = greet('ali');
console.log(msg);
let arr = ['a', 5];
arr.push(true);
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["order_status0"] = "confirmed";
    OrderStatus["order_status1"] = "InProgress ";
    OrderStatus["order_status2"] = "Shipped ";
    OrderStatus["order_status3"] = "Delievered";
})(OrderStatus || (OrderStatus = {}));
const orders = [
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
];
console.log(orders);
