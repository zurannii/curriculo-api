import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { experienceUpdateDto } from "../../dto/experience.dto";

const prisma = new PrismaClient();

class ExperienceUpdateController {
  async handle(req: Request, res: Response) {
    const { expId } = req.params;
    
    if (!expId || isNaN(parseInt(expId))) {
      return res.status(400).json({ message: "ID da experiência inválido." });
    }

    const body = experienceUpdateDto.safeParse(req.body);

    if (!body.success) {
      return res.status(400).json(body.error);
    }

    try {
      const updatedExperience = await prisma.professionalExperience.update({
        where: { id: parseInt(expId) },
        data: body.data,
      });
      return res.json(updatedExperience);
    } catch (error: any) {
      if (error.code === 'P2025') {
         return res.status(404).json({ message: "Experiência não encontrada." });
      }
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}

export default new ExperienceUpdateController();