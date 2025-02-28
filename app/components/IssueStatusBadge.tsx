import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";
interface props {
  status: Status;
}
const statusMap: Record<
  Status,
  { lable: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { lable: "Open", color: "red" },
  IN_PROGRESS: { lable: "In Progress", color: "violet" },
  CLOSED: { lable: "Close", color: "green" },
};
const IssueStatusBadge = ({ status }: props) => {
  return (
    <div>
      <Badge color={statusMap[status].color}>{statusMap[status].lable}</Badge>
    </div>
  );
};

export default IssueStatusBadge;
