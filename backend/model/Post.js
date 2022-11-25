const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    datetime: { type: String },
    image: { type: String }
});
module.exports = mongoose.model("Posts", postSchema);