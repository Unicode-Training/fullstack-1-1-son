// let age = -29;
// if (age > 30) {
//   console.log("Đủ tuổi");
// } else {
//   console.log("Chưa đủ tuổi");
// }

// if (age >= 0) {
//   if (age < 5) {
//     console.log("Trẻ con");
//   } else if (age < 18) {
//     console.log("Đi học");
//   } else if (age < 30) {
//     console.log("Trưởng thành");
//   } else if (age < 40) {
//     console.log("Thanh niên");
//   } else {
//     console.log("Trung niên");
//   }
// } else {
//   console.log("Không thỏa mãn điều kiện");
// }

/*
Tính lương thực nhận của 1 nhân viên sau khi trừ thuế

- Nếu lương <= 5tr --> 0%
- Nếu lương > 5tr và <= 10tr --> 3%
- Nếu lương > 10tr và <= 20tr --> 5%
- Nếu lương > 20tr --> 10%
*/
// let salary = prompt("Vui lòng nhập lương");
// console.log(salary);

// let salary = -10000000;
// let tax;
// let income;
// if (salary > 0) {
//   if (salary <= 5000000) {
//     tax = 0;
//   } else if (salary <= 10000000) {
//     tax = 3;
//   } else if (salary <= 15000000) {
//     tax = 5;
//   } else {
//     tax = 10;
//   }
//   income = salary - (salary * tax) / 100;
//   console.log(`Lương thực nhận: ${income}`);
// } else {
//   console.log(`Không hợp lệ`);
// }

/*
Bài tập: Tính tiền cước taxi từ số km cho trước

- Số km <= 1 giá --> 15000 đ
- Số km > 1 và <= 5 giá --> 13500 đ
- Số km > 5 --> 11000
- Số km > 120 --> Giảm thêm 10% trên tổng số tiền

Ví dụ: 

- km = 6 --> Số tiền phải trả = 1 * 15000 + 4 * 13500 + 1 * 11000 = 80000

- km = 4 --> Số tiền phải trả = 1 * 15000 + 3 * 13500 = 55500

- km = 130 --> Số tiền phải trả = (1 * 15000 + 4 * 13500 + 125 * 11000) - 10%
*/

let km = 4;
