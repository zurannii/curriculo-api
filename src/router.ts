import { Router } from "express";

import userGetAllController from "./controllers/user/user-getAll.controller";
import userCreateController from "./controllers/user/user-create.controller";
import userGetOneController from "./controllers/user/user-getOne.controller";
import userUpdateController from "./controllers/user/user-update.controller";
import userDeleteController from "./controllers/user/user-delete.controller";

import experienceCreateController from "./controllers/professional_experience/experience-create.controller";
import experienceUpdateController from "./controllers/professional_experience/experience-update.controller";
import experienceDeleteController from "./controllers/professional_experience/experience-delete.controller";

import educationCreateController from "./controllers/education/education-create.controller";
import educationUpdateController from "./controllers/education/education-update.controller";
import educationDeleteController from "./controllers/education/education-delete.controller";

import projectCreateController from "./controllers/project/project-create.controller";
import projectUpdateController from "./controllers/project/project-update.controller";
import projectDeleteController from "./controllers/project/project-delete.controller";

import skillCreateController from "./controllers/skills/skill-create.controller";
import skillUpdateController from "./controllers/skills/skill-update.controller";
import skillDeleteController from "./controllers/skills/skill-delete.controller";

import certificationCreateController from "./controllers/certification/certification-create.controller";
import certificationUpdateController from "./controllers/certification/certification-update.controller";
import certificationDeleteController from "./controllers/certification/certification-delete.controller";

import languageCreateController from "./controllers/language/language-create.controller";
import languageUpdateController from "./controllers/language/language-update.controller";
import languageDeleteController from "./controllers/language/language-delete.controller";

const appRouter = Router();

appRouter.get("/users", userGetAllController.handle);
appRouter.post("/users", userCreateController.handle);
appRouter.get("/users/:id", userGetOneController.handle);
appRouter.put("/users/:id", userUpdateController.handle);
appRouter.delete("/users/:id", userDeleteController.handle);

appRouter.post("/users/:userId/experiences", experienceCreateController.handle);
appRouter.put("/experiences/:expId", experienceUpdateController.handle);
appRouter.delete("/experiences/:expId", experienceDeleteController.handle);

appRouter.post("/users/:userId/educations", educationCreateController.handle);
appRouter.put("/educations/:id", educationUpdateController.handle);
appRouter.delete("/educations/:id", educationDeleteController.handle);

appRouter.post("/users/:userId/projects", projectCreateController.handle);
appRouter.put("/projects/:id", projectUpdateController.handle);
appRouter.delete("/projects/:id", projectDeleteController.handle);

appRouter.post("/users/:userId/skills", skillCreateController.handle);
appRouter.put("/skills/:id", skillUpdateController.handle);
appRouter.delete("/skills/:id", skillDeleteController.handle);

appRouter.post("/users/:userId/certifications", certificationCreateController.handle);
appRouter.put("/certifications/:id", certificationUpdateController.handle);
appRouter.delete("/certifications/:id", certificationDeleteController.handle);

appRouter.post("/users/:userId/languages", languageCreateController.handle);
appRouter.put("/languages/:id", languageUpdateController.handle);
appRouter.delete("/languages/:id", languageDeleteController.handle);

export default appRouter;