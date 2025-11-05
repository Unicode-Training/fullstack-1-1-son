const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "User 1",
          salary: 1000,
        },
        {
          id: 2,
          name: "User 2",
          salary: 2000,
        },
        {
          id: 3,
          name: "User 3",
          salary: 3000,
        },
      ];
      const user = users.find((user) => user.id === userId);
      resolve(user);
    }, Math.random() * 2000);
  });
};

const ids = [1, 2, 3];
// const totalPromise = new Promise((resolve) => {
//   let total = 0;
//   let count = 0;
//   for (let i = 0; i < ids.length; i++) {
//     getUser(ids[i]).then((data) => {
//       total += data.salary;
//       count++;
//       if (count === ids.length) {
//         resolve(total);
//       }
//     });
//   }
// });

// totalPromise.then((data) => {
//   console.log(data);
// });

//Promise.all(arrayPromise)
// - Nhận vào 1 mảng chứa các promise
// - Thực thi từng promise trong mảng và trả về kết quả 1 lần sau khi các promise được thực thi hết
const arrayPromise = ids.map((id) => getUser(id));
Promise.all(arrayPromise).then((data) => {
  console.log(data);
  let total = data.reduce((acc, cur) => acc + cur.salary, 0);
  console.log(total);
  //   let total = 0;
  //   data.forEach((item) => {
  //     total += item.salary;
  //   });
  //   console.log(total);
});
