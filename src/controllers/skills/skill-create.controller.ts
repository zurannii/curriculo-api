import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { skillCreateDto } from "../../dto/skill.dto";

const prisma = new PrismaClient();

class SkillCreateController {
  async handle(req: Request, res: Response) {
    const { userId } = req.params;

    if (!userId || isNaN(parseInt(userId))) {
      return res.status(400).json({ message: "ID do usuário inválido." });
    }

    const body = skillCreateDto.safeParse(req.body);

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

      const newSkill = await prisma.skill.create({
        data: {
          ...body.data,
          userId: parseInt(userId),
        },
      });

      return res.status(201).json(newSkill);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}

export default new SkillCreateController();