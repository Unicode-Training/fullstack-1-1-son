//Attribute (Thuộc tính)
//Cú pháp: tenelement.tenthuoctinh

// const aEl = document.querySelector("a");
// console.log(aEl.href);
// console.log(aEl.title);
// console.log(aEl.target);
// console.log(aEl.id);
// console.log(aEl.className);

// aEl.href = "https://online.unicode.vn";
// aEl.className = "ahihi";

const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const imagePreviewEl = document.querySelector(".image-preview");
btnEl.addEventListener("click", () => {
  const value = inputEl.value;
  const html = `<img width="200" src="${value}"/>`;
  imagePreviewEl.innerHTML += html;

  inputEl.value = "";
});
