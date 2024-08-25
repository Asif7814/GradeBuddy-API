const deliverableService = require("../services/deliverables");

const createDeliverable = async (req, res, next) => {
    try {
        const newDeliverable = await deliverableService.createDeliverable(req.body);

        res.status(201).json({
            data: newDeliverable,
        });
    } catch (err) {
        next(err);
    }
};

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

const replaceDeliverable = async (req, res, next) => {
    try {
        const { id } = req.params;
        const replacedDeliverable = await deliverableService.replaceDeliverable(id, req.body);

        res.status(200).json({
            data: replacedDeliverable,
        });
    } catch (err) {
        next(err);
    }
};

const updateDeliverable = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedDeliverable = await deliverableService.updateDeliverable(id, req.body);

        res.status(200).json({
            data: updatedDeliverable,
        });
    } catch (err) {
        next(err);
    }
};

const deleteDeliverable = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedDeliverable = await deliverableService.deleteDeliverable(id);

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
