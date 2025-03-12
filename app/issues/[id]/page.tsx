import { prisma } from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import IssueAction from "./IssueAction";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOption from "@/app/auth/authOption";
import AssigneeSelect from "./AssigneeSelect";

interface Props {
  params: { id: string };
}
const IsuuesDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOption);
  if (typeof params.id !== "string") notFound();

  const issues = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issues) return notFound;

  return (
    <Grid columns={{ initial: "1", md: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issues} />
      </Box>
      <Box>
        <Flex direction="column" gap="4">
          <EditIssueButton issueId={issues.id} />
          <DeleteIssueButton issueId={issues.id} />
          <AssigneeSelect />
        </Flex>
      </Box>
      {/* {session && <Box>
        <Flex direction="column" gap="4">
          <EditIssueButton issueId={issues.id} />
          <DeleteIssueButton issueId={issues.id} />
          <AssigneeSelect />
        </Flex>
      </Box>} */}
      <IssueAction />
    </Grid>
  );
};

export default IsuuesDetailPage;
