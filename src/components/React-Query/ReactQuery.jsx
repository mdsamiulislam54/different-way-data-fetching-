import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../../utilitis/getFetchData";

const ReactQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  return data.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <p>{item.email}</p>
      </div>
    );
  });
};

export default ReactQuery;
