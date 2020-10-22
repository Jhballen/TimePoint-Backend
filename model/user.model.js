const mongoose = require('mongoose');
const {ObjectId} = require('mongoose');
//SE INSTALO EL MONGOOSE-TYPE-EMAIL
require('mongoose-type-email');
const { Schema } = mongoose;
const Profile = require('./profile.model');
//SCHEMA OF THE USER COLLECTION
const userSchema = new Schema({
    mail: String,
    password: String,
    type: String,
    porfiles: [{type: ObjectId, ref:Profile }]
});

module.exports = mongoose.model('users',userSchema);