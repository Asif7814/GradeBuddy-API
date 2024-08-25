const courseService = require("../services/courses");

const createCourse = async (req, res, next) => {
    try {
        const newCourse = await courseService.createCourse(req.body);

        res.status(201).json({
            data: newCourse,
        });
    } catch (err) {
        next(err);
    }
};

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

const deleteCourse = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedCourse = await courseService.deleteCourse(id);

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
