const mongoose = require('mongoose');
const {ObjectId} = require('mongoose');
const { Schema } = mongoose;
const User = require('./user.model');

//SCHEMA OF THE USER COLLECTION
const taskSchema = new Schema({
    title: String,
    description: String,
    status: Number,
    users: [{type: ObjectId, ref:User }]
});

module.exports = mongoose.model('tasks',taskSchema);