const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store'
    },

    productName: {
        type: String,
        required: [true, 'Product name is mandatory'],
    },

    productDescription: {
        type: String,
        required: [true, 'Product decription is mandatory'],
        minlength: [10, 'Product description should be larger than 10 letters']
    },

    productFeature: {
        scaling: {
            type: Number,
            default: 0
        },
        platforms: {
            enum: ['Facebook', 'Ticktok', 'Meta'],
            default: 'Facebook'
        },
        countries: {
            type: [{ type: String }]
        },
        website: {
            type: String
        },
        gender: {
            type: [{ type: String }]
        },
        ages: {
            type: {
                min: { type: Number },
                max: { type: Number }
            }
        },
        started: {
            type: Date
        },
        adsets: {
            type: Number
        },
        lastSeen: {
            type: Date
        },
        adCreative: {
            type: {
                spend: { type: Number },
                revenue: { type: Number },
                reach: { type: Number },
                productRevenue: { type: Number }
            }
        }
    },

    productImage: {
        type: String
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;