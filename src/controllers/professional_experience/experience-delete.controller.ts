import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class ExperienceDeleteController {
  async handle(req: Request, res: Response) {
    const { expId } = req.params;

    if (!expId || isNaN(parseInt(expId))) {
      return res.status(400).json({ message: "ID da experiência inválido." });
    }

    try {
      await prisma.professionalExperience.delete({
        where: { id: parseInt(expId) },
      });
      return res.status(204).send(); 
    } catch (error: any) {
      if (error.code === 'P2025') {
         return res.status(404).json({ message: "Experiência não encontrada." });
      }
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}

export default new ExperienceDeleteController();