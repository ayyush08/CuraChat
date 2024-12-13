import { ALERT, REFETCH_CHATS } from "../constants/events.js";
import { TryCatch } from "../middlewares/error.middleware.js";
import { Chat } from "../models/chat.model.js";
import { emitEvent } from "../utils/features.js";
import { ErrorHandler } from "../utils/utility.js";



const newGroupChat = TryCatch(async(req,res,next)=>{
    const {name,members} = req.body

    if(members.length<2){
        return next(new ErrorHandler('Group Chat must have minimum 3 members',400))
    }
    const allMembers = [...members,req.user]
    const groupChat = await Chat.create({
        name,
        groupChat: true,
        creator: req.user,
        members: allMembers
    })
    if(!groupChat){
        return next(new ErrorHandler('Group Chat creation error',500))
    }
    emitEvent(req,ALERT,allMembers,`Welcome to ${name} Group Chat`);
    emitEvent(req,REFETCH_CHATS,members);

    return res.status(201).json({
        success: true,
        message: 'Group Chat created successfully',
        groupChat
    })
})


export { newGroupChat }