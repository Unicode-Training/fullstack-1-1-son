// console.log("Xin chào NodeJS");

//module
// - Commonjs
// - ES Module

// const { a, b } = require("./modules/home");
// console.log(a, b);

// import moment from "moment";
// console.log(moment());

// import fs from "fs/promises";
// const content = fs.readFileSync("./data/data.txt", "utf-8");
// console.log(content);

// fs.readFile("./data/data.txt", (err, data) => {
//   console.log(data.toString());
// });

// const getContent = async () => {
//   const content = await fs.readFile("./data/data.txt", "utf-8");
//   console.log(content);
// };
// getContent();

// fs.writeFile("./data/data.txt", "Chào Sơn");

// fs.unlink("./data/data.txt");

//url module
// import url from "url";
// const fullUrl = "https://unicode.vn:8080/khoa-hoc/nodejs?s=abc";
// const urlParsed = url.parse(fullUrl, true);
// console.log(urlParsed);
// console.log(urlParsed.query.s);

//http module
import http from "http";
//http request -> http response
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1>Home</h1>`);
  } else if (req.url === "/users") {
    res.end(`<h1>Users</h1>`);
  } else if (req.url === "/products") {
    res.end(`<h1>Products</h1>`);
  } else {
    res.end(`<h1>Page not found</h1>`);
  }
});
server.listen(8000);
