import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { schema } from "../../validationSchemas";
import { getServerSession } from "next-auth";
import authOption from "@/app/auth/authOption";
export async function GET(request = NextRequest) {
  const issue = await prisma.issue.findMany();
  return NextResponse.json(issue);
}
export async function POST(request: NextRequest) {

  // const session =  await getServerSession(authOption)
  // if(!session)
  //   return NextResponse.json({},{status:401})
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newIssue = await prisma.issue.create({
    data: { title: body.title, decription: body.decription },
  });
  return NextResponse.json(newIssue, { status: 201 });
}
