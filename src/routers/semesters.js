const { Router } = require("express");

const semesterController = require("../controllers/semesters");

const semesterRouter = Router();

// C - Create
semesterRouter.post("/", semesterController.createSemester);

// R - Read all
semesterRouter.get("/", semesterController.getAllSemesters);

// R - Read one
semesterRouter.get("/:id", semesterController.getSemesterByID);

// U - Update (replace)
semesterRouter.put("/:id", semesterController.replaceSemester);

// U - Update (partial)
semesterRouter.patch("/:id", semesterController.updateSemester);

// D - Delete
semesterRouter.delete("/:id", semesterController.deleteSemester);

module.exports = semesterRouter;
