import React from "react";
import img from "../../../public/image 1.svg";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

export default function SingleLeft() {
  return (
    <div className="flex items-center gap-[46px] max-w-[573px]">
      <ul className="flex flex-col gap-[16px]">
        <li>
          <NavLink>
            <img src={img} width={100} height={100} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink>
            <img src={img} width={100} height={100} alt="" />
          </NavLink>
        </li>{" "}
        <li>
          <NavLink>
            <img src={img} width={100} height={100} alt="" />
          </NavLink>
        </li>{" "}
        <li>
          <NavLink>
            <img src={img} width={100} height={100} alt="" />
          </NavLink>
        </li>
      </ul>
      <img src={img} className="relative" width={404} height={404} alt="" />
      <NavLink
        className={
          "absolute w-[30px] h-[30px] left-[615px] top-[230px] bg-[#FBFBFB] rounded-full pt-[7px] pl-[7px]"
        }
      >
        <IoSearch className="text-[#3D3D3D]" />
      </NavLink>
    </div>
  );
}
