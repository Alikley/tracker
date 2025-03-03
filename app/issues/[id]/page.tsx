import { IssueStatusBadge } from "@/app/components";
import { prisma } from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import IssueAction from "./IssueAction";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
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
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{issues.title}</Heading>
        <Flex className="space-x-3" my={"2"}>
          <IssueStatusBadge status={issues.status} />
          <Text>{issues.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <ReactMarkdown>{issues.decription}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issues.id}/edit`}>Edit Issue</Link>
          
        </Button>
      </Box>
      <IssueAction />
    </Grid>
  );
};

export default IsuuesDetailPage;
