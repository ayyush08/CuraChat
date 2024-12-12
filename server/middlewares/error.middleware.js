const errorMiddleware = (error, req, res, next) => {
    error.message = error.message || "Internal Server Error"
    error.statusCode = error.statusCode || 500

    return res.status(error.statusCode).json({
        success: false,
        message: error.message
    })
}


const TryCatch = (received)=> async (req,res,next)=>{
    try{
        await received(req,res,next)
    }catch{
        next(error)
    }
}


export { errorMiddleware,TryCatch }