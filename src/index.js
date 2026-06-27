// require("dotenv").config({path:'.env'});
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });




connectDB().then(() => {
  app.listen(process.env.port || 8000, () => {
    console.log(`server is running on port ${process.env.port || 8000}`);
  })
})
  .catch((error) => {
    console.log("Error while connecting to MongoDB", error);
  })











/*
import express from "express";
const app = express();



; (
  async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
      app.on("error", () => {
        console.log("Error while connecting to MongoDB");
        throw error
      })

      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      })

    }
    catch (error) {
      console.error("Error while connecting to MongoDB", error);
      throw error;
    }

  })()


connectDB() */