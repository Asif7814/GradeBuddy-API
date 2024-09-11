const deliverableService = require("../services/deliverables");

// @desc    Create a deliverable and add it to a course
// @route   POST /api/courses/:courseID/deliverables
// @access  Private
const createDeliverable = async (req, res, next) => {
    try {
        const newDeliverable = await deliverableService.createDeliverable(
            {
                ...req.body,
                user: req.user._id,
            },
            req.params.courseID
        );

        res.status(201).json({
            data: newDeliverable,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Get all deliverables
// @route   GET /api/deliverables
// @access  Private
const getAllDeliverables = async (_req, res, next) => {
    try {
        const deliverables = await deliverableService.getAllDeliverables();

        res.status(200).json({
            data: deliverables,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Get a deliverable by ID
// @route   GET /api/deliverables/:id
// @access  Private
const getDeliverableByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deliverable = await deliverableService.getDeliverableByID(id);

        res.status(200).json({
            data: deliverable,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Replace a deliverable's details
// @route   PUT /api/deliverables/:id
// @access  Private
const replaceDeliverable = async (req, res, next) => {
    try {
        const { id } = req.params;
        const replacedDeliverable = await deliverableService.replaceDeliverable(
            id,
            req.body
        );

        res.status(200).json({
            data: replacedDeliverable,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Update a deliverable's details
// @route   PATCH /api/deliverables/:id
// @access  Private
const updateDeliverable = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedDeliverable = await deliverableService.updateDeliverable(
            id,
            req.body
        );

        res.status(200).json({
            data: updatedDeliverable,
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Delete a deliverable and remove it from a course
// @route   DELETE /api/courses/:courseID/deliverables/:id
// @access  Private
const deleteDeliverable = async (req, res, next) => {
    try {
        const { id, courseID } = req.params;
        const deletedDeliverable = await deliverableService.deleteDeliverable(
            id,
            courseID
        );

        res.status(200).json({
            data: deletedDeliverable,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createDeliverable,
    getAllDeliverables,
    getDeliverableByID,
    replaceDeliverable,
    updateDeliverable,
    deleteDeliverable,
};
