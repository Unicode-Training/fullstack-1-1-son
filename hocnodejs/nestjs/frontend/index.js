import { io } from "https://cdn.socket.io/4.8.3/socket.io.esm.min.js";
const accessToken = localStorage.getItem("accessToken");
const socket = io("ws://localhost:4000", {
  auth: {
    accessToken,
  },
});

socket.on("new-message", (data) => {
  console.log(data);
  //Update giao diện
});

const messageEl = document.querySelector(".message");
const userIdEl = document.querySelector(".userId");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const message = messageEl.value;
  const userId = userIdEl.value;
  socket.emit("message", {
    message,
    userId,
  });
});
