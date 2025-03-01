import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
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
      <Card className="prose" mt='4'>
        <ReactMarkdown>{issues.decription}</ReactMarkdown>
      </Card>
      <Button mt='3'>
        <Link href={"/issues"}>Back</Link>
      </Button>
    </div>
  );
};

export default IsuuesDetailPage;
