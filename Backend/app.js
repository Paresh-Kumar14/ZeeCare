import  express  from "express";
import {config} from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./Data/DbConnect.js";
import messageRouter from "./router/messageRouter.js"
import { ErrorMiddleware } from "./middleware/errorMiddleware.js";
import userRouter from "./router/userRouter.js"
import appointrouter from "./router/appointmentRouter.js"


const app = express();
config({path:"./config/.env"});

app.use(cors({
origin:[process.env.FRONTEND_URL , process.env.DASHBOARD_URL],
methods:["GET","POST","PUT","DELETE"],
credentials:true,
}));

app.use(cookieParser());
app.use(express.json()); 
app.use(express.urlencoded({ extended:true}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/",
}))
app.use("/api/v1/message",messageRouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/appointment",appointrouter)

dbConnection()

app.use(ErrorMiddleware)

export default app;