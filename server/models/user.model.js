import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    bio:{
        type:String,
        default:'',
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
},{
    timestamps:true
})

userSchema.pre('save',async function(next) {
    if(!this.isModified('password')){
        return next()
    }
    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    
    return await bcrypt.compare(password,this.password)
}


export const User =  mongoose.model('User',userSchema)
