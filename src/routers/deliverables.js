const { Router } = require("express");

const deliverableController = require("../controllers/deliverables");

const deliverableRouter = Router();

const { protect } = require("../middlewares/auth");

// C - Create
// deliverableRouter.post("/", protect, deliverableController.createDeliverable);

// R - Read all
deliverableRouter.get("/", protect, deliverableController.getAllDeliverables);

// R - Read one
deliverableRouter.get(
    "/:id",
    protect,
    deliverableController.getDeliverableByID
);

// U - Update (replace)
deliverableRouter.put(
    "/:id",
    protect,
    deliverableController.replaceDeliverable
);

// U - Update (partial)
deliverableRouter.patch(
    "/:id",
    protect,
    deliverableController.updateDeliverable
);

// D - Delete
// deliverableRouter.delete(
//     "/:id",
//     protect,
//     deliverableController.deleteDeliverable
// );

module.exports = deliverableRouter;
