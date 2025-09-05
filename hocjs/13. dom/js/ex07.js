//DOM Navigation (Điều hướng): Tạo ra 1 element từ 1 element khác (cha, con, anh em)
// element.parentElement --> Chọn phần tử cha
// element.children --> Chọn danh sách các phần tử con gần nhất
// element.nextElementSibling --> Chọn phần tử liền sau
// element.previousElementSibling --> Chọn phần tử liền trước

// const h2List = document.querySelectorAll("h2");
// h2List.forEach((h2) => {
//   h2.addEventListener("click", () => {
//     // console.log(h2.parentElement.parentElement);
//     h2.parentElement.style.border = `1px solid red`;
//   });
// });

// const menuEl = document.querySelector(".menu");
// //Lấy tất các phần tử con gần nhất của .menu
// console.log(menuEl.children[1].children[1].children[0].innerText);

//classList.contains('ten-class')

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
nextBtn.addEventListener("click", () => {
  //Lấy phần tử đang active
  const activeItem = document.querySelector(".products .active");
  //Lấy phần tử liền sau
  const nextItem = activeItem.nextElementSibling;

  if (nextItem) {
    nextItem.classList.add("active");
    activeItem.classList.remove("active");
  } else {
    const firstItem = document.querySelector(".products h2:first-child");
    const lastItem = document.querySelector(".products h2:last-child");
    firstItem.classList.add("active");
    lastItem.classList.remove("active");
  }
});
prevBtn.addEventListener("click", () => {
  const activeItem = document.querySelector(".products .active");
  const prevItem = activeItem.previousElementSibling;
  if (prevItem) {
    prevItem.classList.add("active");
    activeItem.classList.remove("active");
  } else {
    const firstItem = document.querySelector(".products h2:first-child");
    const lastItem = document.querySelector(".products h2:last-child");
    firstItem.classList.remove("active");
    lastItem.classList.add("active");
  }
});
