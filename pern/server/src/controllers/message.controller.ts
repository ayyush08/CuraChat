import { Request, Response } from 'express';
import prisma from '../db/prisma.js';

const sendMessage = async (req: Request, res: Response): Promise<any> => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;

        const senderId = req.user.id;

        let conversation = await prisma.conversation.findFirst({
            where: {
                participantIds: {
                    hasEvery: [senderId, receiverId]
                }
            }
        })

        //check if conversation has started before if not create a new one
        if (!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    participantIds: {
                        set: [senderId, receiverId]
                    }
                }
            })
        }

        //create a new message
        const newMessage = await prisma.message.create({
            data: {
                senderId,
                body: message,
                conversationId: conversation.id
            }
        })

        //add the message to the conversation
        if (newMessage) {
            conversation = await prisma.conversation.update({
                where: {
                    id: conversation.id
                },
                data: {
                    messages: {
                        connect: {
                            id: newMessage.id
                        }
                    }
                }
            })
        }

        res.status(201).json(newMessage)

        //socket io implementation

    } catch (error: any) {
        console.error("Error in sendMessage: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}




const getMessages = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user.id;

        const conversation = await prisma.conversation.findFirst({
            where: {
                participantIds: {
                    hasEvery: [senderId, userToChatId],
                },
            },
            include: {
                messages: {
                    orderBy: {
                        createdAt: "asc",
                    },
                },
            },
        });

        if (!conversation) {
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.messages);
    } catch (error: any) {
        console.error("Error in getMessages: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}




const getUsersForSidebar = async (req: Request, res: Response): Promise<any> => {
    try {
		const authUserId = req.user.id;

		const users = await prisma.user.findMany({
			where: {
				id: {
					not: authUserId,
				},
			},
			select: {
				id: true,
				fullName: true,
				profilePic: true,
			},
		});

		res.status(200).json(users);
	} catch (error: any) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}



export { getMessages, getUsersForSidebar, sendMessage }