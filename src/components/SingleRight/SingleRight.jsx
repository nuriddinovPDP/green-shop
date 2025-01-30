import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMinus,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function SingleRight({ data }) {
  const [size, setSize] = useState("s");
  const [count, setCount] = useState(1);
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="max-w-[574px]">
      <p className="text-[28px] font-[700] font-cera text-[#3D3D3D]">
        {data?.name}
      </p>
      <div className="flex items-center justify-between border-b-[2px] border-b-[#A3D1AC] pb-[13px] mb-[15px]">
        <p className="text-[#46A358] text-[22px] font-sans font-[700]">
          ${data?.price}
        </p>
        <div class="star-rating flex flex-row-reverse items-center content-center">
          <p className="ml-[11px] text-[15px] font-cera font-[400] text-[#3D3D3D]">
            19 Customer Review
          </p>
          <input type="radio" name="rating" id="star5" value="5" />
          <label for="star5" title="5 stars"></label>
          <input type="radio" name="rating" id="star4" value="4" />
          <label for="star4" title="4 stars"></label>
          <input type="radio" name="rating" id="star3" value="3" />
          <label for="star3" title="3 stars"></label>
          <input type="radio" name="rating" id="star2" value="2" />
          <label for="star2" title="2 stars"></label>
          <input type="radio" name="rating" id="star1" value="1" />
          <label for="star1" title="1 star"></label>
        </div>
      </div>

      <div className="mb-[24px]">
        <span className="text-[15px] font-[500] text-[#3D3D3D] font-cera">
          Short Description:
        </span>
        <p className="mt-[10px] text-[14px] font-[400] font-cera text-[#727272]">
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground.{" "}
        </p>
      </div>

      <div class="flex space-x-4 flex-col">
        <span class="font-[500] text-[20px] font-cera text-[#3D3D3D]">
          Size:
        </span>
        <div className="flex gap-[10px] content-center mt-[11px]">
          <button
            className={`w-[35px] h-[35px] pl-[8px] pr-[8px] rounded-full font-cera ${
              size == "s"
                ? "border-[1px] border-[#46A358] text-[18px] font-[700] text-[#46A358]"
                : "font-[500] text-[14px] text-[#727272] border-[1px] border-[#EAEAEA]"
            }`}
            onClick={() => setSize("s")}
          >
            S
          </button>
          <button
            className={`w-[35px] h-[35px] pl-[8px] pr-[8px] rounded-full font-cera ${
              size == "m"
                ? "border-[1px] border-[#46A358] text-[18px] font-[700] text-[#46A358]"
                : "font-[500] text-[14px] text-[#727272] border-[1px] border-[#EAEAEA]"
            }`}
            onClick={() => setSize("m")}
          >
            M
          </button>{" "}
          <button
            className={`w-[35px] h-[35px] pl-[8px] pr-[8px] rounded-full font-cera ${
              size == "l"
                ? "border-[1px] border-[#46A358] text-[18px] font-[700] text-[#46A358]"
                : "font-[500] text-[14px] text-[#727272] border-[1px] border-[#EAEAEA]"
            }`}
            onClick={() => setSize("l")}
          >
            L
          </button>{" "}
          <button
            className={`w-[35px] h-[35px] pl-[8px] pr-[8px] rounded-full font-cera ${
              size == "xl"
                ? "border-[1px] border-[#46A358] text-[18px] font-[700] text-[#46A358]"
                : "font-[500] text-[14px] text-[#727272] border-[1px] border-[#EAEAEA]"
            }`}
            onClick={() => setSize("xl")}
          >
            XL
          </button>
        </div>
      </div>
      <div className="mt-[29px] flex content-center items-center">
        <div className="flex content-center gap-[22px]">
          <button
            className="w-[33px] h-[38px] bg-[#46A358] rounded-[29px] text-[#fff] pl-[9px] text-[15px]"
            onClick={() => (count > 1 ? setCount(count - 1) : setCount(1))}
          >
            <FaMinus />
          </button>
          <span className="text-[#3D3D3D] text-[24px] font-sans font-[400]">
            {count}
          </span>

          <button
            className="w-[33px] h-[38px] bg-[#46A358] rounded-[29px] text-[#fff] pl-[9px] text-[15px]"
            onClick={() => setCount(count + 1)}
          >
            <FaPlus />
          </button>
        </div>
        <NavLink
          className={
            "text-[14px] font-[700] font-cera ml-[26px] pt-[11px] pb-[11px] pl-[32px] pr-[32px] text-[#FFFFFF] bg-[#46A358] rounded-[6px]"
          }
        >
          BUY NOW
        </NavLink>
        <NavLink
          to={"/shop"}
          className={
            "text-[14px] font-[700] font-cera ml-[26px] pt-[11px] pb-[11px] pl-[32px] pr-[32px] border-[1px] border-[#46A358] bg-[#FFFFFF] text-[#46A358] rounded-[6px]"
          }
        >
          ADD TO CARD
        </NavLink>
        <button
          className="ml-[10px] pt-[12px] pb-[12px] pl-[12px] pr-[12px] border-[1px] border-[#46A358] rounded-[6px]"
          onClick={() => setIsLike(!isLike)}
        >
          {isLike ? (
            <FaHeart className="text-[#46A358] text-[20px]" />
          ) : (
            <FaRegHeart className="text-[#46A358] text-[20px]" />
          )}
        </button>
      </div>
      <div className="mt-[26px] flex flex-col gap-[10px]">
        <div className="flex items-center gap-[5px]">
          <span className="text-[#A5A5A5] text-[15px] font-[400] font-cera">
            SKU:
          </span>
          <span className="text-[#727272] text-[15px] font-[400] font-sans">
            {data?.sku}
          </span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span className="text-[#A5A5A5] text-[15px] font-[400] font-cera">
            Categories:
          </span>
          <span className="text-[#727272] text-[15px] font-[400] font-cera">
            {data?.category[0]}
          </span>
          <span className="text-[#727272] text-[15px] font-[400] font-cera">
            {data?.category[1]}
          </span>
        </div>
        <div className="flex items-center gap-[5px]">
          <span className="text-[#A5A5A5] text-[15px] font-[400] font-cera">
            Tags:
          </span>
          <span className="text-[#727272] text-[15px] font-[400] font-cera">
            Home, Garden, Plants
          </span>
        </div>
        <div className="flex items-center gap-[16px]">
          <p className="text-[15px] font-cera font-[500] text-[#3D3D3D]">
            Share this products:
          </p>
          <ul className="flex gap-[10px] items-center">
            <li className="">
              <NavLink className={""}>
                <FaFacebookF className="text-[#3D3D3D] text-[20px]" />
              </NavLink>
            </li>
            <li className="">
              <NavLink className={""}>
                <FaInstagram className="text-[#3D3D3D] text-[20px]" />
              </NavLink>
            </li>{" "}
            <li className="">
              <NavLink className={""}>
                <FaTwitter className="text-[#3D3D3D] text-[20px]" />
              </NavLink>
            </li>
            <li className="">
              <NavLink className={""}>
                <FaLinkedin className="text-[#3D3D3D] text-[20px]" />
              </NavLink>
            </li>{" "}
            <li className="">
              <NavLink className={""}>
                <FaYoutube className="text-[#3D3D3D] text-[20px]" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
