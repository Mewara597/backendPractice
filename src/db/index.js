import mongoose from "mongoose";
import DB_NAME from "../constants.js";
// 



async function connectDB() {
  try {

    console.log(`${process.env.MONGODB_URL} ===========`);
    // const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);//
    const connectionInstance = await mongoose.connect(`mongodb+srv://siddarth:siddarth123@cluster0.jdo20sp.mongodb.net/${DB_NAME}`);

    console.log(`mongo db connected !!  DB HOST ${connectionInstance.connection.host}`);
  }
  catch (error) {
    console.log('mongoDB connection error', error);
    process.exit(1);
  }
}

export default connectDB;