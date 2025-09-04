const mongoose = require("mongoose")
require("dotenv").config()

const db_connect = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URL}${process.env.DATABASE_NAME}`)
        console.log("DB Connected!")
    } catch (error) {
        console.log("DB Connection Error", error.message)
    }
}

module.exports = db_connect