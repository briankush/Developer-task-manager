const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log("MONGO_URI:", process.env.MONGO_URI); // Debug: check if MONGO_URI is defined
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDb connection failed: ", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;