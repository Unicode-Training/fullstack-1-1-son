//Destructuring

// const user = {
//   name: "An",
//   email: "an@gmail.com",
//   address: "Hà Nội",
//   age: 33,
// };

// const { name: fullname, age = 20, ...myObj } = user; //rest
// console.log(fullname, age);
// console.log(myObj);

// const users = ["An", "an@mail.com", 33, "HN"];
// const [fullname, email, , address] = users;
// console.log(fullname, email, address);
// const [fullname, ...myArr] = users;
// console.log(fullname);
// console.log(myArr);

//Spread
// const oldObj = {
//   name: "An",
//   email: "an@gmail.com",
// };
// const newObj = {
//   address: "HN",
//   age: 33,
//   ...oldObj,
// };
// console.log(newObj);

// const oldArr = ["An", "an@gmail.com"];
// const newArr = ["HN", ...oldArr, 33];
// console.log(newArr);

// const sum = (a, b) => a + b;
// const values = [10, 20];
// console.log(sum(...values));

// const state = Object.freeze({
//   message: "Hello Sơn",
//   products: ["Product 1", "Product 2"],
//   count: 1,
// });

// const newState = { ...state, products: [...state.products, "Product 3"] };
// console.log(newState);
