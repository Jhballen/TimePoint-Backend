const mongoose = require('mongoose');
const {ObjectId} = require('mongoose');
const { Schema } = mongoose;
const Task = require('./task.model');
const User = require('./user.model');

const profileSchema = new Schema({
    userId: {type: ObjectId, ref:User},
    name: String,
    tasks: [{type: ObjectId, ref:Task }],
    profilePicture: Number
});

module.exports = mongoose.model('profile', profileSchema);