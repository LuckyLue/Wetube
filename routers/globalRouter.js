import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videocontroller";
import {
  join,
  login,
  logout,
  getJoin,
  postJoin,
  postLogin,
  getLogin
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

export default globalRouter;
