import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://adnanafridi2007:adnan420Af@cluster0.nxfqbex.mongodb.net/food-del');
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};
