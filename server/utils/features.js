import mongoose from "mongoose";
import { DB_NAME } from "../constants/dbName.js";

const connectDB = async () => {
    try {
        console.log(`\nConnecting to database...`);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nConnected to database :), HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB Connection Error: ",error)
        process.exit(1)//exit with failure
    }
}

export default connectDB