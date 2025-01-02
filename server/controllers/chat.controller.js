import { ALERT, REFETCH_CHATS } from "../constants/events.js";
import { TryCatch } from "../middlewares/error.middleware.js";
import { Chat } from "../models/chat.model.js";
import { emitEvent } from "../utils/features.js";
import { getOtherMember } from "../utils/helper.js";
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


const getMyChats = TryCatch(async(req,res,next)=>{
    console.log(req.user);
    
    const chats = await Chat.find({members:req.user}).populate(
        'members',
        'name username avatar'
    )

    const transformedChats = chats.map(({_id,name,members,groupChat})=>{
        const otherMember = getOtherMember(members,req.user)
        return {
            _id,
            groupChat,
            avatar: groupChat ? members.slice(0,3).map(member=>member.avatar.url) : [otherMember.avatar.url],
            name: groupChat ? name : otherMember.name,
            // username: groupChat ? members.map(member=>member.username) : [otherMember.username],
            members: members.reduce((acc,member)=>{
                console.log(member._id.toString(),req.user.toString());
                
                if(member._id.toString() !== req.user.toString()){
                    acc.push(member._id)
                }
                return acc
            },[]),
        }
    })

    if(!chats){
        return next(new ErrorHandler('No chats found',404))
    }
    return res.status(200).json({
        success: true,
        chats: transformedChats
    })
})



const getMyGroups = TryCatch(async(req,res,next)=>{
    const mychats = await Chat.find({
        groupChat:true,
        creator: req.user
    }).populate('members','name avatar')

    if(!mychats){
        return next(new ErrorHandler('No group chats found',404))
    }

    const groups = mychats.map(({members,_id,groupChat,name})=>({
        _id,
        groupChat,
        name,
        avatar: members.slice(0,3).map(({avatar})=>avatar.url)
    }))
    
    return res.status(200).json({
        success: true,
        groups
    })


})

export { newGroupChat,getMyChats,getMyGroups }