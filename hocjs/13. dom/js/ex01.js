//DOM = Document Object Model
// Mã HTML trả về từ Server --> Trình duyệt tạo 1 object --> Dễ dàng can thiệp, chỉnh sửa lại html trước hiển thị cho người dùng xem

// Tạo sự tương tác giữa người dùng lên các thẻ html --> Thay đổi nó

// console.log(document);

//Re-render: Cập nhật lại giao diện
// const btn = document.querySelector("button");
// const h1 = document.querySelector("h1");
// btn.addEventListener("click", () => {
//   h1.innerText = "Xin chào anh em";
// });

//Các cách truy cập vào 1 phần tử html trên cây DOM

//1. Truy cập vào phần tử thông qua id
// document.getElementById('ten-id');
// - Trả về object nếu tìm thấy (Tìm theo id đầu tiên)
// - Trả về null nếu không tìm thấy
// const title = document.getElementById("title");
// console.log(title);

//2. Truy cập thông qua class
// document.getElementsByClassName('ten-class)
// - Trả về danh sách chứa các phần tử khớp với class
// - Nếu không khớp trả về danh sách rỗng
// const titleList = document.getElementsByClassName("sub-title1");
// console.log(titleList);

//3. Truy cập thông qua tagname
//document.getElementsByTagName('ten-tagname')
// - Trả về danh sách chứa các phần tử khớp với tagname
// - Nếu không khớp trả về danh sách rỗng
// const titleList = document.getElementsByTagName("h2");
// console.log(titleList);

//4. Truy cập thông qua css selector (Khớp phần tử đầu tiên)
//document.querySelector(css-selector)
// const title = document.querySelector(".sub-title");
// console.log(title);

//5. ruy cập thông qua css selector (Khớp tất cả phần tử)
//document.querySelectorAll(css-selector)
// const titleList = document.querySelectorAll(".sub-title");
// console.log(titleList);

// titleList.forEach((title, index) => {
//   console.log(title);
// });
// for (let index in titleList) {
//   console.log(index);
// }

//Event: Những hành động mà người dùng tác động lên các thẻ html
// Mặc định: JS có sẵn các sự kiện, việc ở lập trình viên là gán sự kiện với phần tử html sau đó xử lý logic

//Để gán sự kiện cho 1 phần tử html: Dùng hàm
// element.addEventListener(ten-su-kien, callback)

// const btn = document.querySelector(".btn");
// if (btn) {
//   btn.addEventListener("dblclick", () => {
//     console.log("Clicked");
//   });
// }

// const input = document.querySelector("input");
// input.addEventListener("keydown", (e) => {
//   console.log("User vừa nhập: ", e.key);
//   //   console.log("Giá trị nhận được: ", input.value);
// });

// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); //Ngăn hành động mặc định của thẻ html
//   const input = document.querySelector("input");
//   console.log("Submit", input.value);
// });

// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   alert("Không được bấm chuột phải");
//   console.log("Bạn vừa bấm chuột phải");
// });

// const input = document.querySelector("input");
// input.addEventListener("paste", (e) => {
//   const clipboardData = e.clipboardData || window.clipboardData;
//   const pastedData = clipboardData.getData("Text");
//   if (pastedData.includes("unicode")) {
//     e.preventDefault();
//   }
// });

// const box = document.querySelector(".box");
// const btn = document.querySelector("button");
// console.log(box.innerHTML);
// console.log(box.innerText);
// console.log(box.textContent);
// console.log(box.outerHTML);

// box.innerHTML = `<b>Unicode</b>`;
// box.innerText = `<b>Unicode</b>`;
// box.textContent = `<b>Unicode</b>`;
// box.outerHTML = `<b>Unicode</b>`;

// box.remove();
// let content = box.innerHTML;

// btn.addEventListener("click", () => {
//   if (box.innerHTML) {
//     box.innerHTML = "";
//     btn.innerText = "Hiện";
//   } else {
//     box.innerHTML = content;
//     btn.innerText = "Ẩn";
//   }
// });

const span = document.querySelector(".counter span");
const plusBtn = document.querySelector(".counter .plus");
const minusBtn = document.querySelector(".counter .minus");

plusBtn.addEventListener("click", () => {
  //   span.innerText++;
  let current = span.innerText;
  current++;
  span.innerText = current;
});
minusBtn.addEventListener("click", () => {
  span.innerText--;
});
