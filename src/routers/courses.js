const { Router } = require("express");

const courseController = require("../controllers/courses");
const deliverableController = require("../controllers/deliverables");

const courseRouter = Router();

const { protect } = require("../middlewares/auth");

// C - Create
// courseRouter.post("/", protect, courseController.createCourse);

// R - Read all
courseRouter.get("/", protect, courseController.getAllCourses);

// C - Create a deliverable for a course
courseRouter.post(
    "/:courseID/deliverables",
    protect,
    deliverableController.createDeliverable
);

// D - Delete a deliverable from a course
courseRouter.delete(
    "/:courseID/deliverables/:id",
    protect,
    deliverableController.deleteDeliverable
);

// R - Read one
courseRouter.get("/:id", protect, courseController.getCourseByID);

// U - Update (replace)
courseRouter.put("/:id", protect, courseController.replaceCourse);

// U - Update (partial)
courseRouter.patch("/:id", protect, courseController.updateCourse);

// D - Delete
// courseRouter.delete("/:id", protect, courseController.deleteCourse);

module.exports = courseRouter;
