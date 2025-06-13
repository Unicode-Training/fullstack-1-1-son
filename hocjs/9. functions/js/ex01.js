// function showMessage(msg, status = "success") {
//   console.log("Học js không khó");
//   console.log(msg);
//   console.log(status);
// }

// showMessage("Unicode", "error");

// function getTotal(a, b) {
//   const total = a + b;
//   //   console.log(total);
//   return total;
// }

// const result = getTotal(10, 20);
// console.log(result);

//Viết hàm thực hiện phép chia
// - Kiểm tra số bị chia xem có khác 0 hay không?
// - Nếu vi phạm trả về false
// - Nếu không vi phạm trả về thương
// function division(a, b) {
//   if (b) {
//     return a / b;
//   }
//   return false;
// }
// console.log(division(10, 0));

//Tìm giá trị lớn nhất
// - Kiểm tra 4 tham số a, b, c, d phải là số
// - Nếu vi phạm --> trả về false
// - Nếu không vi phạm --> trả về tham số có giá trị lớn nhất
// function getMax(a, b, c, d) {
//   if (
//     typeof a !== "number" ||
//     typeof b !== "number" ||
//     typeof c !== "number" ||
//     typeof d !== "number"
//   ) {
//     return false;
//   }
//   let max = a;
//   if (max < b) {
//     max = b;
//   }
//   if (max < c) {
//     max = c;
//   }
//   if (max < d) {
//     max = d;
//   }
//   return max;
// }
// console.log(getMax(1, "a", -1, 3));

// const myFunction = function () {
//   console.log("Do something");
// };

// if (typeof myFunction === "function") {
//   myFunction();
// }

// const display = function (a, b) {
//   console.log(a);
//   //   console.log(b);
//   if (typeof b === "function") {
//     b();
//   }
// };
// const handler = function (title) {
//   console.log("Sơn", title);
// };
// display(1, function () {
//   handler("A");
// });

// const doSomething = (a, b) => {
//   console.log("Ok chưa?");
//   console.log(a);
//   console.log(b);
// };

// doSomething("A", "B");

// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// const display = (...args) => {
//   //   console.log(a);
//   //   console.log(b);
//   console.log(args);
// };
// display(1, 2, 3, 4, 5, 6, 7, 8, 9);

// let a = 10; //Biến toàn cục

// const display = (b) => {
//   let c = 20; // Biến cục bộ của hàm display
//   //b là tham số của hàm display
//   //   console.log(`a = ${a}`);
//   //   console.log(`b = ${b}`);
//   //   console.log(`c = ${c}`);
//   const showMessage = () => {
//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
//     console.log(`c = ${c}`);
//   };
//   showMessage();
// };
// display(30);

// const display = () => {
//   let a = 10;
//   const showMessage = () => {
//     console.log("Show Message");
//     console.log(a);
//   };
//   return showMessage;
// };

// //Muốn gọi hàm showMessage ở ngoài hàm display
// display()();

// const showNumber = (n) => {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// showNumber(10);

//Tìm số fibonacci thứ n
// const fibonacci = (n) => {
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };
// console.log(fibonacci(7));

// const getTotal = (n) => {};
// console.log(getTotal(10));
//Tính tổng các số chẵn từ 1 đến n (Không dùng vòng lặp, dùng đệ quy)

const a = {
  name: "User 1",
  email: "user1@gmail.com",
  meta: {
    a: 10,
  },
};
const b = {
  name: "User 1",
  email: "user1@gmail.com",
  meta: {
    a: 10,
  },
};
console.log(a === b);

console.log(String.prototype);
