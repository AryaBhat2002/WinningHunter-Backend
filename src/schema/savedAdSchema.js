const mongoose = require('mongoose');

const savedAdSchema = new mongoose.Schema({
    savedAdId: {
        type: String,
        unique: true,
        required: true
    },
    userId: {
        type: String,
        required: true,
        ref: 'User' 
    },
    adId: {
        type: String,
        required: true,
        ref: 'Ad' 
    },
    platform: {
        type: String,
        enum: ['Facebook', 'TikTok', 'Other'],
        required: true
    },
    savedAt: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String
    },
},{
    timestamps: true
});


const SavedAd = mongoose.model('SavedAd', savedAdSchema);

module.exports = SavedAd;
