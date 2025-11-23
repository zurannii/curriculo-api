import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { certificationUpdateDto } from "../../dto/certification.dto";

const prisma = new PrismaClient();

class CertificationUpdateController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ message: "ID inválido." });
    }

    const body = certificationUpdateDto.safeParse(req.body);

    if (!body.success) {
      return res.status(400).json(body.error);
    }

    try {
      const updatedCertification = await prisma.certification.update({
        where: { id: parseInt(id) },
        data: body.data,
      });
      return res.json(updatedCertification);
    } catch (error: any) {
      if (error.code === 'P2025') {
        return res.status(404).json({ message: "Certificação não encontrada." });
      }
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
}

export default new CertificationUpdateController();