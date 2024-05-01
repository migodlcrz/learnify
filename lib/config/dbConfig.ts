import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB");
      });

      mongoose.connection.on("error", (error) => {
        console.log("Connected to MongoDB: ", error);
        process.exit();
      });
    }
  } catch (error) {
    console.log("Error conencting to MongoDB: ", error);
  }
};
