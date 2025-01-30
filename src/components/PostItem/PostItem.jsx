import React from "react";
import img from "../../../public/img.png";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function PostItem() {
  return (
    <li className="max-w-[268px] bg-[#FBFBFB]">
      <img src={img} alt="" />
      <div className="pl-[12px] pr-[12px] pb-[12px] pt-[10px]">
        <span className="font-cera font-[500] text-[14px] text-[#46A358]">
          September 12 I Read in 6 minutes
        </span>
        <p className="text-[20px] font-cera font-[700] text-[#3D3D3D] max-w-[189px] mt-[4px] mb-[4px]">
          Cactus <span className="font-sans">&</span> Succulent Care Tips
        </p>
        <p className="text-[14px] font-[400] font-cera text-[#727272] max-w-[242px] mb-[9px]">
          Cacti are succulents are easy care plants for any home or patio.{" "}
        </p>
        <NavLink
          className={
            "flex items-center gap-[6px] text-[#3D3D3D] font-cera font-[500] text-[14px]"
          }
        >
          Read More <FaArrowRightLong />
        </NavLink>
      </div>
    </li>
  );
}
