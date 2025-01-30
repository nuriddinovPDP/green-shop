import React from "react";
import ItemAdd from "../ItemAdd/ItemAdd";

export default function Add({ data }) {
  return (
    <div className="mb-[100px]">
      <div className="container">
        <div>
          <ul className="div3 flex gap-[30px]">
            <ItemAdd />
            <ItemAdd />
          </ul>
        </div>
      </div>
    </div>
  );
}
