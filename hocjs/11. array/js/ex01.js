//Array là object
// const users = [1, 2, 3, 4, "Hello"];
// users[5] = "World";
// users[users.length] = "World";
//Lấy số lượng phần tử mảng
// console.log(users.length);

// users[users.length] = "Sơn";
// users[users.length] = "An";

// users["name"] = "Ahihi";
// console.log(users);

// console.log(users["name"]);

//Tuân thủ: Mảng -> index bắt buộc là số tuần tự

// const users = ["User 1", "User 2", "User 3", "User 4"];

//Kiểm tra 1 biến có phải là mảng hay không?
// console.log(Array.isArray(users));

//Cập nhật giá trị của 1 phần tử: Xác định được index
// users[0] = "Ahihi";
// console.log(users);

//Duyệt mảng
// for (let i = 0; i < users.length; i++) {
//   const value = users[i];
//   console.log(value);
// }

//Vòng lặp for in --> Trả về index
// for (let x in users) {
//   console.log(users[x], x);
// }

//Vòng lặp for of --> Trả về value
// for (let x of users) {
//   console.log(x);
// }

//Xóa phần tử: Không có cú pháp
// const users = ["User 1", "User 2", "User 3", "User 4"];
// users.splice(1);
// console.log(users);

// const newUsers = [];
// for (let i = 0; i < users.length; i++) {
//   if (i === 1) {
//     continue;
//   }
//   newUsers[newUsers.length] = users[i];
// }
// console.log(newUsers);

//Mảng đa chiều
// const users = [
//   ["Hoàng An", "hoangan.web@gmail.com"],
//   ["Sơn", "son@gmail.com"],
//   "Ahihi",
//   false,
//   null,
// ];
// console.log(users);
// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//   if (Array.isArray(user)) {
//     for (let j = 0; j < users.length; j++) {
//       console.log(user[j]);
//     }
//   } else {
//     console.log(user);
//   }
// }
