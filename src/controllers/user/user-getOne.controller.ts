import { Request, Response } from "express";
import { prisma } from "./prisma-client";

class UserGetOneController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ message: "ID inválido ou não fornecido." });
    }

    const userId = parseInt(id); 

    try {
      const user = await prisma.user.findUnique({
        where: { id: userId }, 
       
        include: {
          experiences: true,
          education: true,
          projects: true,
          skills: true,
          certifications: true,
          languages: true,
        },
      });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}

export default new UserGetOneController();