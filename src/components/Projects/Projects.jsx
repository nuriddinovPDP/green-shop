import React from "react";
import Category from "../Category/Category";
import Item from "../Item/Item";
import { NavLink, Outlet } from "react-router-dom";

export default function Projects() {
  return (
    <div className="mt-[50px] mb-[219px]">
      <div className="container">
        <div className="flex gap-[50px]">
          <Category />
          <div className="flex flex-col">
            {/* Main Container */}
            <div className="flex justify-between items-center w-full mb-[31px] gap-[350px]">
              {/* Nav Links */}
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

              {/* Sorting Select */}
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

            {/* Content */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
