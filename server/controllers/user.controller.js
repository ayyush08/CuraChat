import { User } from "../models/user.model.js";
import { sendToken } from "../utils/features.js";

const dummyUser = {
    name: 'John Doe',
    username: 'johndoe',
    password: 'password',
    bio: 'I am a dummy user' ,
    avatar:{
        public_id: '123456',
        url: 'https://res.cloudinary.com/dummy/image/upload/v1627284473/123456.jpg'
    }   
}
const registerUser = async (req, res) => {
    const {name, username, password, bio} = req.body;

    const user = await User.create({
        name:dummyUser.name,
        username:dummyUser.username,
        password:dummyUser.password,
        bio:dummyUser.bio,
        avatar:dummyUser.avatar

    })

    sendToken(res,user,201,'User created successfully')
}



export { registerUser }