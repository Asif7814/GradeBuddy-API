const course = require("../models/courses");
const { BadRequestError } = require("../utils/errors");

const createCourse = async (newCourse) => {
    const createdCourse = await course.create(newCourse);
    return createdCourse;
};

const getAllCourses = async () => await course.find();

const getCourseByID = async (id) => {
    const selectedCourse = await course.findById(id);
    return selectedCourse;
};

const replaceCourse = async (id, updatedCourse) => {
    const newCourse = await course.findByIdAndUpdate(id, updatedCourse, {
        new: true,
    });

    return newCourse;
};

const updateCourse = async (id, updatedValue) => {
    const newCourse = await course.findByIdAndUpdate(id, updatedValue, {
        new: true,
    });

    return newCourse;
};

const deleteCourse = async (id) => {
    const deletedCourse = await course.findByIdAndDelete(id);

    return deletedCourse;
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourseByID,
    replaceCourse,
    updateCourse,
    deleteCourse,
};
