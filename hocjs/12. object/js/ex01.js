//Kiểu dữ liệu object là gốc của js
//Object ở trong js thường được dùng để đặc tả 1 thông tin cụ thể
//Ví dụ: thông tin sản phẩm, thông tin người dùng

//Khai báo object
const user = {
  //key: value,
  name: "Hoàng An",
  email: "hoangan@gmail.com",
};

//Thêm key vào object
user.address = "Hà Nội";
user.age = 33;

//Truy cập vào key
// console.log(user.name);
// console.log(user["email"]);

//Cập nhật value của key
user.email = "contact@unicode.vn";

//Xóa key
delete user.email;

console.log(user);

//Duyệt tất cả key
for (let key in user) {
  console.log(key, user[key]);
}
