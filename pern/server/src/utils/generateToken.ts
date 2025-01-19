import jwt from 'jsonwebtoken';
import { Response } from 'express';


const generateToken = (userId: string, res: Response) => {
    const token = jwt.sign({
        userId
    },process.env.JWT_SECRET!,{
        expiresIn:'15d'
    })

    res.cookie('curachat-pern-token',token,{
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly:true, //prevent XSS attacks
        sameSite: 'strict', //CSRF attacks cross-site request forgery
        secure: process.env.NODE_ENV == 'production' ? true : false
    })

    return token;
}

export default generateToken;