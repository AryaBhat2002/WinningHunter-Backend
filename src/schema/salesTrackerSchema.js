const mongoose = require('mongoose');

const salesTrackerSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },

    saleId: {
        type: String,
        unique: true
    },

    userId: {
        type: String,
        ref: 'Product'
    },

    quantity: {
        type: Number,
        required: true,
        default: 0
    },

    totalAmount: {
        type: Number,
        default: 0,
        required: true
    }

}, {
    timestamps: true
});

const SalesTracker = mongoose.model('SalesTracker', salesTrackerSchema);

module.exports = SalesTracker;