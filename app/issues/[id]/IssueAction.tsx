import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssueAction = () => {
  return (
    <div>
      <div>
        <Button mt="3">
          <Link href={"/issues"}>Back</Link>
        </Button>
      </div>
    </div>
  );
};

export default IssueAction;
