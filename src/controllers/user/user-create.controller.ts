import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { userCreateDto } from "../../dto/user.dto";
import { prisma } from "./prisma-client";

class UserCreateController {
    async handle(req: Request, res: Response) {
       const body = userCreateDto.safeParse(req.body);

       if (!body.success) {
          return res.status(400).json(body.error);
       }

       try {
         const newUser = await prisma.user.create({
            data: body.data,
         });
         return res.status(201).json(newUser);
       } catch (error) {
         if (
           error instanceof Prisma.PrismaClientKnownRequestError &&
           error.code === "P2002"
         ) {
            return res.status(409).json({ message: 'email já cadastrado.' });
         }
         return res.status(500).json({ message: 'erro interno do servidor.' });
       }
  }
}

export default new UserCreateController();