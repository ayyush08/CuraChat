import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.send('Hello World');
})


import { errorMiddleware } from './middlewares/error.middleware.js';
import userRouter from './routes/user.route.js';
import chatRouter from './routes/chat.route.js'


app.use('/chat',chatRouter);
app.use('/user',userRouter);


app.use(errorMiddleware)

export { app }