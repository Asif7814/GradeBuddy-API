const deliverable = require("../models/deliverables");
const course = require("../models/courses");

const { BadRequestError } = require("../utils/errors");

const createDeliverable = async (newDeliverable, courseID) => {
    const createdDeliverable = await deliverable.create(newDeliverable);

    if (!createdDeliverable) {
        throw new BadRequestError("Deliverable could not be created");
    }

    await addDeliverableToCourse(courseID, createdDeliverable._id);

    return createdDeliverable;
};

const addDeliverableToCourse = async (courseID, deliverableID) => {
    const updatedCourse = await course.findByIdAndUpdate(
        courseID,
        {
            $push: { deliverables: deliverableID },
        },
        { new: true }
    );

    if (!updatedCourse) {
        throw new BadRequestError(
            "Deliverable could not be added to the course"
        );
    }
};

const getAllDeliverables = async () => await deliverable.find();

const getDeliverableByID = async (id) => {
    const selectedDeliverable = await deliverable.findById(id);
    return selectedDeliverable;
};

const replaceDeliverable = async (id, updatedDeliverable) => {
    const newDeliverable = await deliverable.findByIdAndUpdate(
        id,
        updatedDeliverable,
        {
            new: true,
        }
    );

    return newDeliverable;
};

const updateDeliverable = async (id, updatedValue) => {
    const newDeliverable = await deliverable.findByIdAndUpdate(
        id,
        updatedValue,
        {
            new: true,
        }
    );

    return newDeliverable;
};

const deleteDeliverable = async (deliverableID, courseID) => {
    await deleteDeliverableFromCourse(courseID, deliverableID);

    const deletedDeliverable = await deliverable.findByIdAndDelete(
        deliverableID
    );

    return deletedDeliverable;
};

const deleteDeliverableFromCourse = async (courseID, deliverableID) => {
    const updatedCourse = await course.findByIdAndUpdate(
        courseID,
        {
            $pull: { deliverables: deliverableID },
        },
        { new: true }
    );

    if (!updatedCourse) {
        throw new BadRequestError(
            "Deliverable could not be deleted from the course"
        );
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
