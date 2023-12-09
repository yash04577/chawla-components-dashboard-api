import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
    },
    materialName: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    
})

export const material = mongoose.model("material", materialSchema);