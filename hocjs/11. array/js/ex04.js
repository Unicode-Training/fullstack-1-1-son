//filter(callback)
/*
- Duyệt qua các phần tử của mảng ban đầu
- Trả về mảng mới nếu callback return về giá trị truthy
*/
// const numbers = [5, 2, 1, 9, 4];
// const newArr = numbers.filter((value, index) => {
//   //   console.log(value, index);
//   return value % 2 === 0;
// });
// console.log(newArr);

// const users = [
//   "Nguyen Duy Son",
//   "Dang Ngoc Son",
//   "Ta Hoang An",
//   "Nguyen Tuan Anh",
// ];
// let keyword = "son";
// //Yêu cầu: Dùng filter để lọc ra các user có chứa từ khóa keyword
// /*
// [
// "Nguyen Duy Son",
// "Dang Ngoc Son",
// ]
// */
// const newArr = users.filter((user) =>
//   user.toLowerCase().includes(keyword.toLowerCase())
// );
// console.log(newArr);

//some():
// - Duyệt qua các phần tử và trả về value, index
// - Kiểm tra nếu có ít nhất 1 giá trị đúng --> some sẽ trả về true

// const numbers = [1, 11, 3, 5, 7, 9];
// //Kiểm tra mảng numbers xem có số chẵn hay không?
// const result = numbers.some((number) => {
//   console.log(number);

//   return number % 2 === 0;
// });
// console.log(result);

//every(): Tất cả đều đúng thì mới đúng
// const numbers = [1, 3, 5, 7, 9, 2];
// const result = numbers.every((number) => {
//   return number % 2 !== 0;
// });
// console.log(result);

//So sánh mảng
const a = [1, "An", true, [2, [3]]];
const b = [1, "An", true, [2, [3]]];

const compareArray = (arr1, arr2) => {
  //Kiểm tra length của 2 mảng xem có bằng nhau hay không?
  if (arr1.length !== arr2.length) {
    return false;
  }
  const flat1 = arr1.flat(Infinity);
  const flat2 = arr2.flat(Infinity);
  return arr1.every((item, index) => {
    return flat1[index] === flat2[index];
  });
};

console.log(compareArray(a, b));
