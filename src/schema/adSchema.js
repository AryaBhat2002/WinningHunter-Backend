const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    adId: {
        type: String,
        unique: true,
        required: true
    },
    userId: {
        type: String,
        required: true,
        ref: 'User' 
    },
    productId: {
        type: String,
        required: true,
        ref: 'Product' 
    },
    storeId: {
        type: String,
        required: true,
        ref: 'Store' 
    },
    platform: {
        type: String,
        enum: ['Facebook', 'TikTok', 'Meta', 'Other'], // Add other platforms as necessary
        required: true
    },
    campaignName: {
        type: String,
        required: true
    },
    adContent: {
        type: String, 
        required: true
    },
    targetAudience: {
        type: [String], 
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'paused', 'completed'],
        required: true
    },

}, {
    timestamps: true
});

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;