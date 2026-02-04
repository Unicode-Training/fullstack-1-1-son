const profileEl = document.querySelector(".js-profile");
let refreshTokenPromise = null;
const saveToken = (token) => {
  localStorage.setItem("access_token", token.access_token);
  localStorage.setItem("refresh_token", token.refresh_token);
};
const removeToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");
  return accessToken;
};
const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("refresh_token");
  return refreshToken;
};
const getNewToken = async () => {
  const refreshToken = getRefreshToken();
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken,
      }),
    },
  );
  if (!response.ok) {
    return false;
  }
  return response.json();
};
const getProfile = async () => {
  const accessToken = getAccessToken();
  if (!accessToken) {
    //Chuyển hướng
    window.location.href = "index.html";
    return;
  }
  const response = await fetch(`https://api.escuelajs.co/api/v1/auth/profile`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    //Xử lý refresh
    // - Refresh thành công --> lấy token mới --> Lưu lại vào storage --> Gọi lại getProfile
    // - Refresh thất bại --> Logout (xóa hết token trong storage)
    if (!refreshTokenPromise) {
      refreshTokenPromise = getNewToken();
    }
    const newToken = await refreshTokenPromise;
    if (newToken) {
      saveToken(newToken);
      getProfile();
    } else {
      removeToken();
      window.location.href = "index.html";
    }
    refreshTokenPromise = null;
    return;
  }
  const user = await response.json();
  profileEl.innerHTML = `<p class="mb-3">Tên: ${user.name}</p>
      <p class="mb-3">Email: ${user.email}</p>
      <p class="mb-3">Role: ${user.role}</p>`;
};

getProfile();
getProfile();
getProfile();
