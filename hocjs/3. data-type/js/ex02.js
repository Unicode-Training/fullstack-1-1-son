//1. Chuyển từ kiểu string sang number
//Lưu ý: Nếu ép kiểu thất bại --> trả về giá trị NaN
// let a = "12a";
// let b = 5;
// // a = +a;
// a = Number(a);
// let c = a + b;
// console.log(c);

// let a = "10";
// a = a + 0;
// console.log(a, typeof a);

// let a = "10";
// let b = "20";
// let c = +a + +b;
// console.log(c);

//2. Chuyển từ kiểu number sang string
// let a = 10;
// // a = a + "";
// a = String(a);
// console.log(a, typeof a);

//3. Chuyển các kiểu dữ liệu khác về boolean
/*
Những giá trị sau sẽ chuyển về false: 0, "", null, undefined, NaN, false
*/
let a = Infinity;
let check = Boolean(a);
console.log(check);
