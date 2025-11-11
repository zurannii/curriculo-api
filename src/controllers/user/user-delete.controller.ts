import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "./prisma-client";

class UserDeleteController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ message: "ID inválido ou não fornecido." });
    }

    const userId = parseInt(id);

    try {
      await prisma.user.delete({
        where: { id: userId }, 
      });
      return res.status(204).send(); 
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}

export default new UserDeleteController();