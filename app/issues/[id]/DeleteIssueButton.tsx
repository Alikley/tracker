import { Button } from "@radix-ui/themes";
import Link from "next/link";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <div>
      <Button color="red">
        {/* <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link> */}
        Delete Issue
      </Button>
    </div>
  );
};

export default DeleteIssueButton;
