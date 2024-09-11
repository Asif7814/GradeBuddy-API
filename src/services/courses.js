const course = require("../models/courses");
const semester = require("../models/semesters");

const { BadRequestError } = require("../utils/errors");

const createCourse = async (newCourse, semesterID) => {
    const createdCourse = await course.create(newCourse);

    console.log(createdCourse);
    if (!createdCourse) {
        throw new BadRequestError("Course could not be created");
    }

    addCourseToSemester(semesterID, createdCourse._id);

    return createdCourse;
};

const addCourseToSemester = async (semesterID, courseID) => {
    const updatedSemester = await semester.findByIdAndUpdate(
        semesterID,
        {
            $push: { courses: courseID },
        },
        { new: true }
    );

    if (!updatedSemester) {
        throw new BadRequestError("Course could not be added to the semester");
    }
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

const deleteCourse = async (courseID, semesterID) => {
    deleteCourseFromSemester(semesterID, courseID);

    const deletedCourse = await course.findByIdAndDelete(courseID);

    if (!deletedCourse) {
        throw new BadRequestError("Course could not be deleted");
    }

    return deletedCourse;
};

const deleteCourseFromSemester = async (semesterID, courseID) => {
    const updatedSemester = await semester.findByIdAndUpdate(
        semesterID,
        {
            $pull: { courses: courseID },
        },
        { new: true }
    );

    if (!updatedSemester) {
        throw new BadRequestError(
            "Course could not be deleted from the semester"
        );
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
