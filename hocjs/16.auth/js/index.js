const loginFormEl = document.querySelector(".js-login-form");
const msgEl = document.querySelector(".js-msg");

loginFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailEl = document.querySelector(".js-email");
  const passwordEl = document.querySelector(".js-password");
  const email = emailEl.value;
  const password = passwordEl.value;
  const token = await login(email, password);
  if (!token) {
    setMessage("Email hoặc mật khẩu không chính xác");
  } else {
    saveAccessToken(token);
    setMessage("Đăng nhập thành công");
  }
});

const saveAccessToken = (token) => {
  localStorage.setItem("access_token", token.access_token);
};

const setMessage = (msg) => {
  msgEl.innerHTML = `<div class="px-3 py-1 border border-green-400">${msg}</div>`;
};

const login = async (email, password) => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    return false;
  }
  return response.json();
};
