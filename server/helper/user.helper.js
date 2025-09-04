const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const hashPassword = async (password) => {
   const hash = await bcrypt.hash(password, 10)
   return hash
}

const comparePassword = async (password, hashPass) => {
   const compare = await bcrypt.compare(password, hashPass)
   return compare;
}

const tokenGenerator = (payload) => {
   const token = jwt.sign(payload, process.env.JWT_SECRET_KEY)
   return token
}

module.exports = {hashPassword, comparePassword, tokenGenerator}