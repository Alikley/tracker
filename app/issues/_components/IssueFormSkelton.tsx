import { Box } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";


const IssueFormSkelton = () => {
  return (
    <div>
      <Box className="max-w-lg">
        <Skeleton height='2rem' />
        <Skeleton height="20rem" />
      </Box>
    </div>
  );
};

export default IssueFormSkelton;
