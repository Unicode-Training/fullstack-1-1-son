//find(callback):
// - Cơ chế giống filter
// - Kết quả trả về: Trả về phần tử đầu tiên tìm được
// const myArr = [1, 2, 3, 4, 5];
// const result = myArr.find((item) => item > 3);
// console.log(result);

//findLast
// const myArr = [1, 2, 3, 4, 5];
// const result = myArr.findLast((item) => item > 3);
// console.log(result);

//findIndex(callback): Giống find, nhưng trả về index

//findLastIndex(callback): Giống findLast, nhưng trả về index

// const myArr = [1, 2, 3, 4, 5];
// console.log(myArr);

// const result = myArr.findIndex((item) => item > 3);
// console.log(result);

//Bài tập
// const users = [
//   [1, "User 1", "user1@gmail.com"],
//   [2, "User 2", "user2@gmail.com"],
//   [3, "User 3", "user3@gmail.com"],
// ];

//Yêu cầu: Thực hiện xóa phần tử có id = 2, yêu cầu dùng các hàm ở trên
// const index = users.findIndex((user) => user[0] === 2);
// if (index !== -1) {
//   users.splice(index, 1);
// }
// console.log(users);

//Yêu cầu: Cập nhật lại tên của user có id = 2 (Dùng các hàm có sẵn)

//Yêu cầu: Thêm user mới vào mảng trên với điều kiện không được trùng email
// const newUser = [4, "User 4", "user3@gmail.com"];

//reduce(callback, initialValue)
/*
callback: có 3 tham số
- prevValue
- value
- index

initialValue: Giá trị khởi tạo
*/

// const numbers = [5, 10, 15, 20, 25, 30];
// const result = numbers.reduce((prevValue, value, index) => {
//   console.log(`prevValue: ${prevValue}`, `value: ${value}`, `index: ${index}`);
//   return value;
// });
// console.log(result);

// const total = numbers.reduce((prev, value) => {
//   console.log(prev, value);

//   return prev + value;
// }, 0);
// console.log(total);

//Bài tập:
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4", "Item 5"];
// //Lọc trùng mảng trên (Sử dụng reduce)
// const newArr = myArr.reduce((prev, value) => {
//   if (!prev.includes(value)) {
//     prev.push(value);
//   }
//   return prev;
// }, []);
// console.log(newArr);

const input = "posts,products,users";
/*
[
    [
        'posts',
        true
    ],
    [
        'products',
        true
    ],
    [
        'users',
        true
    ]
]
*/
