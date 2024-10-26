var user1 = {
  names: "ali",
  address: "malir, karachi",
  // contacts: ["0300000001", "0322200001"],
  emptyKey: null,

  familyDetails: {
    brother: "ali",
    son: "khan",
  },
  others: {
    brother: "ali",
    son: "khan",
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


//constructor
function Product(price, b, c, d){
  this.price = price;
  this.color = b;
  this.des = c;
  this.rating = d;
}
var p1 = new Product(100, 'black', 'any', 'good');
var p2 = new Product(500, 'white', 'any', 'good');

console.log('p1:',p1.color);
console.log('p2:',p2);


var i = 0;
var p = [];
while(i<5){
    p.push( new Product(i, 'white', 'any', 'good'));
  i++;
}
console.log(p);



console.log(p1);


for (var key in user1) {

  if(typeof(user1[key]) === 'object'){
    console.log(user1[key])

    for(var key2 in user1[key]){
      console.log(key2, user1[key][key2])
    }

  }
  // console.log(`key: ${key}, value: ${user1[key]} type: ${typeof(user1[key])}` )
}








// function toAdd(){
//   var inpElm = document.getElementById('userInput').value;
//   console.log(inpElm)

// }




var data = [
  {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
  "street": "Kulas Light",
  "suite": "Apt. 556",
  "city": "Gwenborough",
  "zipcode": "92998-3874",
  "geo": {
  "lat": "-37.3159",
  "lng": "81.1496"
  }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
  "name": "Romaguera-Crona",
  "catchPhrase": "Multi-layered client-server neural-net",
  "bs": "harness real-time e-markets"
  }
  },
  {
  "id": 2,
  "name": "Ervin Howell",
  "username": "Antonette",
  "email": "Shanna@melissa.tv",
  "address": {
  "street": "Victor Plains",
  "suite": "Suite 879",
  "city": "Wisokyburgh",
  "zipcode": "90566-7771",
  "geo": {
  "lat": "-43.9509",
  "lng": "-34.4618"
  }
  },
  "phone": "010-692-6593 x09125",
  "website": "anastasia.net",
  "company": {
  "name": "Deckow-Crist",
  "catchPhrase": "Proactive didactic contingency",
  "bs": "synergize scalable supply-chains"
  }
  },
  {
  "id": 3,
  "name": "Clementine Bauch",
  "username": "Samantha",
  "email": "Nathan@yesenia.net",
  "address": {
  "street": "Douglas Extension",
  "suite": "Suite 847",
  "city": "McKenziehaven",
  "zipcode": "59590-4157",
  "geo": {
  "lat": "-68.6102",
  "lng": "-47.0653"
  }
  },
  "phone": "1-463-123-4447",
  "website": "ramiro.info",
  "company": {
  "name": "Romaguera-Jacobson",
  "catchPhrase": "Face to face bifurcated interface",
  "bs": "e-enable strategic applications"
  }
  },
  {
  "id": 4,
  "name": "Patricia Lebsack",
  "username": "Karianne",
  "email": "Julianne.OConner@kory.org",
  "address": {
  "street": "Hoeger Mall",
  "suite": "Apt. 692",
  "city": "South Elvis",
  "zipcode": "53919-4257",
  "geo": {
  "lat": "29.4572",
  "lng": "-164.2990"
  }
  },
  "phone": "493-170-9623 x156",
  "website": "kale.biz",
  "company": {
  "name": "Robel-Corkery",
  "catchPhrase": "Multi-tiered zero tolerance productivity",
  "bs": "transition cutting-edge web services"
  }
  },
  {
  "id": 5,
  "name": "Chelsey Dietrich",
  "username": "Kamren",
  "email": "Lucio_Hettinger@annie.ca",
  "address": {
  "street": "Skiles Walks",
  "suite": "Suite 351",
  "city": "Roscoeview",
  "zipcode": "33263",
  "geo": {
  "lat": "-31.8129",
  "lng": "62.5342"
  }
  },
  "phone": "(254)954-1289",
  "website": "demarco.info",
  "company": {
  "name": "Keebler LLC",
  "catchPhrase": "User-centric fault-tolerant solution",
  "bs": "revolutionize end-to-end systems"
  }
  },
  {
  "id": 6,
  "name": "Mrs. Dennis Schulist",
  "username": "Leopoldo_Corkery",
  "email": "Karley_Dach@jasper.info",
  "address": {
  "street": "Norberto Crossing",
  "suite": "Apt. 950",
  "city": "South Christy",
  "zipcode": "23505-1337",
  "geo": {
  "lat": "-71.4197",
  "lng": "71.7478"
  }
  },
  "phone": "1-477-935-8478 x6430",
  "website": "ola.org",
  "company": {
  "name": "Considine-Lockman",
  "catchPhrase": "Synchronised bottom-line interface",
  "bs": "e-enable innovative applications"
  }
  },
  {
  "id": 7,
  "name": "Kurtis Weissnat",
  "username": "Elwyn.Skiles",
  "email": "Telly.Hoeger@billy.biz",
  "address": {
  "street": "Rex Trail",
  "suite": "Suite 280",
  "city": "Howemouth",
  "zipcode": "58804-1099",
  "geo": {
  "lat": "24.8918",
  "lng": "21.8984"
  }
  },
  "phone": "210.067.6132",
  "website": "elvis.io",
  "company": {
  "name": "Johns Group",
  "catchPhrase": "Configurable multimedia task-force",
  "bs": "generate enterprise e-tailers"
  }
  },
  {
  "id": 8,
  "name": "Nicholas Runolfsdottir V",
  "username": "Maxime_Nienow",
  "email": "Sherwood@rosamond.me",
  "address": {
  "street": "Ellsworth Summit",
  "suite": "Suite 729",
  "city": "Aliyaview",
  "zipcode": "45169",
  "geo": {
  "lat": "-14.3990",
  "lng": "-120.7677"
  }
  },
  "phone": "586.493.6943 x140",
  "website": "jacynthe.com",
  "company": {
  "name": "Abernathy Group",
  "catchPhrase": "Implemented secondary concept",
  "bs": "e-enable extensible e-tailers"
  }
  },
  {
  "id": 9,
  "name": "Glenna Reichert",
  "username": "Delphine",
  "email": "Chaim_McDermott@dana.io",
  "address": {
  "street": "Dayna Park",
  "suite": "Suite 449",
  "city": "Bartholomebury",
  "zipcode": "76495-3109",
  "geo": {
  "lat": "24.6463",
  "lng": "-168.8889"
  }
  },
  "phone": "(775)976-6794 x41206",
  "website": "conrad.com",
  "company": {
  "name": "Yost and Sons",
  "catchPhrase": "Switchable contextually-based project",
  "bs": "aggregate real-time technologies"
  }
  },
  {
  "id": 10,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.biz",
  "address": {
  "street": "Kattie Turnpike",
  "suite": "Suite 198",
  "city": "Lebsackbury",
  "zipcode": "31428-2261",
  "geo": {
  "lat": "-38.2386",
  "lng": "57.2232"
  }
  },
  "phone": "024-648-3804",
  "website": "ambrose.net",
  "company": {
  "name": "Hoeger LLC",
  "catchPhrase": "Centralized empowering task-force",
  "bs": "target end-to-end models"
  }
  }
]

  for(var key in data[0]){
    console.log(data[0][key])
  }

















