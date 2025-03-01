import { Box, Card, Flex } from "@radix-ui/themes";
import IssueAction from "../IssueAction";
import { Skeleton } from "@/app/components";

const LoadingIssuesPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex className="space-x-3" my={"2"}>
        <Skeleton width="5rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
      <IssueAction />
    </Box>
  );
};

export default LoadingIssuesPage;
