import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const schema = z.object({
  title: z.string().min(1,"Tiltle is required").max(255),
  decription: z.string().min(1,"Decription is required"),
});
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newIssue = await prisma.issue.create({
    data: { title: body.title, decription: body.decription },
  });
  return NextResponse.json(newIssue, { status: 201 });
}
