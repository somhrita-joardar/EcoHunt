import cookieParser from 'cookie-parser'
import express from 'express'   
import cors from 'cors';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    // origin: "http://localhost:5173",
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({
    limit:"16kb",    
    extended:true
}))
app.use(express.static("public"))
app.use(cookieParser())

// console.log(process.env.CLOUDINARY_API_KEY);
//router import 

import userRouter from "./routes/user.route.js"
import courseRouter from "./routes/course.route.js"

//router decleration

app.use("/api/v1/users", userRouter)
app.use("/api/v1/courses", courseRouter)




export { app }