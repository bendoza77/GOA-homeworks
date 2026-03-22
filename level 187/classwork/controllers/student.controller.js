const fs = require("fs");

const getStudents = (req, res) => {

    let students = JSON.parse(fs.readFileSync("students.json", "utf-8"));
    const { grade, maxGrade, minGrade } = req.query;

    if (maxGrade && !minGrade) { students = students.filter(el => el.grade == maxGrade) };
    if (minGrade && !maxGrade) { students = students.filter(el => el.grade = minGrade) };
    if (minGrade && maxGrade) students = students.filter(el => el.grade * 1 >= minGrade * 1 && el.grade * 1 <= maxGrade * 1)

    if (grade) { students = students.filter(el => el.grade === grade) };


    return res.json({
        status: "succasse",
        data: { students }
    });
    

    
}

const getStudentById = (req, res) => {

    const { id } = req.params;
    const students = JSON.parse(fs.readFileSync("students.json", "utf-8"));

    if (!id) {
        return res.status(400).json({
            status: "fail",
            messasge: "Id is invalid"
        })
    }

    const student = students.find(el => el.id === id * 1);

    if (!student) {
        return res.status(404).json({
            stsatus: "fail",
            message: "Student not found"
        })
    }

    return res.json({
        status: "succasse",
        data: { student }
    })
}

const createStudent = (req, res) => {

    const { fullname, grade } = req.query
    const students = JSON.parse(fs.readFileSync("students.json", "utf-8"));

    if (!fullname || !grade) {
        return res.status(400).json({
            status: "fail",
            message: "All filed is required"
        })
    }

    const newStudent = {
        id: students.length === 0 ? 1 : students[students.length - 1].id + 1,
        fullname: fullname,
        grade: grade
    }

    students.push(newStudent)

    fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");

    return res.json({
        status: "succasse",
        message: "Student is created",
        data: { newStudent }
    })


}

const deleteStudentById = (req, res) => {

    const { id } = req.params;
    const students = JSON.parse(fs.readFileSync("students.json", "utf-8"));
    

    if (!id) {
        return res.status(400).json({
            status: "fail",
            messasge: "Id is invalid"
        })
    }

    fs.writeFileSync("students.json", JSON.stringify(students.filter(el => el.id !== id * 1)), "utf-8");

    return res.json({
        status: "succasse",
        message: "Student is deleted"
    })


}

const updateStudentById = (req, res) => {

    const students = JSON.parse(fs.readFileSync("students.json", "utf-8"));
    const { id, grade } = req.query;

    if (!id) {
        return res.status(400).json({
            status: "fail",
            messasge: "Id is invalid"
        })
    }

    const student = students.find(el => el.id === id * 1);

    if (grade) student.grade = grade;

    fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");

    return res.json({
        status: "succasse",
        message: "Student grade changed",
        data: { student }
    })
    

    
}



module.exports = {
    getStudents,
    getStudentById,
    deleteStudentById,
    updateStudentById,
    createStudent
}