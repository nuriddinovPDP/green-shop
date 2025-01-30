import React from "react";
import Header from "../../components/Header/Header";
import { NavLink } from "react-router-dom";
import CardProducts from "../../components/CardProducts/CardProducts";
import CartTotals from "../../components/CartTotals/CartTotals";
import Item from "../../components/Item/Item";
import Info from "../../components/Info/Info";
import Footer from "../../components/Footer/Footer";

export default function Korzink() {
  return (
    <>
      <Header />
      <div className="pt-[36px]">
        <div className="container">
          <div>
            <div className="flex content-center gap-[5px]">
              <NavLink
                className={"text-[15px] font-[700] font-cera text-[#3D3D3D]"}
              >
                Home
              </NavLink>
              <span
                className={"text-[15px] font-[700] font-sans text-[#3D3D3D]"}
              >
                /
              </span>
              <NavLink
                className={"text-[15px] font-[700] font-cera text-[#3D3D3D]"}
              >
                Shop
              </NavLink>
              <span
                className={"text-[15px] font-[700] font-sans text-[#3D3D3D]"}
              >
                /
              </span>
              <NavLink
                className={"text-[15px] font-[700] font-cera text-[#3D3D3D]"}
              >
                Shoping Cart
              </NavLink>
            </div>
            <div className="flex justify-between">
              <CardProducts />
              <CartTotals />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[87px] mb-[128px]">
        <div className="container">
          <div>
            <div className="w-full border-b-[1px] border-b-[#A3D1AC] pb-[12px]">
              <p className="text-[17px] font-[700] font-cera text-[#46A358]">
                You may be interested in
              </p>
            </div>
            <ul>
              <Item />
            </ul>
          </div>
        </div>
      </div>
      <Info />
      <Footer />
    </>
  );
}
