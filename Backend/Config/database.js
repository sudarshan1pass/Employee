const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGO_URI =", process.env.MONGO_PUBLIC_URL);
    console.log("MONGO_URL =", process.env.MONGO_PUBLIC_URL);

    await mongoose.connect(process.env.MONGO_PUBLIC_URL);

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("Database connection error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
