const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user.router");

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"]
}))

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})