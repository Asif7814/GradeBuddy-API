const courseService = require("../services/courses");

// @desc    Create a course and add it to a semester
// @route   POST /api/semesters/:semesterID/courses
// @access  Private
const createCourse = async (req, res, next) => {
    try {
        const newCourse = await courseService.createCourse(
            {
                ...req.body,
                user: req.user._id,
            },
            req.params.semesterID
        );

        res.status(201).json({
            data: newCourse,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Get all courses
// @route   GET /api/courses
// @access  Private
const getAllCourses = async (_req, res, next) => {
    try {
        const courses = await courseService.getAllCourses();

        res.status(200).json({
            data: courses,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Get a course by ID
// @route   GET /api/courses/:id
// @access  Private
const getCourseByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const course = await courseService.getCourseByID(id);

        res.status(200).json({
            data: course,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Replace a course's details
// @route   PUT /api/courses/:id
// @access  Private
const replaceCourse = async (req, res, next) => {
    try {
        const { id } = req.params;
        const replacedCourse = await courseService.replaceCourse(id, req.body);

        res.status(200).json({
            data: replacedCourse,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Update a course's details
// @route   PATCH /api/courses/:id
// @access  Private
const updateCourse = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedCourse = await courseService.updateCourse(id, req.body);

        res.status(200).json({
            data: updatedCourse,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Delete a course and remove it from a semester
// @route   DELETE /api/semesters/:semesterID/courses/:id
// @access  Private
const deleteCourse = async (req, res, next) => {
    try {
        const { id, semesterID } = req.params;
        const deletedCourse = await courseService.deleteCourse(id, semesterID);

        res.status(200).json({
            data: deletedCourse,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourseByID,
    replaceCourse,
    updateCourse,
    deleteCourse,
};
