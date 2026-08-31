const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// GET all students

// GET student by ID
router.get("/:id", async (req, res) => {
    try {
        const student = await Student.findOne({
            _id: req.params.id
        });

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST - Create a new student
router.post("/", async (req, res) => {
    try {
        const student = new Student(req.body);
        const savedStudent = await student.save();

        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT - Update a student
router.put("/:id", async (req, res) => {
    try {
        const student = await Student.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// DELETE - Delete a student
router.delete("/:id", async (req, res) => {
    try {
        const student = await Student.findOneAndDelete({
            _id: req.params.id
        });

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student deleted successfully",
            student: student
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;