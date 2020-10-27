const mongoose = require('mongoose');
const {ObjectId} = require('mongoose');
const { Schema } = mongoose;
const Profile = require('./profile.model');

//SCHEMA OF THE USER COLLECTION
const taskSchema = new Schema({
    title: String,
    description: String,
    status: Number,
    endDate: Date,
    evidence: String,
    profile: [{type: ObjectId, ref:Profile }]
});

module.exports = mongoose.model('tasks',taskSchema);