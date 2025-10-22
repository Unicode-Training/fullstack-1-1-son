//Bất đồng bộ
// - Đồng bộ
// - Bất đồng bộ

//Ví dụ về đồng bộ
// alert("Xin chào"); //Hàm đồng bộ
// console.log("Ok rồi");

//Ví dụ bất đồng bộ
// setTimeout(() => {
//   console.log("xin chào");
// }, 2000);

// console.log("Ok rồi");

//Xử lý bất đồng bộ là gì?
// Chuyển các tác vụ bất đồng bộ thành dạng đồng bộ

//Ví dụ: Muốn lấy dữ liệu từ server --> Chờ server trả về dữ liệu --> Hiển thị thông báo

// const getUsers = (callback) => {
//   setTimeout(() => {
//     const user = {
//       name: "Hoàng An",
//       email: "hoangan.web@gmail.com",
//     };
//     if (typeof callback === "function") {
//       callback(user);
//     }
//   }, 2000);
// };
// getUsers((data) => {
//   console.log(data);
//   console.log("Đã lấy dữ liệu thành công");
// });

//Hàm, object đọc được nội dung thông qua http

// const url = "https://jsonplaceholder.typicode.com/todos";

// const getDataFromServer = (url, callback) => {
//   const xhttp = new XMLHttpRequest();
//   xhttp.open("GET", url);
//   xhttp.send();

//   xhttp.onreadystatechange = function () {
//     //   console.log(this.readyState);
//     if (this.readyState == 4 && typeof callback === "function") {
//       callback(this.responseText);
//     }
//   };
// };
// getDataFromServer("https://jsonplaceholder.typicode.com/posts/1", (data) => {
//   console.log(data);
//   getDataFromServer("https://jsonplaceholder.typicode.com/todos/1", (data) => {
//     console.log(data);
//     getDataFromServer(
//       "https://jsonplaceholder.typicode.com/photos/1",
//       (data) => {
//         const photo = JSON.parse(data);
//         console.log(photo);
//       }
//     );
//   });
// });
//Callback Hell

//JSON:
// - JSON.parse() --> Chuyển chuỗi json về array, object
// - JSON.stringify() --> Chuyển array, object thành json

//Promise
// const getUsers = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const user = {
//         name: "Hoàng An",
//         email: "hoangan.web@gmail.com",
//       };
//       resolve(user);
//     }, 2000);
//   });
// };
// const getProduct = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const product = { name: "Sản phẩm 1" };
//       resolve(product);
//     }, 1000);
//   });
// };
// getUsers()
//   .then((data) => {
//     console.log(data);
//     return getProduct();
//   })
//   .then((data) => {
//     console.log(data);
//   });

const getDataFromServer = (url) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url);
    xhttp.send();

    xhttp.onreadystatechange = function () {
      //   console.log(this.readyState);
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText);
        } else {
          reject("Error when call api");
        }
      }
    };
  });
};
getDataFromServer("https://jsonplaceholder.typicode1.com/posts")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Hoàn thành tác vụ");
  });
// getDataFromServer("https://jsonplaceholder.typicode.com/posts/1")
//   .then((data) => {
//     console.log(data);
//     return getDataFromServer("https://jsonplaceholder.typicode.com/todos/1");
//   })
//   .then((data) => {
//     console.log(data);
//     return getDataFromServer("https://jsonplaceholder.typicode.com/photos/1");
//   })
//   .then((data) => {
//     console.log(data);
//   });
//Chaining
