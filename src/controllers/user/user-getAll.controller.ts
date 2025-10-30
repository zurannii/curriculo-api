import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient;

class UserGetAllController {
    async handle(req: Request, res: Response) {
        const users = await prisma.user.findMany();

        return res.json(users);
  };
}

export default new UserGetAllController();