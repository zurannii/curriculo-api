import { Router } from "express";
import userGetAllController from "./controllers/user/user-getAll.controller";

const appRouter = Router();

appRouter.get("/", userGetAllController.handle);

export default appRouter;