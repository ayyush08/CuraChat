import User from "../models/user.model.js";
import Message from '../models/message.model.js'
import cloudinary from "../lib/cloudinary";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({
            _id: {
                $ne: loggedInUserId,
            }
        }).select('-password')

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}

//Find all the messages between two users
export const getMessages = async (req, res) => {
    try {
        const { id : userToChatId } = req.params;
        const senderId = req.user._id;

        const messages = await Message.find({
            $or:[
                {
                    senderId: senderId,
                    receiverId: userToChatId
                },
                {
                    senderId: userToChatId,
                    receiverId: senderId
                }
            ]
        })

        if(!messages){
            return res.status(404).json({message: "No messages found"});
        }

        res.status(200).json(messages);

    } catch (error) {
        console.error("Error in getMessages controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}


export const sendMessage = async (req, res) => {
    try {
        const {text,image} = req.body;
        const senderId = req.user._id;
        const { id : receiverId } = req.params;

        let imageUrl;
        if(image){
            const upload = await cloudinary.uploader.upload(image);
            imageUrl = upload.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl
        })
        await newMessage.save();

        //realtime functionality


        res.status(200).json(newMessage);

    } catch (error) {
        console.error("Error in sendMessage controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
}