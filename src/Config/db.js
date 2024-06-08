const mongoose = require("mongoose")
require("dotenv").config();
const DB_URL = process.env.DB_URL
const connect  = async () => {
    return mongoose.connect(DB_URL)
}
module.exports = connect