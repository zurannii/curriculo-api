import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { userCreateDto } from "../../dto/user.dto";

const prisma = new PrismaClient;

class UserCreateController {
    async handle(req: Request, res: Response) {
       const body = userCreateDto.safeParse(req.body);

       if (!body.success) {
          return res.status(400).json(body.error);
       }

        return res.send(body);
  };
}

export default new UserCreateController();