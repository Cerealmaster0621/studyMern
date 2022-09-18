const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
        email: { type: String, required: true, unique: true, lowercase: true },
        password: { type: String, required: true, trim: true },
        displayName: {type : String, required : true, unique :true},
        goal : {type : String},
        plan : {type : String},
        id: mongoose.Schema.Types.ObjectId,
})

mongoose.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',UserSchema);
//id, displayName, password, email, goal, plan