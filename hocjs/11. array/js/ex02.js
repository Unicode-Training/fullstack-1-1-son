//Các phương thức xử lý mảng
// console.log(Array.prototype);

// const users = ["User 1", "User 2", "User 3", "User 4", "User 5"];
//1. length --> Lấy số lượng phần tử
// console.log(users.length);
// users.length = 3;
// console.log(users);

//2. concat(array1, array2, array3) --> Nối các mảng thành 1 mảng
//Lưu ý: Hàm này không thay đổi mảng ban đầu
// const arr1 = [1, 2, 3, 4];
// const arr2 = ["Item 1", "Item 2"];
// const newArr = users.concat(arr1, arr2);
// console.log(newArr);
// const newArr = users.concat("User 6", "User 7");
// console.log(newArr);

//3. fill(value) --> Thay thế các phần tử thành 1 giá trị
//Lưu ý: Thay đổi mảng ban đầu
// const newArr = users.fill("Sơn");
// console.log(newArr);
// console.log(users);

//4. indexOf(value) --> Tìm phần tử và trả về index đầu tiên tìm được
// console.log(users.indexOf("User 2"));

//5. lastIndexOf(value) --> Tìm phần tử và trả về index cuối cùng tìm được
// console.log(users.lastIndexOf("User 21"));

//6. includes(value) ---> Tìm phần tử và trả về true / false
// console.log(users.includes("User 21"));

//7. slice(start, end) --> Cắt mảng từ start đến end-1
// console.log(users.slice(1, 3));
// console.log(users.slice(1));
// console.log(users.slice(-2));

//8. splice(start, count, ...newValue) --> Xóa phần tử
// console.log(users);
// const result = users.splice(1, 2, "Item 1", "Item 2", "Item 3");
// console.log(users);
// console.log(result);

//9. push(value1, value2, ...) --> Thêm các phần tử vào cuối mảng
// - Thay đổi mảng ban đầu
// - Trả về số lượng phần tử sau khi thêm
// users.push("Item 1", "Item 2", "Item 3");
// console.log(users);
// console.log(count);
// console.log(users.length);

//10. unshift(value1, value2, ...) --> Thêm vào các phần tử đầu mảng
// const count = users.unshift("Item 1", "Item 2", "Item 3");
// console.log(users);
// console.log(count);

//11. pop() --> Xóa phần tử cuối mảng và trả về phần tử vừa xóa
// const value = users.pop();
// console.log(users);
// console.log(value);

//12. shift() --> Xóa phần tử đầu mảng và trả về phần tử vừa xóa
// const value = users.shift();
// console.log(users);
// console.log(value);

//13. sort() --> Sắp xếp mảng theo thứ tự tăng dần (Sắp xếp theo chuỗi)
// const myArr = ["Dung", "Son", "An"];
// myArr.sort();
// console.log(myArr);

//Lưu ý: Mặc định nếu không có compareFunc --> Hàm sort sẽ tự động chuyển về chuỗi để so sánh theo ký tự Unicode

// const numbers = [4, 1, 8, 10, 5, 100];
// numbers.sort(function (a, b) {
//   //a --> Phần tử sau
//   //b --> Phần tử trước
//   //Nếu hàm này return về số âm --> Đổi chỗ a và b

//   return a - b;
// });
// numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(numbers);

// const myArr = ["tung", "dat", "an", "duong"];
// myArr.sort((a, b) => a.length - b.length);
// console.log(myArr);

//14. reverse() --> Đảo ngược mảng
// const users = ["User 1", "User 2", "User 3", "User 4"];
// const newArr = users.reverse();
// newArr[0] = "Ahihi";
// console.log(users);
// console.log(newArr);

// const a = ["Item 1", "Item 2"];
// const b = a;
// b[0] = "Sơn";
// console.log(a);
// console.log(b);

// const func1 = () => {
//   console.log("A");
// };
// const func2 = func1;
// func2();

// const a = ["Item 1", "Item 2"];
// const b = a.slice(0);
// b[0] = "Sơn";
// console.log(a);
// console.log(b);

// const a = [
//   ["User 1", 12],
//   ["User 2", 13],
//   ["User 3", 13],
// ];
// const b = a.slice(0); //Shallow copy
// b[0] = "Sơn";
// b[1][0] = "An";
// console.log(a);
// console.log(b);
//Deep copy

//Phương thức lặp trong mảng

//15. forEach(callback)
// - Duyệt qua các phần tử của mảng
// - Trả về value và index trong callback
// const users = ["User 1", "User 2", "User 3", "User 4"];
// users.forEach((user, index) => {
//   console.log(user, index);
// });

//16. map(callback)
// - Duyệt qua phần tử phần tử và trả về value, index trong callback
// - Trả về 1 mảng mới có số lượng phần tử bằng mảng ban đầu
// - Giá trị từng phần tử của mảng mới là return của callback
// const users = ["User 1", "User 2", "User 3", "User 4"];
// const newArr = users.map((user, index) => {
//   console.log(user, index);
//   return `${index + 1} - ${user}`;
// });
// console.log(newArr);

// const numbers = [1, 2, 3, 4, 5];
// const newArr = numbers.map((number, index) => {
//   if (number % 2 === 0) {
//     return number * 2;
//   }
//   return number;
// });
// console.log(newArr);

//17. filter(callback)
// - Duyệt qua phần tử phần tử và trả về value, index trong callback
// - Trả về 1 mảng mới
// - Phần tử của mảng mới phụ thuộc vào return của callback (Nếu là truthy)
// const myArr = [1, 2, 3, 4, 5, 6, 7];
// const newArr = myArr.filter((value, index) => {
//   //   console.log(value, index);
//   //   return index;
//   return value % 2 === 0;
// });
// console.log(newArr);
