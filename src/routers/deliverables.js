const { Router } = require("express");

const deliverableController = require("../controllers/deliverables");

const deliverableRouter = Router();

// C - Create
deliverableRouter.post("/", deliverableController.createDeliverable);

// R - Read all
deliverableRouter.get("/", deliverableController.getAllDeliverables);

// R - Read one
deliverableRouter.get("/:id", deliverableController.getDeliverableByID);

// U - Update (replace)
deliverableRouter.put("/:id", deliverableController.replaceDeliverable);

// U - Update (partial)
deliverableRouter.patch("/:id", deliverableController.updateDeliverable);

// D - Delete
deliverableRouter.delete("/:id", deliverableController.deleteDeliverable);

module.exports = deliverableRouter;
