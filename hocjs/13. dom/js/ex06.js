// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");

// const handleClick1 = () => {
//   console.log("Click button 1");
// };
// btn1.addEventListener("click", handleClick1);

// const handleClick2 = () => {
//   console.log("Click button 2");
//   btn1.removeEventListener("click", handleClick1);
// };
// btn2.addEventListener("click", handleClick2);

//DOM CSS
// Sử dụng JS để can thiệp vào inline css
// JS tạo ra 1 object từ element.style

// const boxEl = document.querySelector(".box");
// boxEl.style.color = "red";
// boxEl.style.backgroundColor = "yellow"; //background-color
// boxEl.style.fontStyle = "italic"; //font-style
// boxEl.style.fontSize = "2em";

// boxEl.style = "color: red";

//Xây dựng kéo thả
// Bấm chuột xuống --> mousedown
// Kéo --> mousemove
// Thả --> mouseup
const btnEl = document.querySelector("button");
let offsetX = 0;
let offsetY = 0;
const bodyWidth = document.body.clientWidth;
btnEl.addEventListener("mousedown", (e) => {
  document.addEventListener("mousemove", handleDrag);
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", handleDrag);
});

const handleDrag = (e) => {
  btnEl.style.left = `${e.clientX - offsetX}px`;
  btnEl.style.top = `${e.clientY - offsetY}px`;

  if (e.clientX - offsetX > bodyWidth / 2) {
    document.body.style.background = "yellow";
  } else {
    document.body.style.background = null;
  }
};
