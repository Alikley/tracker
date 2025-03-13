import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In_progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];

  return (
    <div>
      <Flex gap="4">
        {containers.map((continer) => (
          <Card key={continer.label}>
            <Flex direction="column" gap="4">
              <Link
                className="text-sm font-medium"
                href={`/issues/list?status=${continer.status}`}
              >
                {continer.label}
              </Link>
              <Text size="5" className="font-bold">
                {continer.value}
              </Text>
            </Flex>
          </Card>
        ))}
      </Flex>
    </div>
  );
};

export default IssueSummary;
