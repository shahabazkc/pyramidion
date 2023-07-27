const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    mode: {
        type: String,
        enum: ['absolutDiff', 'password'],
        required: true
    },
    input: {
        type: String,
        required: true
    },
    output: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports =  new mongoose.model('result', resultSchema);

