import connectDB from './utils/features.js';
import dotenv from 'dotenv';
import { app } from './app.js';
dotenv.config({
    path:'./.env'
})


connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERRR:",error);
    })
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`Server listening on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.error("MongoDB connection Error: ",error)
    process.exit(1) 
})

