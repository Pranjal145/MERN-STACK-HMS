import  express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnection from "./database/db.js";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import patientRouter from "./router/patientRouter.js";
import appointRouter from "./router/appointRouter.js";




const app= express();
app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5174' ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
);

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", patientRouter);
app.use("/api/v1/appoint", appointRouter);


dbConnection(); 

app.use(errorMiddleware);

export default app;
