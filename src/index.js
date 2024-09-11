const express = require("express");
const sanitizeMongo = require("express-mongo-sanitize");

require("dotenv/config");
require("./utils/db");

const sanitizeBody = require("./middlewares/sanitizeBody");

const authRouter = require("./routers/auth");
const semesterRouter = require("./routers/semesters");
const courseRouter = require("./routers/courses");
const deliverableRouter = require("./routers/deliverables");

const { errorHandler } = require("./utils/errors");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(sanitizeMongo());
app.use(sanitizeBody);

// BASIC ROUTE
app.get("/", (_req, res) => {
    res.send("Server running 🚀🚀🚀");
});

// ROUTES
app.use("/auth", authRouter);
app.use("/api/semesters", semesterRouter);
app.use("/api/courses", courseRouter);
app.use("/api/deliverables", deliverableRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
