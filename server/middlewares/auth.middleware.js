import { TryCatch } from "./error.middleware.js";



const isAuthenticated = TryCatch(async(req, res, next) => {
        const token = req.cookies.token




        next()
    }
)

export { isAuthenticated }