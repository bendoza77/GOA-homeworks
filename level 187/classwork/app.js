const express = require("express");
const studentRouter = require("./routers/student.router");

const app = express();

app.use("/api/students", studentRouter);

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})


