// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//Bài tập: Tính giá trị biểu thức sau
// S = 1 + 1*2 + 1*2*3 + ... + 1*2*3*4...*n
let n = 5;
let tmp = 1;
let total = 0;
for (let i = 1; i <= n; i++) {
  tmp *= i;
  total += tmp;
}
console.log(total);
