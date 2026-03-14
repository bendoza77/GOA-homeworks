const express = require("express");
const { getUsers, deleteUsers, signup, login } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.delete("/:id", deleteUsers);

userRouter.post("/signup", signup);

userRouter.post("/login", login);

module.exports = userRouter;