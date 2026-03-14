const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user.router");
const postRouter = require("./routers/post.router");

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"]
}))

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})