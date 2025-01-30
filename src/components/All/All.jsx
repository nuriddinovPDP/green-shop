import React from "react";
import Item from "../Item/Item";
import { useLoaderData } from "react-router-dom";

export default function All() {
  const data = useLoaderData();
  console.log(data);
  return (
    <ul className="max-w-[900px] flex flex-wrap gap-[37px]">
      {data?.map((el) => (
        <Item data={el} />
      ))}
    </ul>
  );
}
