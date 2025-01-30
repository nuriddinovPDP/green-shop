import React, { useState } from "react";
import Category from "../Category/Category";
import Item from "../Item/Item";
import { NavLink, Outlet } from "react-router-dom";

export default function Projects() {
  const [num, setNum] = useState("");
  return (
    <div className="mt-[50px] mb-[149px]">
      <div className="container">
        <div className="div2 flex gap-[50px]">
          <Category />
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full mb-[31px] ">
              <ul className="flex gap-[40px]">
                <li>
                  <NavLink
                    to={""}
                    className={({ isActive }) =>
                      `text-[16px] text-[#3D3D3D] font-[400] font-cera ${
                        isActive
                          ? "font-[700] text-[#46A358] border-b-[3px] border-b-[#46A358]"
                          : ""
                      }`
                    }
                  >
                    All Plants
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"arrivals"}
                    className={({ isActive }) =>
                      `text-[16px] text-[#3D3D3D] font-[400] font-cera ${
                        isActive
                          ? "font-[700] text-[#46A358] border-b-[3px] border-b-[#46A358]"
                          : ""
                      }`
                    }
                  >
                    Arrivals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"sale"}
                    className={({ isActive }) =>
                      `text-[16px] text-[#3D3D3D] font-[400] font-cera ${
                        isActive
                          ? "font-[700] text-[#46A358] border-b-[3px] border-b-[#46A358]"
                          : ""
                      }`
                    }
                  >
                    Sale
                  </NavLink>
                </li>
              </ul>

              <div className="flex items-center">
                <span className="font-[400] text-[15px] text-[#3D3D3D] font-cera">
                  Short by:
                </span>
                <select className=" border-gray-300 rounded px-2 py-1 text-gray-600">
                  <option>Default sorting</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <Outlet />
          </div>
        </div>
        <ul className="la gap-[10px] text-right flex justify-end items-center sm:justify-center lg:justify-end">
          <li>
            <NavLink
              onClick={() => setNum(1)}
              className={`pt-[7px] font-cera font-[300] text-[18px] pb-[7px] pl-[14px] pr-[14px] border rounded text-[#3D3D3D] ${
                num && num == 1
                  ? "bg-[#46A358] text-[#fff]"
                  : "bg-[#fff] text-[#3D3D3D]"
              }`}
            >
              1
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setNum(2)}
              className={`pt-[7px] font-cera font-[300] text-[18px] pb-[7px] pl-[14px] pr-[14px] border rounded text-[#3D3D3D] ${
                num && num == 2
                  ? "bg-[#46A358] text-[#fff]"
                  : "bg-[#fff] text-[#3D3D3D]"
              }`}
            >
              2
            </NavLink>
          </li>{" "}
          <li>
            <NavLink
              onClick={() => setNum(3)}
              className={`pt-[7px] font-cera font-[300] text-[18px] pb-[7px] pl-[14px] pr-[14px] border rounded text-[#3D3D3D] ${
                num && num == 3
                  ? "bg-[#46A358] text-[#fff]"
                  : "bg-[#fff] text-[#3D3D3D]"
              }`}
            >
              3
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setNum(4)}
              className={`pt-[7px] font-sans font-[300] text-[18px] pb-[7px] pl-[14px] pr-[14px] border rounded text-[#3D3D3D] ${
                num && num == 4
                  ? "bg-[#46A358] text-[#fff]"
                  : "bg-[#fff] text-[#3D3D3D]"
              }`}
            >
              4
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setNum(">")}
              className={`pt-[7px] font-sans font-[300] text-[18px] pb-[7px] pl-[14px] pr-[14px] border rounded text-[#3D3D3D]  ${
                num && num == ">"
                  ? "bg-[#46A358] text-[#fff]"
                  : "bg-[#fff] text-[#3D3D3D]"
              }`}
            >
              {">"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
