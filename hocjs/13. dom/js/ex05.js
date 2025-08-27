// const inputEl = document.querySelector("input");
// const btnEl = document.querySelector("button");

// btnEl.addEventListener("click", (e) => {
//   //Chứa thông tin của sự kiện
//   //e = event object
//   //Đối tượng chứa thông tin của 1 sự kiện
//   //Mỗi sự kiện sẽ có thông tin khác nhau
//   //Mỗi thẻ html sẽ có sự kiện khác nhau
//   //   console.log(e);
//   //   console.log(e.target);
//   //   btnEl.innerText = "Clicked";
//   //   console.dir(e.target);
//   //   e.target.innerText = "Clicked";
// });

// inputEl.addEventListener("keyup", (e) => {
//   console.log(e);
// });

//1 số thông tin thường gặp
// - keyup, keydown --> e.key --> Lấy phím mà người dùng vừa bấm
// - offsetX, offsetY, clientX, clientY --> Thường áp dụng với các sự kiện liên quan đến chuột (click, mousedown, mouseup, mousemove, mouseover, mouseout,...)
// - which: Thường liên quan đến chuột (which = 1 --> chuột trái, which = 2 --> Con lăn ở giữa, which = 3 --> chuột phái)

//Phân biệt offsetX, offsetY (Tọa độ)

//Phân biệt clientX, clientY

//target: Trả về element mà người dùng tác động sự kiện lên (Fire Event)
// const ulEl = document.querySelector("ul");
// btnEl.addEventListener("click", () => {
//   const value = inputEl.value;
//   ulEl.innerHTML += `<li>${value}</li>`;
// });
// ulEl.addEventListener("click", (e) => {
//   if (e.target.localName === "li") {
//     e.target.style = "color: red";
//   }
// });

//e.preventDefault() --> Ngăn hành động mặc của thẻ html
// - Khi click vào thẻ a --> Chuyển hướng tới url trong href
// - Khi submit form --> Reload trang
// - Chuột phải lên trình duyệt --> Hiển thị menu

//e.stopPropagation() --> Chống nổi bọt sự kiện từ phần tử lên phần tử cha
// const aEl = document.querySelector("a");
// aEl.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(aEl.href);
// });

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit");
});

const boxEl = document.querySelector(".box");
const btnEl = document.querySelector("button");
boxEl.addEventListener("click", () => {
  console.log("Box clicked");
});
btnEl.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Button clicked");
});
