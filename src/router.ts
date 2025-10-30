import { Router } from "express";
import userGetAllController from "./controllers/user/user-getAll.controller";
import userCreateController from "./controllers/user/user-create.controller";

const appRouter = Router();

appRouter.get("/users", userGetAllController.handle);
appRouter.post("/users", userCreateController.handle);

export default appRouter;