const express = require("express");

const app = express();

let users = [
  {
    id: 1,
    fullName: "John Carter",
    email: "john.carter@example.com",
    password: "Pass1234!"
  },
  {
    id: 2,
    fullName: "Emily Johnson",
    email: "emily.johnson@example.com",
    password: "EmJ#2026"
  },
  {
    id: 3,
    fullName: "Michael Brown",
    email: "michael.brown@example.com",
    password: "Mbrown@99"
  },
  {
    id: 4,
    fullName: "Sophia Williams",
    email: "sophia.williams@example.com",
    password: "Swill_456"
  },
  {
    id: 5,
    fullName: "Daniel Martinez",
    email: "daniel.martinez@example.com",
    password: "DanM!789"
  },
  {
    id: 6,
    fullName: "Olivia Anderson",
    email: "olivia.anderson@example.com",
    password: "Olivia@321"
  },
  {
    id: 7,
    fullName: "James Thompson",
    email: "james.thompson@example.com",
    password: "JTpass_2026"
  },
  {
    id: 8,
    fullName: "Isabella Moore",
    email: "isabella.moore@example.com",
    password: "Bella#567"
  },
  {
    id: 9,
    fullName: "Benjamin Taylor",
    email: "benjamin.taylor@example.com",
    password: "BenT!890"
  },
  {
    id: 10,
    fullName: "Charlotte Davis",
    email: "charlotte.davis@example.com",
    password: "CharD@123"
  }
];


app.get("/users", (req, res) => {
    return res.json({
        status: "success",
        data: { users }
    })
})

app.get("/users/:id", (req, res) => {

    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            status: "error",
            meeesage: "User ID is required"
        })
    }

    const user = users.find(el => el.id === id * 1);

    

    if (!user) {
        return res.status(404).json({
            status: "error",
            message: "User not found"
        })
    }

    return res.json({
        status: "success",
        data: { user }
    })

})

app.post("/users", express.json(), (req, res) => {

    const { fullname, email, password } = req.body;


    if (!fullname || !email || !password) {
        return res.status(400).json({
            status: "error",
            message: "Full name, email, and password are required"
        })
    }

    const newUser = {
        id: users.length === 0 ? 1 : users[users.length - 1].id + 1,
        fullName: fullname,
        email: email,
        password: password
    }

    users.push(newUser);

    return res.json({
        status: "success",
        data: { newUser }
    })

})

app.delete("/users/:id", (req, res) => {

  const { id } = req.params;

  if (!id) {
      return res.status(400).json({
          status: "error",
          message: "User ID is required"
      })
  }

  const user = users.find(el => el.id === id * 1);

  if (!user) {
      return res.status(404).json({
          status: "error",
          message: "User not found"
      })
  }

  users = users.filter(el => el.id !== id * 1);

  return res.json({
      status: "success",
      message: "User deleted successfully"
  })


})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})