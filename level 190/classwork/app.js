const express = require("express");
const morgan = require("morgan");
const logger = require("./middleware/loger.middleware");
const studentRouter = require("./routers/student.router");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(logger);

app.use("/api/students", studentRouter);

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})