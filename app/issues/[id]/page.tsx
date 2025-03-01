import { IssueStatusBadge } from "@/app/components";
import { prisma } from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import IssueAction from "./IssueAction";

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
      <Card className="prose" mt="4">
        <ReactMarkdown>{issues.decription}</ReactMarkdown>
      </Card>
      <IssueAction />
    </div>
  );
};

export default IsuuesDetailPage;
