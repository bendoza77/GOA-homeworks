const express = require("express");
const { getStudents, getStudentById, deleteUserById, patchUserById, createStudent } = require("../controllers/student.controller");

const studentRouter = express.Router();

studentRouter.get(["/", "/list", "/students", "/all"], getStudents);

studentRouter.post("/", createStudent);

studentRouter.route("/:id").get(getStudentById).delete(deleteUserById).patch(patchUserById);

module.exports = studentRouter;