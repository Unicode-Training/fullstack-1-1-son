export const userController = {
  index: (req, res) => {
    const users = [
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      },
      {
        id: 3,
        name: "User 3",
      },
    ];
    res.json(users);
  },
  detail: (req, res) => {
    res.json({
      id: +req.params.userId,
      name: "User 1",
    });
  },
  create: (req, res) => {
    const body = req.body;
    console.log(body);

    res.json({ body });
  },
};

//controller -> action
