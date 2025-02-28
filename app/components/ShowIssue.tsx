import React, { useEffect, useState } from "react";
import axios from "axios";
interface IsuueProps {
  id: number;
  title: string;
  decription: string;
}
const ShowIssue = () => {
  const [data, setData] = useState<IsuueProps[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/issues")
      .then((res) => {
        setData(res.data);
        // console.log(res.data)
      })
      .catch((error) => {
        console.log("there was an error: " + error);
      });
  }, []);

  return (
    <div>
      {data.map((issue) => (
        <h1 key={issue.id}>{issue.title}</h1>
      ))}
    </div>
  );
};

export default ShowIssue;
