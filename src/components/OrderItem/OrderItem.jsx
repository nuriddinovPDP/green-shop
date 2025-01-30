import React from "react";
import img from "../../../public/image 1.svg";

export default function OrderItem() {
  return (
    <li className="bg-[#fff] flex items-center w-[405px] justify-between pr-[31px]">
      <div className="flex items-center gap-[14px]">
        <img src={img} width={70} height={70} alt="" />
        <div className="flex flex-col">
          <p>Barberton Daisy</p>
          <div className="flex content-center gap-[5px]">
            <span className="text-[#A5A5A5] text-[15px] font-[400] font-cera">
              SKU:
            </span>
            <span className="text-[#727272] text-[15px] font-[400] font-cera">
              1995751877966
            </span>
          </div>
        </div>
      </div>
      <p className="text-[14px] font-[400] text-[#727272]">(x 2)</p>
      <p className="text-[16px] font-sans font-[500] text-[#46A358]">$119.00</p>
    </li>
  );
}
