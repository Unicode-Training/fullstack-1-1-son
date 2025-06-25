//Các phương thức xử lý mảng
// console.log(Array.prototype);

const users = ["User 1", "User 2", "User 3", "User 4", "User 5"];
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
