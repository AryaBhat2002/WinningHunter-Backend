const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Name of plan is required"] 
    },

    price: { 
        type: Number, 
        required: [true, "Price of plan is required"]
    },

    features: {
        type: [{ type: String }]
    }

},{
    timestamps: true
});

const Plan = mongoose.model("Plan" , planSchema);
module.exports = Plan;