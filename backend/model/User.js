const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String },
    password: { type: String },
    address: { type: String },

});
module.exports = mongoose.model('Users', UserSchema)