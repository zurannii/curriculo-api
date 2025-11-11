import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { experienceCreateDto } from "../../dto/experience.dto";

const prisma = new PrismaClient();

class ExperienceCreateController {
  async handle(req: Request, res: Response) {
    const { userId } = req.params;
    
   
    if (!userId || isNaN(parseInt(userId))) {
      return res.status(400).json({ message: "ID do usuário inválido." });
    }

    const body = experienceCreateDto.safeParse(req.body);

    if (!body.success) {
      return res.status(400).json(body.error);
    }

    try {
   
      const user = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
      });
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      const newExperience = await prisma.professionalExperience.create({
        data: {
          ...body.data,
          userId: parseInt(userId),
        },
      });

      return res.status(201).json(newExperience);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}

export default new ExperienceCreateController();