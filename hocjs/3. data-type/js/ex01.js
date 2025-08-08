//Danh sách kiểu dữ liệu

/*
1. string
2. number
3. boolean: true, false
4. null
5. undefined
6. bigInt
7. Symbol
8. Object
*/

//Cách kiểm tra 1 biến thuộc kiểu dữ liệu nào ==> Sử dụng từ khóa typeof tenbien

//string
let fullname = "Hoàng An";
console.log(fullname, typeof fullname);

//number
let age = 33;
console.log(age, typeof age);

//boolean
let isMale = false;
console.log(isMale, typeof isMale);

//null
let job = null;
console.log(job, typeof job);

//undefined
let email;
console.log(email, typeof email);

//BigInt
// let price = BigInt(12000);
let price = 12000n;
console.log(price, typeof price);

//Symbol
let id = Symbol("id");
console.log(id, typeof id);

//Object
let customer = {
  name: "Hoàng An",
  email: "contact@unicode.vn",
};
console.log(customer, typeof customer);
