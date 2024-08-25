const semesterService = require("../services/semesters");

const createSemester = async (req, res, next) => {
    try {
        const newSemester = await semesterService.createSemester(req.body);

        res.status(201).json({
            data: newSemester,
        });
    } catch (err) {
        next(err);
    }
};

const getAllSemesters = async (_req, res, next) => {
    try {
        const semesters = await semesterService.getAllSemesters();

        res.status(200).json({
            data: semesters,
        });
    } catch (err) {
        next(err);
    }
};

const getSemesterByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const semester = await semesterService.getSemesterByID(id);

        res.status(200).json({
            data: semester,
        });
    } catch (err) {
        next(err);
    }
};

const replaceSemester = async (req, res, next) => {
    try {
        const { id } = req.params;
        const replacedSemester = await semesterService.replaceSemester(id, req.body);

        res.status(200).json({
            data: replacedSemester,
        });
    } catch (err) {
        next(err);
    }
};

const updateSemester = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedSemester = await semesterService.updateSemester(id, req.body);

        res.status(200).json({
            data: updatedSemester,
        });
    } catch (err) {
        next(err);
    }
};

const deleteSemester = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedSemester = await semesterService.deleteSemester(id);

        res.status(200).json({
            data: deletedSemester,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createSemester,
    getAllSemesters,
    getSemesterByID,
    replaceSemester,
    updateSemester,
    deleteSemester,
};
