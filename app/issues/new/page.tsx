'use client'
import dynamic from "next/dynamic";
import IssueFormSkelton from "../_components/IssueFormSkelton";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkelton />,
});

const NewIssuePage = () => {
  return (
    <div>
      <IssueForm />
    </div>
  );
};

export default NewIssuePage;
