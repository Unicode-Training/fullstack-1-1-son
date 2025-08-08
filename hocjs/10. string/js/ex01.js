//String: Chuỗi

//Khai báo chuỗi
// let fullname = "Hoàng An";
// console.log(fullname);

// //Kiểm tra kiểu chuỗi
// console.log(typeof fullname);

// //Lấy độ dài của chuỗi
// console.log(fullname.length);

// //Lấy từng ký tự
// for (let i = 0; i < fullname.length; i++) {
//   console.log(fullname[i]);
// }

//Các hàm xử lý chuỗi

//1. charAt(index): Lấy ra ký tự theo index (Tương tự tenbien[index])
// let str = "Học JavaScript không khó";
// console.log(str.charAt(0));

//2. charCodeAt(index): Lấy ra ký tự theo index sau đó chuyển về mã ASCII
// let str = "Học JavaScript không khó";
// console.log(str.charCodeAt(0));

//3. indexOf(subString): Tìm chuỗi subString trong chuỗi cha và trả về index đầu tiên tìm được, nếu không tìm thấy trả về -1

// let str = "Học   JavaScript không khó JavaScript";
// console.log(str.indexOf("JavaScript"));

//4. lastIndexOf(subString): Tìm chuỗi subString trong chuỗi cha và trả về index cuối cùng tìm được, nếu không tìm thấy trả về -1

// let str = "Học JavaScript không khó JavaScript";
// console.log(str.lastIndexOf("JavaScript"));

//5. includes(subString): Tìm chuỗi con nhưng trả về true / false
// let str = "Học JavaScript không khó JavaScript";
// console.log(str.includes("JavaScript"));

//6. slice(start, end): Cắt chuỗi từ start đến end-1
// let str = "Học JavaScript không khó JavaScript";
// console.log(str.slice(1, 5));
// console.log(str.slice(1));
// console.log(str.slice(-5));

//7. replace(oldStr, newStr): Thay thế chuỗi đầu tiên tìm được
// let str = "Học JavaScript không khó JavaScript";
// console.log(str.replace("JavaScript", "PHP"));

//8. relaceAll(oldStr, newStr): Thay thế tất cả
// let str = "Học JavaScript không khó JavaScript";
// console.log(str.replaceAll("JavaScript", "PHP"));

//9. repeat(n): Lặp chuỗi n lần
// let str = "*";
// console.log(str.repeat(10));

//10. trim(): Xóa khoảng trắng đầu và cuối chuỗi
// let str = "   HOÀNG AN   ";
// console.log(str);
// console.log(str.trim());
// console.log(str);

//11. toLowerCase(): Chuyển chuỗi thành chữ thường
// let str = "Học JavaScript không khó JavaScript";
// console.log(str.toLowerCase());

//12. toUpperCase(): Chuyển chuỗi thành chữ hoa
// let str = "Học JavaScript không khó JavaScript";
// console.log(str.toUpperCase());

//13. startsWith(subStr): Kiểm tra chuỗi con có nằm ở đầu chuỗi cha hay không?
// let pathname = "/khoa-hoc/php";
// console.log(pathname.startsWith("/khoa-hoc"));

//14. endsWith(subStr): Kiểm tra chuỗi con có nằm ở cuối chuỗi không?
// let pathname = "/khoa-hoc/php/database.html";
// console.log(pathname.endsWith(".html"));

//15. split(separator): Chuyển chuỗi thanh mảng

//Bài 1: Lấy username của 1 email bất kỳ
// let email = "hoangan.web@gmail.com";
// let username = email.slice(0, email.indexOf("@"));
// console.log(username);

//Bài 2: Kiểm tra 1 chuỗi xem tất cả các ký tự có viết hoa không?
// let fullname = "TẠ HOÀNG AN";
// console.log(fullname === fullname.toUpperCase());

//Bài 3: Chuyển ký tự đầu của mỗi từ thành chữ hoa
// let fullname = "nguyễn sơn   tạ hoàng an"; //Tạ Hoàng An
// fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);
// for (let i = 0; i < fullname.length; i++) {
//   const char = fullname.charAt(i);
//   const charNext = fullname.charAt(i + 1);
//   if (char === " " && charNext !== " ") {
//     const position = i + 1;
//     fullname =
//       fullname.slice(0, position) +
//       fullname.charAt(position).toUpperCase() +
//       fullname.slice(position + 1);
//   }
// }
// console.log(fullname);

let content = `excepturi sunt, nulla molestiae ahihi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet qui sit, esse omnis excepturi sunt, nulla molestiae aperiam voluptatibus reiciendis enim quo odio, saepe fuga possimus ipsa aut dicta facilis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet qui sit, esse omnis excepturi sunt, nulla molestiae aperiam voluptatibus reiciendis enim quo odio, saepe fuga possimus ipsa aut dicta facilis!`;
let keyword = " ";
let position = content.toLowerCase().indexOf(keyword.toLowerCase());
let newContent = "";
let count = 0;
while (position !== -1) {
  newContent +=
    content.slice(0, position) +
    "<span>" +
    content.slice(position, position + keyword.length) +
    "</span>";
  content = content.slice(position + keyword.length); //Cắt bỏ đoạn đầu
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
  count++;
}

newContent += content; //Nối đoạn content còn thiếu

document.body.innerHTML = `
<p>${newContent}</p>
<p>Đã tìm thấy ${count} kết quả</p>
`;
