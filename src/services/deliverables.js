const deliverable = require("../models/deliverables");
const { BadRequestError } = require("../utils/errors");

const createDeliverable = async (newDeliverable) => {
    const createdDeliverable = await deliverable.create(newDeliverable);
    return createdDeliverable;
};

const getAllDeliverables = async () => await deliverable.find();

const getDeliverableByID = async (id) => {
    const selectedDeliverable = await deliverable.findById(id);
    return selectedDeliverable;
};

const replaceDeliverable = async (id, updatedDeliverable) => {
    const newDeliverable = await deliverable.findByIdAndUpdate(id, updatedDeliverable, {
        new: true,
    });

    return newDeliverable;
};

const updateDeliverable = async (id, updatedValue) => {
    const newDeliverable = await deliverable.findByIdAndUpdate(id, updatedValue, {
        new: true,
    });

    return newDeliverable;
};

const deleteDeliverable = async (id) => {
    const deletedDeliverable = await deliverable.findByIdAndDelete(id);

    return deletedDeliverable;
};

module.exports = {
    createDeliverable,
    getAllDeliverables,
    getDeliverableByID,
    replaceDeliverable,
    updateDeliverable,
    deleteDeliverable,
};
