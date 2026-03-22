const express = require("express");
const { getStudents, createStudent, getStudentById, deleteStudentById, updateStudentById } = require("../controllers/student.controller");

const studentRouter = express.Router();

studentRouter.route("/").get(getStudents).post(createStudent).patch(updateStudentById);

studentRouter.route("/:id").get(getStudentById).delete(deleteStudentById);

module.exports = studentRouter