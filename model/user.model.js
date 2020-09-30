const mongoose = require('mongoose');
const {ObjectId} = require('mongoose');
//SE INSTALO EL MONGOOSE-TYPE-EMAIL
require('mongoose-type-email');
const { Schema } = mongoose;
const Task = require('./task.model');

//SCHEMA OF THE USER COLLECTION
const userSchema = new Schema({
    name: String,
    mail: mongoose.SchemaTypes.Email,
    password: String,
    profilePicture: Number,
    tasks: [{type: ObjectId, ref:Task }]
});

module.exports = mongoose.model('users',userSchema);