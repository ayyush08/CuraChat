export const sampleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"]
        ,
        name: "John Doe 2",
        _id: "2",
        groupChat: true,
        members: ["1", "2"],
    }
]


export const sampleUsers = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe 2",
        _id: "2",
    }
]

export const sampleNotifications = [
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Doe",

        },
        _id: "1",
    },
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Doe 2",

        },
        _id: "2",
    }
]

export const sampleMessages = [
    {
        attachments: [
            {
                public_id: "sample",
                url: "https://www.w3schools.com/howto/img_avatar.png"
            }
        ],
        content:"Something here",
        _id: "adakndknfkanfk",
        sender:{
            _id: "3",
            name: "John Doe",
        },
        chat: "chat._id",
        createdAt: "2021-10-10T10:10:10.000Z",
    },
    {
        attachments: [
            {
                public_id: "sample 2",
                url: "https://www.w3schools.com/howto/img_avatar.png"
            }
        ],
        content:"Something here 2",
        _id: "1",
        sender:{
            _id: "1",
            name: "John Doe",
        },
        chat: "chat._id",
        createdAt: "2021-10-10T10:10:10.000Z",
    }
]