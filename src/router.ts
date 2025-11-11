import { Router } from "express";
import userGetAllController from "./controllers/user/user-getAll.controller";
import userCreateController from "./controllers/user/user-create.controller";


import userGetOneController from "./controllers/user/user-getOne.controller";
import userUpdateController from "./controllers/user/user-update.controller";
import userDeleteController from "./controllers/user/user-delete.controller";

const appRouter = Router();

appRouter.get("/users", userGetAllController.handle);
appRouter.post("/users", userCreateController.handle);
appRouter.get("/users/:id", userGetOneController.handle);
appRouter.put("/users/:id", userUpdateController.handle);
appRouter.delete("/users/:id", userDeleteController.handle);

export default appRouter;