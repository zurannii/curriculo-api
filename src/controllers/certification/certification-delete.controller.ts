import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class CertificationDeleteController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ message: "ID inválido." });
    }

    try {
      await prisma.certification.delete({
        where: { id: parseInt(id) },
      });
      return res.status(204).send();
    } catch (error: any) {
      if (error.code === 'P2025') {
        return res.status(404).json({ message: "Certificação não encontrada." });
      }
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}

export default new CertificationDeleteController();