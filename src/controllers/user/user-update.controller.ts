import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { userUpdateDto } from "../../dto/user.dto";
import { prisma } from "./prisma-client";

class UserUpdateController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const body = userUpdateDto.safeParse(req.body);

    // Validação do ID
    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ message: "ID inválido ou não fornecido." });
    }

    const userId = parseInt(id);

    if (!body.success) {
      return res.status(400).json(body.error);
    }

    try {
      const updatedUser = await prisma.user.update({
        where: { id: userId }, 
        data: body.data,
      });
      return res.json(updatedUser);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          return res.status(404).json({ message: "Usuário não encontrado." });
        }
        if (error.code === "P2002") {
          return res.status(409).json({ message: "Email já cadastrado." });
        }
      }
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}

export default new UserUpdateController();