//classList: Object của DOM cho phép thao tác với từng class trong phần tử html
const boxEl = document.querySelector(".box");
// console.log(boxEl.classList);

//Thêm class mới
// boxEl.classList.add("block-4", "block-5");

//Xóa class
// boxEl.classList.remove("block-3", "block-2");

//Kiểm tra class tồn tại
// console.log(boxEl.classList.contains("block-3"));

//Toggle class
// Kiểm tra nếu class không tồn tại --> Thêm mới
// Nếu class tồn tại --> xóa bỏ
boxEl.classList.toggle("active");
// boxEl.classList.toggle("active");

//Thay thế class
boxEl.classList.replace("block-1", "ahihi");

//Event Object
