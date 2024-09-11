const semesterService = require("../services/semesters");

// @desc    Create a new semester
// @route   POST /api/semesters
// @access  Private
const createSemester = async (req, res, next) => {
    try {
        const newSemester = await semesterService.createSemester({
            ...req.body,
            user: req.user._id,
        });

        res.status(201).json({
            data: newSemester,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Get all semesters
// @route   GET /api/semesters
// @access  Private
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

// @desc    Get a semester by ID
// @route   GET /api/semesters/:id
// @access  Private
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

// @desc    Replace a semester's details
// @route   PUT /api/semesters/:id
// @access  Private
const replaceSemester = async (req, res, next) => {
    try {
        const { id } = req.params;
        const replacedSemester = await semesterService.replaceSemester(
            id,
            req.body
        );

        res.status(200).json({
            data: replacedSemester,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Update a semester's details
// @route   PATCH /api/semesters/:id
// @access  Private
const updateSemester = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedSemester = await semesterService.updateSemester(
            id,
            req.body
        );

        res.status(200).json({
            data: updatedSemester,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Delete a semester
// @route   DELETE /api/semesters
// @access  Private
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
