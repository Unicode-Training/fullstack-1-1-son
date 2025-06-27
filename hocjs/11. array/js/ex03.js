//Bài 1:
// const numbers = [1, 2, [3, 4, [5, 6], [7, [8, [[9]]]]]];
// console.log(numbers);
//Yêu cầu:
// - Làm phẳng mảng (1 chiều): [1,2,3,4,5,6,7]
// - Không được dùng hàm flat có sẵn của array
// console.log(numbers.flat(Infinity));
// const flatArray = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       newArr.push(arr[i]);
//       console.log(arr[i]);
//     } else {
//       const a = flatArray(arr[i]);
//       //   console.log(a);
//       //   newArr = newArr.concat(a);
//     }
//   }
//   return newArr;
// };

// const result = flatArray(numbers);
// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const size = 3;
// //Chunk array --> [[1,2,3], [4,5,6], [7,8,9], [10]]
// const newArr = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (i % size === 0) {
//     newArr.push(numbers.slice(i, i + size));
//   }
// }
// console.log(newArr);

// const arr1 = [1, 5, 2, 9, 0];
// const arr2 = [3, 2, 0, 6];
// //Tìm giao giữa 2 mảng: [2, 0]
// //Gợi ý: push, includes, forEach
// const newArr = [];
// arr1.forEach(function (value) {
//   if (arr2.includes(value)) {
//     newArr.push(value);
//   }
// });
// console.log(newArr);

const users = [
  [1, "User 1", "user1@gmail.com"],
  [2, "User 2", "user2@gmail.com"],
  [3, "User 3", "user3@gmail.com"],
];
console.log(users);
//Viết hàm lấy thông tin 1 user thông qua id
//Yêu cầu: Dùng hàm find()
const getUser = (id) => {
  //Logic
};
console.log(getUser(2)); //[2, "User 2", "user2@gmail.com"]
