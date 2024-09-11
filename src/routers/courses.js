const { Router } = require("express");

const courseController = require("../controllers/courses");

const courseRouter = Router();

const { protect } = require("../middlewares/auth");

// C - Create
// courseRouter.post("/", protect, courseController.createCourse);

// R - Read all
courseRouter.get("/", protect, courseController.getAllCourses);

// R - Read one
courseRouter.get("/:id", protect, courseController.getCourseByID);

// U - Update (replace)
courseRouter.put("/:id", protect, courseController.replaceCourse);

// U - Update (partial)
courseRouter.patch("/:id", protect, courseController.updateCourse);

// D - Delete
// courseRouter.delete("/:id", protect, courseController.deleteCourse);

module.exports = courseRouter;
