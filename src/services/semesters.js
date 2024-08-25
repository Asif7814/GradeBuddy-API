const semester = require("../models/semesters");
const { BadRequestError } = require("../utils/errors");

const createSemester = async (newSemester) => {
    const createdSemester = await semester.create(newSemester);
    return createdSemester;
};

const getAllSemesters = async () => await semester.find();

const getSemesterByID = async (id) => {
    const selectedSemester = await semester.findById(id);
    return selectedSemester;
};

const replaceSemester = async (id, updatedSemester) => {
    const newSemester = await semester.findByIdAndUpdate(id, updatedSemester, {
        new: true,
    });

    return newSemester;
};

const updateSemester = async (id, updatedValue) => {
    const newSemester = await semester.findByIdAndUpdate(id, updatedValue, {
        new: true,
    });

    return newSemester;
};

const deleteSemester = async (id) => {
    const deletedSemester = await semester.findByIdAndDelete(id);

    return deletedSemester;
};

module.exports = {
    createSemester,
    getAllSemesters,
    getSemesterByID,
    replaceSemester,
    updateSemester,
    deleteSemester,
};
