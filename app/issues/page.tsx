"use client";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import ShowIssue from "../components/ShowIssue";

const IssuesPage = () => {
  return (
    <div>
      {/* <ShowIssue /> */}
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
