var user1 = { 
    names: 'ali',
    address: 'malir, karachi',
    contacts: ['0300000001','0322200001'],
    
    familyDetails: {
        brother: 'ali',
        son: 'khan'
    },
};
var user2 = { 
    names: 'ali',
    contact: '0300000001',
    addresses: [
        {name: ' current/per',house:'house no1', city: 'karachi', area:'37/F'},
        {name: ' current/per',house:'house no1', city: 'karachi', area:'37/F'}
    ],


};

console.log(user1.names)
console.log(user1.address)
user1.names = 'usman';

console.log(user1.names) // name updated

user1.abc = 5;
// user1.contacts[1] = 5;

console.log(user1.contacts[1])

user1.fName = user1.names;
delete user1.names;
console.log(user1.familyDetails.son);


console.log(user2.addresses[0].area);

for (let index = 0; index < user2.addresses.length; index++) {
    console.log(user2.addresses[index]);
    
}








