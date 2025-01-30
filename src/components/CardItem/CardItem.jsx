import React, { useState } from "react";
import img from "../../../public/image 1.svg";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";

export default function CardItem() {
  const [count, setCount] = useState(1);
  return (
    <li className="bg-[#fff] flex items-center max-w-[782px] justify-between pr-[31px]">
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
      <p className="text-[16px] font-sans font-[500] text-[#727272]">$119.00</p>
      <div className="flex content-center gap-[22px]">
        <button
          className="w-[22px] h-[25px] bg-[#46A358] rounded-[29px] text-[#fff] pl-[6px] text-[10px]"
          onClick={() => (count > 1 ? setCount(count - 1) : setCount(1))}
        >
          <FaMinus />
        </button>
        <span className="text-[#3D3D3D] text-[17px] font-sans font-[400]">
          {count}
        </span>

        <button
          className="w-[22px] h-[25px] bg-[#46A358] rounded-[29px] text-[#fff] pl-[6px] text-[10px]"
          onClick={() => setCount(count + 1)}
        >
          <FaPlus />
        </button>
      </div>
      <p className="text-[16px] font-[700] text-[#46A358]">$238.00</p>
      <button>
        <RiDeleteBin7Line className="text-[22px] text-[#727272]" />
      </button>
    </li>
  );
}
