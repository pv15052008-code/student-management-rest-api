const express = require("express");

const router = express.Router();

const students = require("../data/students");


// ===============================
// GET ALL STUDENTS
// GET /students
// ===============================

router.get("/", (req, res) => {

    res.status(200).json(students);

});


// ===============================
// GET STUDENT BY ID
// GET /students/:id
// ===============================

router.get("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {

        return res.status(404).json({
            message: "Student not found"
        });

    }

    res.status(200).json(student);

});


// ===============================
// CREATE STUDENT
// POST /students
// ===============================

router.post("/", (req, res) => {

    const { name, age, course, email } = req.body;

    // Check required fields
    if (!name || !age || !course || !email) {

        return res.status(400).json({
            message: "Name, age, course and email are required"
        });

    }

    const newStudent = {

        id: students.length > 0
            ? students[students.length - 1].id + 1
            : 1,

        name: name,
        age: age,
        course: course,
        email: email

    };

    students.push(newStudent);

    res.status(201).json({

        message: "Student created successfully",

        student: newStudent

    });

});


// ===============================
// UPDATE STUDENT
// PUT /students/:id
// ===============================

router.put("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {

        return res.status(404).json({
            message: "Student not found"
        });

    }

    const { name, age, course, email } = req.body;

    // Check required fields
    if (!name || !age || !course || !email) {

        return res.status(400).json({
            message: "Name, age, course and email are required"
        });

    }

    student.name = name;
    student.age = age;
    student.course = course;
    student.email = email;

    res.status(200).json({

        message: "Student updated successfully",

        student: student

    });

});


// ===============================
// DELETE STUDENT
// DELETE /students/:id
// ===============================

router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = students.findIndex(
        student => student.id === id
    );

    if (index === -1) {

        return res.status(404).json({
            message: "Student not found"
        });

    }

    const deletedStudent = students.splice(index, 1);

    res.status(200).json({

        message: "Student deleted successfully",

        student: deletedStudent[0]

    });

});


module.exports = router;