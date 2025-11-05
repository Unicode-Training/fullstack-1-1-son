//Async function
//Await keyword: Thực thi 1 promise và sẽ chờ
// - Yêu cầu bắt buộc: Được gọi trong async function

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

//Tạo async function
// const doSomething = async () => {
//   const user1 = await getUser(1); //1 await là 1 lần then
//   console.log(user1);
//   const user2 = await getUser(2);
//   console.log(user2);
// };
// doSomething();

const ids = [1, 2, 3];
const getTotalSalary = async () => {
  let total = 0;
  for (let i = 0; i < ids.length; i++) {
    const user = await getUser(ids[i]);
    total += user.salary;
  }
  console.log(total);
};
getTotalSalary();
