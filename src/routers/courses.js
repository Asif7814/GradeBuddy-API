const { Router } = require("express");

const courseController = require("../controllers/courses");

const courseRouter = Router();

// C - Create
courseRouter.post("/", courseController.createCourse);

// R - Read all
courseRouter.get("/", courseController.getAllCourses);

// R - Read one
courseRouter.get("/:id", courseController.getCourseByID);

// U - Update (replace)
courseRouter.put("/:id", courseController.replaceCourse);

// U - Update (partial)
courseRouter.patch("/:id", courseController.updateCourse);

// D - Delete
courseRouter.delete("/:id", courseController.deleteCourse);

module.exports = courseRouter;
