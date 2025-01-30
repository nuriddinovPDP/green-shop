import React from "react";
import CardItem from "../CardItem/CardItem";

export default function CardProducts() {
  return (
    <div className="w-[782px] mt-[51px]">
      <div className="flex pr-[134px] justify-between border-b-[1px] border-b-[#A3D1AC] pb-[11px]">
        <p className="text-[16px] font-[500] font-cera text-[#3D3D3D] mr-[115px]">
          Products
        </p>
        <p className="text-[16px] font-[500] font-cera text-[#3D3D3D]">Price</p>
        <p className="text-[16px] font-[500] font-cera text-[#3D3D3D]">
          Quantity
        </p>
        <p className="text-[16px] font-[500] font-cera text-[#3D3D3D]">Total</p>
      </div>
      <ul className="mt-[11px] flex flex-col  content-center gap-[10px]">
        <CardItem />
        <CardItem />
        <CardItem />
      </ul>
    </div>
  );
}
