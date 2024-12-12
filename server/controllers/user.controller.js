import { User } from "../models/user.model.js";
import { sendToken } from "../utils/features.js";

const dummyUser = {
    name: 'John Doe',
    username: 'johndoe',
    password: '12345678',
    bio: 'I am a dummy user',
    avatar: {
        public_id: '123456',
        url: 'https://res.cloudinary.com/dummy/image/upload/v1627284473/123456.jpg'
    }
}
const registerUser = async (req, res) => {
    const { name, username, password, bio } = req.body;


    const user = await User.create({
        name,
        username,
        password,
        bio,
    })


    sendToken(res, user, 201, 'User created successfully')
}

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select('+password')

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"})
    }

    const isPasswordMatch = await user.isPasswordCorrect(password)
    if(!isPasswordMatch){
        return res.status(401).json({
            success:false,
            message:"Invalid credentials"
        })
    }
    const loggedInUser = await User.findById(user._id)
    sendToken(res, loggedInUser, 200, `Welcome back ${user.name}`)
}

const getMyProfile = async (req, res) => {

}


export {
    registerUser,
    login,
    getMyProfile
}