const fs = require("fs");

const getStudents = (req, res) => {

    const students = fs.readFileSync("student.json", "utf-8");

    return res.json({
        status: "succasse",
        data: { students }
    })

}

const getStudentById = (req, res) => {

    const { id } = req.params;
    const students = JSON.parse(fs.readFileSync("student.json", "utf-8"));


    if (!id) {
        return res.status(400).json({
            status: "fail",
            message: "ID is invalid"
        })
    }

    const student = students.find(el => el.id === id * 1);

    if (!student) {
        return res.status(404).json({
            status: "fail",
            message: "Student not found"
        })
    }

    return res.json({
        status: "succasse",
        data: { student }
    })



}

const createStudent = (req, res) => {

    const students = JSON.parse(fs.readFileSync("student.json", "utf-8"));
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({
            status: "succasse",
            message: "All field is required"
        })
    }

    const newUser = {
        id: students.length === 0 ? 1 : students[students.length - 1].id + 1,
        name: name,
        age: age
    }

    students.push(newUser);

    fs.writeFileSync("student.json", JSON.stringify(students), "utf-8");

    return res.status(201).json({
        status: "succasse",
        message: "User is created succassefuly",
        data: { newUser }
    })


}

const deleteUserById = (req, res) => {

    const { id } = req.params;
    const students = JSON.parse(fs.readFileSync("student.json", "utf-8"));


    if (!id) {
        return res.status(400).json({
            status: "fail",
            message: "ID is invalid"
        })
    }

    fs.writeFileSync("student.json", JSON.stringify(students.filter(el => el.id !== id * 1)), "utf-8");

    return res.json({
        status: "succasse",
        message: "User deleted succassefuly"
    })


}

const patchUserById = (req, res) => {

    const { id } = req.params;
    const { name, age } = req.body;
    const students = JSON.parse(fs.readFileSync("student.json", "utf-8"));


    if (!id) {
        return res.status(400).json({
            status: "fail",
            message: "ID is invalid"
        })
    }

    const student = students.find(el => el.id === id * 1);

    if (!student) {
        return res.status(404).json({
            status: "fail",
            message: "Student not found"
        })
    }

    if (name) student.name = name;
    if (age) student.age = age;


    


}

module.exports = {
    getStudents,
    getStudentById,
    deleteUserById,
    patchUserById,
    createStudent
}

