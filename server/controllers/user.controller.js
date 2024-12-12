import { TryCatch } from "../middlewares/error.middleware.js";
import { User } from "../models/user.model.js";
import { sendToken } from "../utils/features.js";
import { ErrorHandler } from "../utils/utility.js";

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

const login = TryCatch(async (req, res,next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select('+password')

    if (!user) {
        return next(new ErrorHandler("Invalid Username",404))
    }

    const isPasswordMatch = await user.isPasswordCorrect(password)
    if(!isPasswordMatch){
        return next(new ErrorHandler("Invalid Password",401))
    }
    const loggedInUser = await User.findById(user._id)
    sendToken(res, loggedInUser, 200, `Welcome back ${user.name}`)
})

const getMyProfile = async (req, res) => {

}


export {
    registerUser,
    login,
    getMyProfile
}