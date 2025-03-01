import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import IssueAction from "../IssueAction";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
