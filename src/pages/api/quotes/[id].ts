import { prisma } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method !== "GET")
    return res
      .status(400)
      .json({ message: `Method ${req.method} not allowed. Please use GET` });

  const quote = await prisma.quote.findUnique({
    where: {
      id: parseInt(id as string),
    },
  });

  if (!quote) {
    return res.status(404).json({ message: "Quote not found" });
  }

  res.status(200).json({ quote });
}
