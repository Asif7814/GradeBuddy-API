const { Router } = require("express");

const semesterController = require("../controllers/semesters");
const courseController = require("../controllers/courses");

const semesterRouter = Router();

const { protect } = require("../middlewares/auth");

// C - Create
semesterRouter.post("/", protect, semesterController.createSemester);

// R - Read all
semesterRouter.get("/", protect, semesterController.getAllSemesters);

// C - Create a course for a semester
semesterRouter.post(
    "/:semesterID/courses",
    protect,
    courseController.createCourse
);

// D - Delete a course for a semester
semesterRouter.delete(
    "/:semesterID/courses/:id",
    protect,
    courseController.deleteCourse
);

// R - Read one
semesterRouter.get("/:id", protect, semesterController.getSemesterByID);

// U - Update (replace)
semesterRouter.put("/:id", protect, semesterController.replaceSemester);

// U - Update (partial)
semesterRouter.patch("/:id", protect, semesterController.updateSemester);

// D - Delete
semesterRouter.delete("/:id", protect, semesterController.deleteSemester);

module.exports = semesterRouter;
