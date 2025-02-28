import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
interface Props {
  params: { id: string };
}
const IsuuesDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== "number") notFound();

  const issues = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issues) return notFound;

  return (
    <div>
      <h1>{issues.title}</h1>
      <h1>{issues.decription}</h1>
      <h1>{issues.status}</h1>
      <h1>{issues.createdAt.toDateString()}</h1>
    </div>
  );
};

export default IsuuesDetailPage;
