const { model, Schema, Types } = require("mongoose");

const courseSchema = new Schema(
    {
        user: {
            type: Types.ObjectId,
            ref: "User",
            required: true,
        },
        courseCode: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        credits: {
            type: Number,
            required: true,
        },
        finalGrade: {
            type: Number,
            default: 0,
        },
        deliverables: [
            {
                type: Types.ObjectId,
                ref: "Deliverable",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("Course", courseSchema);
