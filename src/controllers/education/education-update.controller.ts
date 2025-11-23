import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { educationUpdateDto } from "../../dto/education.dto";

const prisma = new PrismaClient();

class EducationUpdateController {
  async handle(req: Request, res: Response) {
    const { id } = req.params; 

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ message: "ID inválido." });
    }

    const body = educationUpdateDto.safeParse(req.body);
    if (!body.success) return res.status(400).json(body.error);

    try {
      const updatedRecord = await prisma.education.update({
        where: { id: parseInt(id) },
        data: body.data,
      });
      return res.json(updatedRecord);
    } catch (error: any) {
      if (error.code === 'P2025') return res.status(404).json({ message: "Registro não encontrado." });
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}
export default new EducationUpdateController();