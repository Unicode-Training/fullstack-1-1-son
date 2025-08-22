//Chọn các element
const titleEl = document.querySelector(".title");
const addBtn = document.querySelector(".add-btn");
const todoListEl = document.querySelector(".todo-list");
const errorEl = document.querySelector(".error");
//Lắng nghe sự kiện
let index = 0;
addBtn.addEventListener("click", () => {
  const title = titleEl.value;
  errorEl.innerText = "";
  if (!title) {
    errorEl.innerText = `Vui lòng nhập tên công việc`;
    return;
  }
  const todoHtml = `
  <li class="todo-${index}">
    <input type="checkbox" />
    <span>${title}</span>
    <button class="remove-btn">&times;</button>
  </li>
  `;
  todoListEl.innerHTML += todoHtml;
  titleEl.value = "";
  index++;

  //Lắng nghe sự kiện khi người dùng click vào từng nút xóa
  const removeBtnList = document.querySelectorAll(".remove-btn");
  removeBtnList.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (!confirm("Bạn có chắc chắn?")) {
        return;
      }
      //Xử lý
      const todoEl = document.querySelector(`.todo-${index}`);
      todoEl.remove();
    });
  });
  //   for (let i = 0; i < removeBtnList.length; i++) {
  //     const btn = removeBtnList[i];
  //     btn.addEventListener("click", function () {
  //       console.log(btn);
  //     });
  //   }
});
