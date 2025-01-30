import React from "react";
import logo from "../../../public/logo.svg";
import { CiLocationOn } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
export default function FootTop() {
  return (
    <div className="div8 flex items-center bg-[#EDF6EF] justify-around pt-[27px] pl-[23px] pb-[26px] border border-[#D7E9DA]">
      <img src={logo} className="w-[150px] h-[34px]" alt="" />
      <div className="flex gap-[9px] items-center">
        <CiLocationOn className="text-[#46A358] text-[26px]" />
        <p className="max-w-[176px] text-[#3D3D3D] text-[14px] font-[400] font-cera">
          70 West Buckingham Ave. Farmingdale, NY 11735
        </p>
      </div>

      <span className="flex items-center gap-[10px] text-[#3D3D3D] text-[14px] font-sans font-[400]">
        <GoMail className="text-[#46A358] text-[20px]" />
        contact@greenshop.com
      </span>
      <span className="flex items-center gap-[10px] text-[#3D3D3D] font-[400] font-sans">
        <BsTelephone className="text-[#46A358] text-[20px] " />
        +88 01911 717 490
      </span>
    </div>
  );
}
