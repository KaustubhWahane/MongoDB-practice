const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: String,
    age : Number,
    gender : String,
    favSubject : [ String ],
    Standard: Number,
    division : String,
    bestFriend : String,
    contactNo: String
});

const UserModel = mongoose.Model("User", UserSchema);

module.exports = {
    UserModel
};