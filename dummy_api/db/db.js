import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MONGODB connected ${connect.connection.host}`);
  } catch (err) {
    console.log("database connection error", err);
  }
};
