const { model, Schema, Types } = require("mongoose");

const semesterSchema = new Schema(
    {
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
                ref: "course",
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

module.exports = model("semester", semesterSchema);
