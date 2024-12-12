import express from 'express';

const app = express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
    res.send('Hello World');
})


import userRouter from './routes/user.route.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

app.use('/user',userRouter);




app.use(errorMiddleware)

export { app }