import mongoose from "mongoose";

let connected = false;

export const connectDB = async () => {
  if (connected) {
    console.log("Database is already connected.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB Connected.");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
