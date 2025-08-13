//Class
// - Phương thức, thuộc tính tĩnh (static)
// - Phương thức, thuộc tính không tĩnh (non-static)

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   /*************  ✨ Windsurf Command ⭐  *************/
//   /**
//    * Get user name
//    * @return {string} user name
//    */
//   /*******  b2c84064-f22d-4707-b5e3-af2909f0dcec  *******/
//   getName() {
//     return this.name;
//   }
//   getEmail() {
//     return this.email;
//   }

//   //property static
//   static message = "Hoàng An";
//   //method static
//   static getMessage() {
//     return this.message;
//   }
// }
// const user = new User("Hoàng An", "hoangan.web@gmail.com"); //instance
// console.log(user.getName());
// console.log(User.message);
// console.log(User.getMessage());

// class Person {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     console.log("constructor person");
//   }
//   getName() {
//     return this.name;
//   }
// }
// class Boy extends Person {
//   constructor(name, email, gender) {
//     console.log("constructor boy");
//     super(name, email); //Chạy constructor của cha
//     this.gender = gender;
//   }
//   getInfo() {
//     console.log(this.name);
//     console.log(this.email);
//   }
//   getGender() {
//     return this.gender;
//   }
// }
// const boy = new Boy("Hoàng An", "hoangan.web@gmail.com", 32);
// // boy.getInfo();
// // console.log(boy.getName());
// console.log(boy.getGender());

// const users = []; //instance của Array
// console.log(users);

// const user = {};
// console.log(user);

// const user2 = new User();
// console.log(user2);

//Object (Object Literal) --> Constructor --> Instance

//Object Prototype
// Array.prototype.message = "Unicode";
// Array.prototype.getMessage = function () {
//   return this.message;
// };

// const users = []; //instance của Array
// console.log(users);
// console.log(users.message);
// console.log(users.getMessage());

// Object.prototype.message = "Unicode";
// const users = [];
// console.log(users.message);
// const user = {};
// console.log(user.message);
// const fullname = "Hoàng An";
// console.log(fullname.message);
// const user = new User();
// console.log(user.message);
// const age = 32;
// console.log(age.message);
// const check = false;
// console.log(check.message);

//Setter, Getter
// class User {
//   constructor() {
//     this.data = ["Item 1", "Item 2", "Item 3"];
//   }

//   //Getter
//   get latest() {
//     return this.data[this.data.length - 1];
//   }

//   //Setter
//   set latest(value) {
//     this.data.push(value);
//   }
// }
// const user = new User();
// // user.latest = "Item 4";
// console.log(user.latest);

// const users = ["User 1", "User 2", "User 3", "User 4"];
// users.length = 2;
// console.log(users.length);

// document.body.innerHTML = `Xin chào anh em`;
// console.log(document.body.innerHTML);

// document.body.innerHTML = "Sơn";
// console.log(document.body.innerHTML);

// const users = [
//   {
//     id: 1,
//     name: "User 1",
//     email: "user1@gmail.com",
//     details: {
//       address: "Hà Nội",
//       job: "Teacher",
//       histories: [
//         {
//           a: 1,
//           b: 2,
//         },
//       ],
//     },
//   },
//   {
//     id: 2,
//     name: "User 2",
//     email: "user2@gmail.com",
//   },
//   {
//     id: 3,
//     name: "User 3",
//     email: "user3@gmail.com",
//   },
// ];
// console.log(users);
// console.log(users[0].details.histories[0].a);

const menus = [
  {
    id: 1,
    title: "Menu 1",
    parent: null,
  },
  {
    id: 2,
    title: "Menu 2",
    parent: null,
  },
  {
    id: 3,
    title: "Menu 3",
    parent: null,
  },
  {
    id: 4,
    title: "Menu 2.1",
    parent: 2,
  },
  {
    id: 5,
    title: "Menu 2.2",
    parent: 2,
  },
  {
    id: 6,
    title: "Menu 3.1",
    parent: 3,
  },
  {
    id: 7,
    title: "Menu 3.2",
    parent: 3,
  },
];

const nested = [
  {
    id: 1,
    title: "Menu 1",
  },
  {
    id: 2,
    title: "Menu 2",
    children: [
      {
        id: 4,
        title: "Menu 2.1",
      },
      {
        id: 5,
        title: "Menu 2.2",
      },
    ],
  },
  {
    id: 3,
    title: "Menu 3",
    parent: null,
    children: [
      {
        id: 6,
        title: "Menu 3.1",
      },
      {
        id: 7,
        title: "Menu 3.2",
      },
    ],
  },
];
