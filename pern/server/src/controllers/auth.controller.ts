import { Request, Response } from "express"


const  login =async (req:Request,res:Response)=>{
    res.send('Hello login')
}


const signup =async (req:Request,res:Response)=>{
    res.send('Hello Signup')
}

const logout = async(req:Request,res:Response)=>{
    res.send('Hello logout')
}

export  {login,signup,logout}