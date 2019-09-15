import express from "express"

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", () => res.send("user edit"));
userRouter.get("/password", () => res.send("user password"));