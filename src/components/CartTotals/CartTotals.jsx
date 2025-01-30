import React from "react";
import { NavLink } from "react-router-dom";

export default function CartTotals() {
  return (
    <div className="w-[328px]">
      <div className="border-b-[1px] border-b-[#A3D1AC] w-[328px] pb-[11px]">
        <p className="text-[18px] text-[#3D3D3D] font-[700] font-cera">
          Cart Totals
        </p>
      </div>
      <p className="text-[14px] font-cera font-[400] text-[#3D3D3D] mt-[11px] mb-[8px]">
        Coupon Apply
      </p>
      <form action="" className="flex content-center">
        <input
          type="text"
          className="w-[230px] pl-[9px] border-[2px] border-[#46A358] pt-[8px] pb-[11px] rounded-tl-[3px] rounded-bl-[3px] placeholder:text-[#A5A5A5] placeholder:text-[14px] placeholder:font-[400] placeholder:font-cera"
          placeholder="Enter coupon code here..."
        />
        <button className="text-[15px] font-[700] font-cera text-[#FFFFFF] bg-[#46A358] pt-[14px] pb-[14px] pl-[35px] pr-[35px] rounded-tr-[3px] rounded-br-[3px]">
          Apply
        </button>
      </form>
      <div className="mt-[30px] flex flex-col gap-[15px]">
        <div className="flex content-center justify-between">
          <span className="text-[15px] font-[400] font-cera text-[#3D3D3D]">
            Subtotal
          </span>
          <p className="text-[18px] font-[500] text-[#3D3D3D]">$2,683.00</p>
        </div>
        <div className="flex content-center justify-between">
          <span className="text-[15px] font-[400] font-cera text-[#3D3D3D]">
            Coupon Discount{" "}
          </span>
          <p className="text-[18px] font-[500] text-[#3D3D3D]">(-) 00.00</p>
        </div>{" "}
        <div className="flex content-center justify-between">
          <span className="text-[15px] font-[400] font-cera text-[#3D3D3D]">
            Shiping
          </span>
          <p className="text-[18px] font-[500] text-[#3D3D3D]">$16.00</p>
        </div>
        <NavLink
          className={"text-[12px] font-cera font-[400] text-[#46A358] text-end"}
        >
          View shipping charge
        </NavLink>
      </div>
      <div className="flex mt-[26px] justify-between content-center">
        <p className="text-[16px] font-[700] font-cera text-[#3D3D3D]">Total</p>
        <p className="text-[18px] font-[700] text-[#46A358]">$2,699.00</p>
      </div>
      <button className="w-full bg-[#46A358] text-[#fff] text-[15px] font-[700] font-cera mt-[29px] pt-[12px] pb-[12px] rounded-[3px] mb-[14px]">
        Proceed To Checkout
      </button>
      <NavLink
        to={"/shop/checkout"}
        className={"text-[15px] font-[400] font-cera text-[#46A358] mt-[14px]]"}
      >
        Continue Shopping
      </NavLink>
    </div>
  );
}
