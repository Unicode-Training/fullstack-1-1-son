const app = {
  async getPosts(keyword = "") {
    //Gọi api
    try {
      this.renderLoading();
      let url = `https://dummyjson.com/posts`;
      if (keyword) {
        url = `https://dummyjson.com/posts/search?q=${keyword}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      const posts = data.posts;
      this.renderPosts(posts);
    } catch (error) {
      this.renderError(error.message);
    }
  },
  renderLoading() {
    const postListEl = document.querySelector(".js-post-list");
    postListEl.innerHTML = `<span class="block text-3xl text-center py-3 font-medium">Loading...</span>`;
  },
  renderError(message) {
    const postListEl = document.querySelector(".js-post-list");
    postListEl.innerHTML = `<span class="block text-3xl text-center py-3 font-medium text-red-600">${message}</span>`;
  },
  renderPosts(posts) {
    const postListEl = document.querySelector(".js-post-list");
    // console.log(posts);
    const html = posts
      .map(
        (
          post
        ) => `<div id="post-${post.id}" class="border border-[#ddd] p-3 mb-3">
        <h2 class="js-post-title text-2xl mb-3">
         ${post.title}
        </h2>
        <p class="js-post-body mb-3">
          ${post.body}
        </p>
        <div class="flex justify-between items-center">
          <button
            class=" border border-[#ddd] px-5 py-2 cursor-pointer rounded-full"
          >
            Xem chi tiết
          </button>
          <div class="flex gap-2">
            <span class="cursor-pointer js-edit-btn" data-id="${post.id}">Sửa</span>
            <span class="cursor-pointer text-red-600">Xóa</span>
          </div>
        </div>
      </div>`
      )
      .join("");
    postListEl.innerHTML = html;

    //Lắng nghe sự kiện sửa
    const modalEl = document.querySelector(".js-modal");
    postListEl.addEventListener("click", async (e) => {
      if (e.target.classList.contains("js-edit-btn")) {
        const id = e.target.dataset.id;

        modalEl.classList.remove("hidden");

        const post = await this.getPost(id);

        const titleEl = document.querySelector(".js-title");
        const bodyEl = document.querySelector(".js-body");
        titleEl.value = post.title;
        bodyEl.value = post.body;

        const formEl = document.querySelector(".js-form");
        formEl.addEventListener("submit", async (e) => {
          e.preventDefault();
          const titleEl = document.querySelector(".js-title");
          const bodyEl = document.querySelector(".js-body");
          const title = titleEl.value;
          const body = bodyEl.value;
          const response = await this.updatePost(id, {
            title,
            body,
          });

          const postEl = document.querySelector(`#post-${id}`);
          if (postEl) {
            const postTitleEl = postEl.querySelector(".js-post-title");
            const postBodyEl = postEl.querySelector(".js-post-body");
            postTitleEl.innerText = response.title;
            postBodyEl.innerText = response.body;
            modalEl.classList.add("hidden");
          }
        });
      }
    });

    const overlayEl = document.querySelector(".js-overlay");
    overlayEl.addEventListener("click", () => {
      modalEl.classList.add("hidden");
    });
  },
  async updatePost(id, dataUpdate) {
    const response = await fetch(`https://dummyjson.com/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUpdate),
    });
    const data = await response.json(); //Lấy dữ liệu từ server (text) -> chuyển về obj/array của js
    return data;
  },
  async getPost(id) {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await response.json();
    return data;
  },
  search() {
    const inputEl = document.querySelector(".js-search");
    inputEl.addEventListener("input", () => {
      const keyword = inputEl.value;
      this.getPosts(keyword);
    });
  },
  init() {
    this.getPosts();
    this.search();
  },
};

app.init();
