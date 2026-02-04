import React, { useEffect, useState } from "react";
import { getMessage } from "./utils/utils";
export default function App() {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        document.body.style.background = "yellow";
      }
    });
  }, []);
  return (
    <div>
      <h1>Hello anh em</h1>
      {getMessage()}
      <h2>{msg}</h2>
      <button onClick={() => setMsg("Chào Sơn")}>Click me</button>
    </div>
  );
}
