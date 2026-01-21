const profileEl = document.querySelector(".js-profile");
const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");
  return accessToken;
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
  console.log(response);

  if (!response.ok) {
    window.location.href = "index.html";
    return;
  }
  const user = await response.json();
  profileEl.innerHTML = `<p class="mb-3">Tên: ${user.name}</p>
      <p class="mb-3">Email: ${user.email}</p>
      <p class="mb-3">Role: ${user.role}</p>`;
};

getProfile();
