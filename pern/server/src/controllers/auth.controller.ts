import { error, profile } from "console";
import { Request, Response } from "express"
import prisma from "../db/prisma.js";
import bcryptjs from 'bcryptjs'
import generateToken from "../utils/generateToken.js";


const signup = async (req: Request, res: Response) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: "Please fill in all fields" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password do not match" });
        }

        const user = await prisma.user.findUnique({
            where:{
                username
            }
        })

        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = await prisma.user.create({
            data:{
                fullName,
                username,
                password:hashedPassword,
                gender,
                profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
            }
        })

        if(!newUser){
            return res.status(500).json({error:"Something went wrong"})
        }

        if(newUser){
            //generate token
            generateToken(newUser.id, res)

            res.status(200).json({
                id:newUser.id,
                fullName:newUser.fullName,
                username:newUser.username,
                profilePic:newUser.profilePic
            })
            
        }
    } catch (error:any) {
        console.log('Error in signup',error);
        
    }
}

const login = async (req: Request, res: Response) => {
    res.send('Hello login')
}



const logout = async (req: Request, res: Response) => {
    res.send('Hello logout')
}

export { login, signup, logout }