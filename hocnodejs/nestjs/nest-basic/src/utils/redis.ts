import { createClient } from "redis";
export const redisClient = createClient({
  username: "default",
  //   password: "your_password_here",
  socket: {
    host: "localhost",
    port: 6379,
  },
}).on("error", () => console.log("Redis Client"));
redisClient.connect();
