import { prisma } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res
      .status(400)
      .json({ message: `Method ${req.method} not allowed. Please use GET` });

  const quotes = await prisma.quote.findMany();

  const randomIndex = Math.floor(Math.random() * quotes.length);

  const randomQuote = quotes[randomIndex];

  res.status(200).json({ quote: randomQuote });
}
