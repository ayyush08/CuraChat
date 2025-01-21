import jwt, { JwtPayload } from 'jsonwebtoken';

import { Response,Request,NextFunction } from 'express';
import prisma from '../db/prisma.js';


interface DecodedToken extends JwtPayload{
    userId:string
}


declare global{
    namespace Express{
        export interface Request{
            user:{
                id:string
            }
        }
    }
}

const protectRoute = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
    try {
        const tokenName = 'curachat-pern-token';
        const token = req.cookies[tokenName];


        if(!token){
            return res.status(401).json({error:"Unauthorized - No token found"})
        }

        const decodedToken = jwt.verify(token,process.env.JWT_SECRET!) as DecodedToken;
        
        if(!decodedToken){
            return res.status(401).json({error:"Unauthorized - Invalid token"})
        }

        const user = await prisma.user.findUnique({
            where:{
                id:decodedToken.userId
            },
            select:{
                id:true,
                username:true,
                fullName:true,
                profilePic:true
            }
        })

        if(!user){
            return res.status(404).json({error:"User not found"})
        }

        req.user = user;

    next()
    } catch (error:any) {
        console.log("Error in protectRoute middleware", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}

export default protectRoute