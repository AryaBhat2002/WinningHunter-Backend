const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    domain: {
        type: String,
        required: true
    },
    apiKey: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;