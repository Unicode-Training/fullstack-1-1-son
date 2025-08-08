//Phương thức xử lý Object
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   address: "Hà Nội",
// };

//Object.keys(obj) --> Trả về danh sách các keys của 1 object và lưu ở dạng mảng
// console.log(Object.keys(user));

//Ví dụ:
// const obj1 = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const obj2 = {
//   address: "Hà Nội",
//   age: 33,
// };
// const obj3 = {};
// Object.keys(obj1).forEach((key) => {
//   obj3[key] = obj1[key];
// });
// Object.keys(obj2).forEach((key) => {
//   obj3[key] = obj2[key];
// });
// console.log(obj3);

//Bài tập:
// const error = {
//   name: "Hoàng An",
// };
// //Viết hàm kiểm tra object error có dữ liệu hay không?
// const isEmpty = () => Object.keys(error).length === 0;

// console.log(isEmpty());

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   address: "Hà Nội",
// };
//Object.values(obj) --> Lấy các value của object và trả về 1 mảng
// console.log(Object.values(user));

//Object.entries(obj) --> trả về 1 mảng 2 chiều chứa cả key và value
// console.log(Object.entries(user));

//Bài tập:
// const query = {
//   keyword: "Học lập trình",
//   status: "active",
//   limit: 10,
//   page: 2,
// };
//Chuyển thành chuỗi sau:

//keyword=Học+lập+trình&status=active&limit=10&page=2
// const queryString = Object.entries(query)
//   .map((item) => {
//     return item.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(queryString);

//Chaining

// let queryString = "";
// for (let key in query) {
//   queryString += `${key}=${query[key]}&`;
// }
// queryString = queryString.slice(0, -1);
// queryString = queryString.replaceAll(" ", "+");
// console.log(queryString);

//Object.fromEntries(array) --> Chuyển mảng 2 chiều thành object
// const arr = [
//   ["name", "Hoàng An"],
//   ["email", "hoangan.web@gmail.com"],
// ];
// console.log(arr);

// const obj = Object.fromEntries(arr);
// console.log(obj);

// --> Object Literal

//Từ khóa this
// const myObj = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   address: "Hà Nội",
//   getEmail: function () {
//     console.log(this.email);
//   },
//   getInfo: function () {
//     return {
//       age: 33,
//       getAddress: () => {
//         // console.log(_this.address);
//         console.log(this);
//       },
//     };
//   },
// };
// // myObj.getEmail();
// myObj.getInfo().getAddress();

//Class --> Giống như bản thiết kế của object
// - Thuộc tính (Giống như biến)
// - Phương thức (Giống như hàm)
class User {
  constructor(nameValue, emailValue) {
    //Hàm này sẽ chạy ngay sau khi object được khởi tạo (Bằng từ khóa new)
    console.log("Hàm constructor bắt đầu chạy");

    //Định nghĩa thuộc tính
    this.name = nameValue;

    //Định nghĩa thuộc tính
    this.email = emailValue;
  }

  //Định nghĩa phương thức
  getName() {
    return this.name;
  }

  //Định nghĩa phương thức
  getEmail() {
    return this.email;
  }
}

//Tạo object từ class (instance)
const user = new User("Hoàng An", "hoangan.web@gmail.com");
console.log(user);
// console.log(user.getName());
// console.log(user.getEmail());

const customer = new User("Sơn", "son@gmail.com");
console.log(customer);
