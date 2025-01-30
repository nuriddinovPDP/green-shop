import React from "react";
import Header from "../../components/Header/Header";
import Address from "../../components/Address/Address";
import Order from "../../components/Order/Order";
import Info from "../../components/Info/Info";
import Footer from "../../components/Footer/Footer";

export default function CheckOut() {
  return (
    <>
      <Header />
      <div className="pt-[36px] mb-[130px]">
        <div className="container">
          <div>
            <p className="text-[15px] font-[400] font-sans text-[#3D3D3D]">
              <span className="text-[15px] font-[700] text-[#3D3D3D] font-cera">
                Home
              </span>{" "}
              / Shop / Checkout
            </p>
            <div className="flex justify-between">
              <Address />
              <Order />
            </div>
          </div>
        </div>
      </div>
      <Info />
      <Footer />
    </>
  );
}
