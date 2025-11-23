import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { projectUpdateDto } from "../../dto/project.dto";

const prisma = new PrismaClient();

class ProjectUpdateController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ message: "ID inválido." });
    }

    const body = projectUpdateDto.safeParse(req.body);

    if (!body.success) {
      return res.status(400).json(body.error);
    }

    try {
      const updatedProject = await prisma.project.update({
        where: { id: parseInt(id) },
        data: body.data,
      });
      return res.json(updatedProject);
    } catch (error: any) {
      if (error.code === 'P2025') {
        return res.status(404).json({ message: "Projeto não encontrado." });
      }
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}

export default new ProjectUpdateController();