const mongodb = require("mongoose")
require("dotenv").config()

module.exports = connect = (dbname) => { 
    // Use MONGO_URI from environment variables, fallback to localhost if not set
    const connectionString = process.env.MONGO_URI || `mongodb://localhost:27017/${dbname}`
    return mongodb.connect(connectionString) 
}