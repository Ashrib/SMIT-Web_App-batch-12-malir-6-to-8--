var user1 = {
  names: "ali",
  address: "malir, karachi",
  contacts: ["0300000001", "0322200001"],
  emptyKey: null,

  familyDetails: {
    brother: "ali",
    son: "khan",
  },
};
var user2 = {
  names: "ali",
  contact: "0300000001",
  addresses: [
    {
      marks: [50, 70, 60, 40],
      name: " current/per",
      house: "house no1",
      city: "karachi",
      area: "37/F",
    },
    {
      marks: [50, 70, 60, 40],
      name: " current/per",
      house: "house no1",
      city: "karachi",
      area: "37/F",
    },
    {
      marks: [50, 70, 60, 40],
      name: " current/per",
      house: "house no1",
      city: "karachi",
      area: "37/F",
    },
  ],
  marks: [50, 70, 60, 40],
  totalSum: function () {
    var i = 0;
    var res = 0;
    while (i < user2?.marks?.length) {
      res += user2?.marks[i];
      i++;
    }
    return res;
  },
};

console.log(user1.names);
console.log(user1.address);
user1.names = "usman";

console.log(user1.names); // name updated

user1.abc = 5;
// user1.contacts[1] = 5;

console.log(user1);

user1.fName = user1.names;
delete user1.names;
console.log(user1.familyDetails.son);

console.log(user2.addresses[0].area);

for (let index = 0; index < user2.addresses.length; index++) {
  console.log(user2.addresses[index]);
}

// console.log(user2.totalSum());

var user3 = [
  {
    marks: [50, 70, 60, 40],
    name: " current/per",
    house: "house no1",
    city: "karachi",
    area: "37/F",
    totalSum: function () {
      var i = 0;
      var res = 0;
      while (i < this.marks?.length) {
        res += this?.marks[i];
        i++;
      }
      return res;
    },
    a:10,
  },
  {
    marks: [30, 70, 60, 40],
    name: " current/per",
    house: "house no1",
    city: "karachi",
    area: "37/F",
    totalSum: function () {
      var i = 0;
      var res = 0;
      while (i < this?.marks?.length) {
        res += this?.marks[i];
        i++;
      }
      return res;
    },
  },
  {
    marks: [10, 70, 60, 40],
    name: " current/per",
    house: "house no1",
    city: "karachi",
    area: "37/F",
    totalSum: function () {
      var i = 0;
      var res = 0;
      while (i < this?.marks?.length) {
        res += this?.marks[i];
        i++;
      }
      return res;
    },
  },
];


var i = 0;
var result = 0;
while (i < user3.length) {
        result += user3[i]?.totalSum();
        console.log("to check 'a' key:","a" in user3[i]);
        
        i++;
}
    console.log(result);


    var obj1 = {
        a: '2',
        b: 10,
    }
    var check = "c" in obj1;
    console.log(check);



    


