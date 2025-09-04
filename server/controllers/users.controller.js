const userModel = require("../models/users.model")
const { hashPassword, comparePassword, tokenGenerator } = require("../helper/user.helper")

const signup = async (req, res) => {
    const data = req.body
    const isEmailExist = await userModel.findOne({email: data.email})
    if (isEmailExist) {
        res.json({message: "User already exist", isSave: false})
    }
    const hashPass = await hashPassword(data.password)
    const user = await userModel.create({...data, password: hashPass})
    res.json({message: "User is created", isSave: true, user})
}

const login = async (req, res) => {
    const data = req.body
    const isEmailExist = await userModel.findOne({email: data.email})
    if (!isEmailExist) {
        res.json({message: "User doesn't exist", isSave: false})
    }
    const comparePass = await comparePassword(data.password, isEmailExist.password)
    if (!comparePass) {
        res.json({message: "Invalid credentials", isSave: false})
    }
    const generateToken = tokenGenerator({
        email: isEmailExist.email,
        _id: isEmailExist._id
    }) 
    res
    .cookie("token", generateToken, {
        expire: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 ) 
    })
    .json({message: "User logged in", isSave: true, user: isEmailExist})
}

module.exports = {signup, login}