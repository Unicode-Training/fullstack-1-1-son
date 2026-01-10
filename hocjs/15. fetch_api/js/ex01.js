//Client (Front-end)    =>    API    =>    Server (Back-end)

//Frontend: Gửi yêu cầu qua API ==> Đến back-end ==> Xử lý ==> Trả về ==> Front-end

//API = Application Programming Interface (Cổng trung gian)

//Khi làm việc với API

// Request
// - URL: Đường dẫn
// - Method: GET, POST, PUT, PATCH, DELETE
// - Headers: Thông tin đi kèm khi gửi từ client lên server
// - Body: Thông tin chính sẽ được gửi từ client lên server

//Response
// - status: 100 -> 599 mã trạng thái
// - Headers: Thông tin đi kèm từ server trả về
// - Body: Thông tin chính mà server phản hồi về

//Client (JavaScript) dùng gì để làm việc với API
// - XHR --> Hiện nay ít dùng
// - Fetch --> Trong js có hàm fetch() --> Tự động trả về promise

//Hướng dẫn dùng fetch
//Cú pháp fetch(url, options)
// const TODO_API = `https://jsonplaceholder.typicode.com/todos`;

// fetch(TODO_API)
//   .then((response) => {
//     return response.json(); //Promise
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const getUsers = async () => {
//   const response = await fetch(TODO_API);
//   const data = await response.json();
//   console.log(data);
// };
// getUsers();

// const addProduct = async () => {
//   const body = {
//     title: "Sản phẩm mới - Ahihi",
//     price: 10,
//     description: "A description",
//     categoryId: 1,
//     images: ["https://placehold.co/600x400"],
//   };
//   const response = await fetch(`https://api.escuelajs.co/api/v1/products`, {
//     method: "POST",
//     body: JSON.stringify(body),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   console.log(data);
// };

// addProduct();

// const updateProduct = async () => {
//   const response = await fetch(`https://api.escuelajs.co/api/v1/products/83`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "Xin chao anh em 111",
//       price: 102,
//       description: "A description ahihi",
//       categoryId: 1,
//       images: ["https://placehold.co/600x400"],
//     }),
//   });
//   const data = await response.json();
//   console.log(data);
// };
// updateProduct();
