const mongoose = require('mongoose');
const { FieldsOnCorrectTypeRule } = require('graphql');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdEvents: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);