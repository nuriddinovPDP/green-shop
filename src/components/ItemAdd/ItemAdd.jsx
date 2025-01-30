import React from "react";
import plant from "../../../public/plant2.png";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ItemAdd() {
  return (
    <li className="li2 max-w-[586px] bg-[#FBFBFB] pt-[37px] flex justify-between items-center pr-[30px] pb-[46px]">
      <img src={plant} width={252} height={252} alt="" />
      <div className="li3">
        <p className="ml-[140px] max-w-[150px] font-[900] text-[18px] font-cera text-[#3D3D3D]">
          SUMMER CACTUS{" "}
          <span className="font-[900] text-[18px] font-sans text-[#3D3D3D]">
            &
          </span>{" "}
          SUCCULENTS
        </p>
        <p className="mt-[10px] text-[#727272] max-w-[292px] font-[400] text-[14px] font-cera mb-[15px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants
        </p>
        <NavLink
          className={
            "flex items-center gap-[5px] w-[140px] h-[40px] bg-[#46A358] text-[#fff] font-cera font-[400] text-[16px] contet-center pl-[25px] rounded-[4px]"
          }
        >
          Find More <FaArrowRightLong />
        </NavLink>
      </div>
    </li>
  );
}
