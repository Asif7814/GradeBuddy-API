const { model, Schema, Types } = require("mongoose");

const semesterSchema = new Schema(
    {
        user: {
            type: Types.ObjectId,
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        courses: [
            {
                type: Types.ObjectId,
                ref: "Course",
            },
        ],
        GPA: {
            type: Number,
            default: 0,
        },
        isArchived: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("Semester", semesterSchema);
