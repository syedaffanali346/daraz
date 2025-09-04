require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const db_connect = require("./config/connection")
const userRoute = require("./routes/users.route")

db_connect()
app.use(express.json())
app.use(cors())

app.use("/auth", userRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})