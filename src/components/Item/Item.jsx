import React, { useState } from "react";
import img from "../../../public/image 1.svg";
import basket from "../../assets/basket.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Item({ data }) {
  const [isLike, setIsLike] = useState(false);
  return (
    <li className="relative max-w-[258px] group p-4 border-gray-200 border-t-[3px] border-t-white overflow-hidden hover:border-t-[3px] hover:border-t-[#46A358]">
      {" "}
      <img src={img} alt="Barberton Daisy" className="w-full h-auto mb-4" />
      <p className="font-[400] text-[16px] font-cera text-[#3D3D3D] mb-[8px]">
        {data?.name}
      </p>
      <span className="font-[700] text-[18px] font-cera text-[#46A358]">
        <span className="font-[700] text-[18px] font-sans text-[#46A358]">
          $
        </span>
        {data?.price}
      </span>
      <div className="absolute inset-0 mt-[120px] bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex space-x-4">
          <NavLink
            className="bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200"
            to={`/shop/${data?._id}`}
          >
            <img src={basket} alt="" />
          </NavLink>

          <button
            onClick={() => setIsLike(!isLike)}
            className="bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200"
          >
            {isLike ? (
              <FaHeart className="text-red-600 text-[20px]" />
            ) : (
              <FaRegHeart className="text-[20px]" />
            )}
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200">
            <IoSearchSharp className="text-[25px] text-[#3D3D3D]" />
          </button>
        </div>
      </div>
    </li>
  );
}
