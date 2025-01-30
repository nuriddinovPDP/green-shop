import React from "react";
import img from "../../../public/icon.png";
import img2 from "../../../public/icon2.png";
import img3 from "../../../public/icon3.png";
import img4 from "../../../public/icon4.svg";

export default function Info() {
  return (
    <div className="">
      <div className="container">
        <div className="div pt-[46px] bg-[#FBFBFB] pb-[24px] flex items-center pr-[25px]">
          <ul className="flex">
            <li className="pl-[25px] max-w-[238px] border-r-[1px] pr-[34px] border-r-[#E6EFE8]">
              <div className="relative w-[74px] h-[74px] bg-[#E4F0E6] block rounded-full">
                <img
                  src={img2}
                  className="absolute w-[61px] h-[61px] top-[-35px] left-[17px]"
                  alt=""
                />
                <img
                  src={img}
                  className="absolute top-[25px] left-[20px] w-[55px] h-[48px]"
                  alt=""
                />
              </div>
              <p className="font-cera font-[700] text-[17px] text-[#3D3D3D] mt-[17px] mb-[9px]">
                Garden Care
              </p>
              <p className="max-w-[204px] font-cera font-[400] text-[14px] text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </li>
            <li className="pl-[25px] max-w-[238px] border-r-[1px] pr-[34px] border-r-[#E6EFE8]">
              <div className="relative w-[74px] h-[74px] bg-[#E4F0E6] block rounded-full">
                <img
                  src={img3}
                  className="absolute top-[-10px] left-[10px] w-[68px] h-[87px]"
                  alt=""
                />
              </div>
              <p className="font-cera font-[700] text-[17px] text-[#3D3D3D] mt-[17px] mb-[9px]">
                Plant Renovation
              </p>
              <p className="max-w-[204px] font-cera font-[400] text-[14px] text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </li>{" "}
            <li className="pl-[25px] max-w-[238px]">
              <div className="relative w-[74px] h-[74px] bg-[#E4F0E6] block rounded-full">
                <img
                  src={img4}
                  className="absolute top-[-8px] left-[10px] w-[83px] h-[85px]"
                  alt=""
                />
              </div>
              <p className="font-cera font-[700] text-[17px] text-[#3D3D3D] mt-[17px] mb-[9px]">
                Watering Graden
              </p>
              <p className="max-w-[204px] font-cera font-[400] text-[14px] text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </li>
          </ul>
          <div className="max-w-[354px] ml-[62px]">
            <p className="text-[18px] font-[700] font-cera text-[#3D3D3D] mb-[18px]">
              Would you like to join newsletters?
            </p>
            <form action="" className="flex items-center mb-[17px]">
              <input
                type="text"
                placeholder="enter your email address..."
                className="w-[269px] bg-[#FFFFFF] h-[50px] pt-[12px] pb-[12px] pl-[12px] placeholder:text-[#ACACAC] placeholder:font-cera placeholder:font-[400] placeholder:text-[14px] rounded-tl-[6px] rounded-bl-[6px]"
              />
              <button className="pt-[12px] pb-[12px] h-[50px] pl-[25px] pr-[25px] text-[#fff] bg-[#46A358] font-cera font-[700] text-[18px] rounded-tr-[6px] rounded-br-[6px]">
                Join
              </button>
            </form>
            <p className="max-w-[354px] font-[400] text-[#727272] text-[13px] font-cera">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our
              <span className="font-sans">(</span>green
              <span className="font-sans">)</span> house to yours
              <span className="font-sans">!</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
