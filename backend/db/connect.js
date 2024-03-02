const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
	try {
		console.log("Connecting to MongoDB");
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error(error);
	}
};

module.exports = connectDB;
