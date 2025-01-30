import React from "react";
import { NavLink } from "react-router-dom";
import plant from "../../../public/plant.png";
export default function Carousel() {
  return (
    <section className="mt-[15px]">
      <div className="container">
        <div className="box bg-[#F9F9F9] flex justify-between items-center pl-[40px]">
          <div>
            <p className="text-[17px] text-[#3D3D3D] font-[500] font-cera mb-[7px]">
              Welcome to GreenShop
            </p>
            <h2 className="text-[70px] font-sans font-[900] text-[#3D3D3D]">
              Let’s Make a Better{" "}
              <span className="text-[#46A358] mb-[10px]"> Planet</span>
            </h2>
            <p className="text-[14px] font-[400] text-[#727272] font-cera max-w-[557px] mb-[55px]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <NavLink
              className={
                "pt-[10px] pb-[10px] pl-[26px] pr-[26px] bg-[#46A358] text-[#fff] rounded-[6px] font-[700] font-cera"
              }
            >
              SHOP NOW
            </NavLink>
          </div>
          <img src={plant} alt="" />
        </div>
      </div>
    </section>
  );
}
