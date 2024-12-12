import mongoose from "mongoose";
import { DB_NAME } from "../constants/dbName.js";
import jwt from "jsonwebtoken";
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


const sendToken = (res,user,code,message)=>{
    console
    const token = jwt.sign({
        id:user._id,   
    },
process.env.JWT_SECRET)
    const cookieOptions = {
        maxAge: 15*24*60*60*1000,
        sameSite: "none",
        secure: true,
        httpOnly: true
    }

    return res.status(code).cookie("curachat-token",token,cookieOptions).json({
        success:true,
        message,
        user
    })
}





export {sendToken}

export default connectDB