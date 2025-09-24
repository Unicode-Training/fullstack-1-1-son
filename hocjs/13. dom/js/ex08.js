const aList = document.querySelectorAll(".menu a");
aList.forEach((linkEl) => {
  const subMenu = linkEl.nextElementSibling;
  if (subMenu) {
    const liParent = linkEl.parentElement;
    liParent.classList.add("has-children");
    linkEl.addEventListener("click", (e) => {
      e.preventDefault();

      //Lấy li đang active
      const liActive = document.querySelector(".menu li.active");

      liParent.classList.toggle("active");

      if (liActive) {
        liActive.classList.remove("active");
      }
    });
  }
});
