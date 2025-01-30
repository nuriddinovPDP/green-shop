import React from "react";
import OrderItem from "../OrderItem/OrderItem";
import { NavLink } from "react-router-dom";
import img from "../../../public/img.svg";
import img2 from "../../../public/amexp.png";
import { SiVisa } from "react-icons/si";
export default function Order() {
  return (
    <div className="w-[405px]">
      <p className="text-[17px] font-cera font-[700] text-[#3D3D3D] mb-[21px]">
        Your Order
      </p>
      <div className="flex justify-between border-b-[1px] pb-[11px] border-b-[#A3D1AC]">
        <p className="text-[#3D3D3D] text-[16px] font-[500] font-cera">
          Products
        </p>
        <p className="text-[#3D3D3D] text-[16px] font-[500] font-cera">
          Subtotal
        </p>
      </div>
      <ul className="mt-[11px] flex flex-col gap-[11px  ]">
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </ul>
      <p className="text-[14px] font-[400] font-cera text-[#3D3D3D] flex gap-[4px] mt-[17px] text-right ml-[170px]">
        Have a coupon code?
        <NavLink className={"font-[500] text-[#46A358]"}>Click here</NavLink>
      </p>
      <div className="mt-[30px] flex flex-col gap-[15px] ml-[85px] border-b-[1px] pb-[11px] border-b-[#A3D1AC]">
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
      <div className="flex mt-[26px] justify-between content-center pl-[85px]">
        <p className="text-[16px] font-[700] font-cera text-[#3D3D3D]">Total</p>
        <p className="text-[18px] font-[700] text-[#46A358]">$2,699.00</p>
      </div>
      <form action="" className="ml-[85px] mt-[47px] flex flex-col gap-[15px]">
        <p className="text-[17px] font-[700] font-cera text-[#3D3D3D]]">
          Payment Method
        </p>
        <div className="flex gap-[10px] pt-[2px] pr-[60px] pl-[11px] border-[1px] border-[#EAEAEA] rounded-[3px] w-[321px] h-[45px]">
          <input type="radio" id="cash" />
          <label htmlFor="cash">
            <ul className="flex items-center gap-[20px]">
              <li>
                <NavLink>
                  {" "}
                  <span className="text-[#022F82] text-[15px] font-[700]">
                    Pay
                  </span>
                  <span className="text-[#0198DC] text-[15px] font-[700]">
                    Pal
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <img src={img} width={30} height={10} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <SiVisa className="w-[40px] h-[40px] text-[#0E4495]" />
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <img src={img2} width={50} height={40} alt="" />
                </NavLink>
              </li>
            </ul>
          </label>
        </div>
        <div className="flex gap-[10px] pt-[10px] pb-[10px] pr-[60px] pl-[11px] border-[1px] border-[#EAEAEA] rounded-[3px] w-[321px] h-[45px]">
          <input type="radio" id="cash" />
          <label
            htmlFor="cash"
            className="text-[15px] font-cera font-[400] text-[#3D3D3D]"
          >
            Dorect bank transfer
          </label>
        </div>
        <div className="flex gap-[10px] pt-[10px] pb-[10px] pr-[60px] pl-[11px] border-[1px] border-[#EAEAEA] rounded-[3px] w-[321px] h-[45px]">
          <input type="radio" id="cash" />
          <label
            htmlFor="cash"
            className="text-[15px] font-cera font-[400] text-[#3D3D3D]"
          >
            Cash on delivery
          </label>
        </div>
        <button className="w-[full] text-[#fff] text-[15px] font-cera font-[700] bg-[#46A358] pt-[12px] pb-[12px] rounded-[3px]">
          Place Order
        </button>
      </form>
    </div>
  );
}
