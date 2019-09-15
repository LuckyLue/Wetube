import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import {
    userRouter
} from "./router"

const app = express();

const PORT = 4000;

const handleProfile = (req, res) => res.send("You are on Profile");

const handleHome = (req, res) => res.send("Hello From my ass");

const handleListening = () => console.log(`Listening on http://localhost:${PORT}`);

//Register middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan("dev"));
//Middleware for security
app.use(helmet());

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.use("/user", userRouter);

export default app;