//Clone array
// const arr1 = ["User 1", "User 2", "User 3"];

//Các hình thức copy
//1. shallow copy --> copy nông (Cấp bên ngoài)
// - Sử dụng các phương thức xử lý mảng sẽ trả về mảng mới: slice, map, filter, reduce,...
// - Spread Operator
// const arr2 = arr1.slice(0);
// const arr2 = [...arr1];
// - Xử lý thủ công bằng vòng lặp
// const arr2 = [];
// for (let index in arr1) {
//   arr2.push(arr1[index]);
// }
// arr2[0] = "Sơn";

// console.log(arr1);
// console.log(arr2);

//Copy sâu (Deep copy)
// - Dùng đệ quy copy nông
// - Chuyển mảng thành chuỗi json, sau đó chuyển ngược lại (Nếu phần tử mảng có hàm, không copy được hàm)
// const arr1 = [
//   [
//     "User 1",
//     "user1@gmail.com",
//     () => {
//       console.log("Hello");
//     },
//   ],
//   ["User 2", "user2@gmail.com"],
//   "Ahihi",
//   ["User 3", "user3@gmail.com"],
// ];
// const arr2 = arr1.slice(0);
// const json = JSON.stringify(arr1); //Chuyển mảng thành json
// const arr2 = JSON.parse(json);
// arr2[0][0] = "Sơn";

// console.log(arr1);
// console.log(arr2);

// function cloneArray(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       result.push(arr[i]);
//     } else {
//       result.push(cloneArray(arr[i]));
//     }
//   }
//   return result;
// }
// const arr2 = cloneArray(arr1);
// arr2[0][0] = "Sơn";
// console.log(arr1);

// console.log(arr2);

//Array.isArray(bien-can-kiem-tra)

//Array-Like Object: Object giống array
// function something() {
//   //   console.log(arguments);
//   //   console.log(Array.isArray(arguments));
//   //   for (let i = 0; i < arguments.length; i++) {
//   //     console.log(arguments[i]);
//   //   }
//   const arr = Array.from(arguments);
//   console.log(arr);
//   console.log(Array.isArray(arr));
// }

// something(1, 2, 3, 4, 5);

// const something = (...args) => {
//   console.log(args);
// };
// something(1, 2, 3, 4, 5);

const pList = document.querySelectorAll("p");
console.log(pList);
console.log(Array.isArray(pList));
// Array.from(pList).sort();
console.log(Array.from(pList));
