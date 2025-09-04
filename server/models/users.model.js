const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: [true, "This field is required"]
    },
    lastName : {
        type: String,
        required: [true, "This field is required"]
    },
    email : {
        type: String,
        required: [true, "This field is required"],
        unique: true
    },
    password : {
        type: String,
        required: [true, "This field is required"],
        min: 8
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel