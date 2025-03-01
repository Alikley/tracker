import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
interface Props {
  params: { id: string };
}
const IsuuesDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== "string") notFound();

  const issues = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issues) return notFound;

  return (
    <div>
      <Heading>{issues.title}</Heading>
      <Flex className="space-x-3" my={"2"}>
        <IssueStatusBadge status={issues.status} />
        <Text>{issues.createdAt.toDateString()}</Text>
      </Flex>
      <Card>{issues.decription}</Card>
    </div>
  );
};

export default IsuuesDetailPage;
