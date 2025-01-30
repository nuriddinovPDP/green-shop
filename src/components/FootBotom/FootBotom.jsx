import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import img from "../../../public/img.svg";
import img2 from "../../../public/amexp.png";

import { SiVisa } from "react-icons/si";

export default function FootBotom() {
  return (
    <div className="div4 pl-[25px] pt-[33px] pb-[29px] bg-[#FBFBFB]">
      <div className="div7">
        <div className="w-[110px]">
          <p className="mb-[8px] text-[#3D3D3D] text-[18px] font-[700]">
            My Account
          </p>
          <ul className="flex flex-col gap-[10px]">
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                My Account
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                Our stores
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                Contact us
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                Career
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                Specials
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-[137px]">
          <p className="mb-[8px] text-[#3D3D3D] text-[18px] font-[700]">
            Help & Guide
          </p>
          <ul className="flex flex-col gap-[10px]">
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                Help Center
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                How to Buy
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                Shipping & Delivery
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                Product Policy
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                How to Return
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-[93px]">
          <p className="mb-[8px] text-[#3D3D3D] text-[18px] font-[700]">
            Categories{" "}
          </p>
          <ul className="flex flex-col gap-[10px]">
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                House Plants
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                Potter Plants
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                Seeds
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                Small Plants
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                className={"font-[400] font-cera text-[#3D3D3D] text-[14px]"}
              >
                Accessories
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div>
          <p className="text-[18px] font-[700] font-cera text-[#3D3D3D] mb-[20px]">
            Social Media
          </p>
          <ul className="flex gap-[10px] items-center">
            <li className="">
              <NavLink className={""}>
                <FaFacebookF className="border-[2px] text-[15px]  pl-[11px] rounded-[4px] pr-[11px] border-[#D5E8D9] w-[40px] text-[#8CC397] h-[40px]" />
              </NavLink>
            </li>
            <li className="">
              <NavLink className={""}>
                <FaInstagram className="border-[2px] text-[35px]  pl-[11px] rounded-[4px] pr-[11px] border-[#D5E8D9] w-[40px] text-[#8CC397] h-[40px]" />
              </NavLink>
            </li>{" "}
            <li className="">
              <NavLink className={""}>
                <FaTwitter className="border-[2px] text-[25px]  pl-[11px] rounded-[4px] pr-[11px] border-[#D5E8D9] w-[40px] text-[#8CC397] h-[40px]" />
              </NavLink>
            </li>
            <li className="">
              <NavLink className={""}>
                <FaLinkedin className="border-[2px] text-[25px]  pl-[11px] rounded-[4px] pr-[11px] border-[#D5E8D9] w-[40px] text-[#8CC397] h-[40px]" />
              </NavLink>
            </li>{" "}
            <li className="">
              <NavLink className={""}>
                <FaYoutube className="border-[2px] text-[25px]  pl-[11px] rounded-[4px] pr-[11px] border-[#D5E8D9] w-[40px] text-[#8CC397] h-[40px]" />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mt-[33px]">
          <p className="text-[18px] font-[700] font-cera text-[#3D3D3D]">
            Social Media
          </p>
          <ul className="flex items-center gap-[20px]">
            <li>
              <NavLink>
                {" "}
                <span className="text-[#022F82] text-[20px] font-[700]">
                  Pay
                </span>
                <span className="text-[#0198DC] text-[20px] font-[700]">
                  Pal
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={img} width={50} height={30} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <SiVisa className="w-[50px] h-[50px] text-[#0E4495  ]" />
              </NavLink>
            </li>
            <li>
              <NavLink>
                <img src={img2} width={50} height={40} alt="" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
