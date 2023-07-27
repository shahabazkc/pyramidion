const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    category: { type: String, required: true, index: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true },
    short_description: { type: String, required: true, default: '' },
    seller: { type: String, required: true, index: true }
}, {
    timestamps: true
});

module.exports = new mongoose.model('products', productSchema);

