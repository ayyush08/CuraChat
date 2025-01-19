import { Request, Response, RequestHandler } from "express"
import prisma from "../db/prisma.js";
import bcryptjs from 'bcryptjs'
import generateToken from "../utils/generateToken.js";


const signup: RequestHandler = async (req: Request, res: Response): Promise<any> => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: "Please fill in all fields" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password do not match" });
        }

        const user = await prisma.user.findUnique({
            where: {
                username
            }
        })

        if (user) {
            return res.status(400).json({ error: "Username already exists" })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = await prisma.user.create({
            data: {
                fullName,
                username,
                password: hashedPassword,
                gender,
                profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
            }
        })

        if (!newUser) {
            res.status(500).json({ error: "Something went wrong" })
        }

        if (newUser) {
            //generate token
            generateToken(newUser.id, res)

            res.status(200).json({
                id: newUser.id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })

        }
    } catch (error: any) {
        console.log('Error in signup', error);
        res.status(500).json({ error: "Something went wrong" })
    }
}

const login = async (req: Request, res: Response): Promise<any> => {
    try {
        const { username, password } = req.body;
        const user = await prisma.user.findUnique({ where: { username } });

        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        generateToken(user.id, res);

        res.status(200).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    } catch (error: any) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}



const logout = async (req: Request, res: Response): Promise<any> => {
    try {
        res.cookie("curachat-pern-token", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error: any) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export { login, logout, signup }