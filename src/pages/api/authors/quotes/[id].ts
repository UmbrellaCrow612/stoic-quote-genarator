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

  const authorsQuotes = await prisma.author.findUnique({
    where: {
      id: parseInt(id as string),
    },
    include: {
      quotes: true,
    },
  });

  if (!authorsQuotes) {
    return res.status(404).json({ message: "authors quotes not found" });
  }

  res.status(200).json({ authorsQuotes });
}
