"use strict";
let numSum = (a, b) => {
    return a + b;
};
let a = numSum(5, 5);
console.log(numSum(5, 5));
let stringSum = (a, b) => {
    return a + b;
};
let b = numSum('a', 'b');
console.log(b);
const user1 = {
    name: 'abc',
    data: 3,
};
const user2 = {
    name: 'abc',
    data: '',
};
const p1 = {
    name: 'string',
    price: 8,
    data: {
        a: 6,
        b: 6,
    },
};
const p2 = {
    name: 'string',
    price: 8,
    data: {
        a: 6,
        b: 6,
        c: '6',
    },
};
console.log([p1, p2]);
const admin1 = {
    name: '',
    data: {
        _id: '',
        depart: '',
    },
};
const admin2 = {
    name: '',
    data: {
        _id: '',
        salary: 90000,
        a: ';'
    },
};
const admins = [
    admin1, admin2
];
admins.push({
    name: '',
    data: {
        _id: '',
    }
});
console.log(admins);
