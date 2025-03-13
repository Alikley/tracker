import { Table } from "@radix-ui/themes";
import { prisma } from "@/prisma/client";
import { IssueStatusBadge, Link } from "@/app/components";
import IssueAction from "./IssueAction";
import { Issue, Status } from "@prisma/client";
import NextLink from "next/link";
import { ArrowUpIcon } from "@radix-ui/react-icons";
interface Props {
  searchParams: { status: Status; orderBy: keyof Issue };
}
const IssuesPage = async ({ searchParams }: Props) => {
  const columms: { label: string; value: keyof Issue; classNames?: string }[] =
    [
      { label: "Issue", value: "title" },
      { label: "Status", value: "status", classNames: "hidden md:table-cell" },
      {
        label: "Created",
        value: "createdAt",
        classNames: "hidden md:table-cell",
      },
    ];

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columms
    .map((column) => column.value)
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
    orderBy,
  });
  return (
    <div>
      <IssueAction />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columms.map((column) => (
              <Table.ColumnHeaderCell key={column.value}>
                <NextLink
                  href={{
                    query: {
                      status: searchParams.status,
                      orderBy: column.value,
                    },
                  }}
                >
                  {column.label}
                </NextLink>
                {column.value === searchParams.orderBy && (
                  <ArrowUpIcon className="inline" />
                )}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};
export const dynamic = "force-dynamic";

export default IssuesPage;
