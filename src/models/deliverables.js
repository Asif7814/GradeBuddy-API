const { model, Schema, Types } = require("mongoose");

const deliverableSchema = new Schema(
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
        description: {
            type: String,
            required: false,
        },
        type: {
            type: String,
            enum: [
                "EXERCISE",
                "HYBRID",
                "ASSIGNMENT",
                "PROJECT",
                "QUIZ",
                "TEST",
                "EXAM",
            ],
            required: true,
        },
        priority: {
            type: String,
            enum: ["LOW", "MEDIUM", "HIGH", "URGENT"],
            default: "LOW",
        },
        status: {
            type: String,
            enum: ["TODO", "IN PROGRESS", "COMPLETED"],
            default: "TODO",
            required: true,
        },
        dueDate: {
            type: Date,
            required: true,
        },
        dateCompleted: {
            type: Date,
        },
        weightAchieved: {
            type: Number,
            default: 0,
        },
        weightTotal: {
            type: Number,
            required: true,
        },
        gradeAchieved: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("Deliverable", deliverableSchema);
