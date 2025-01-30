import React from "react";

import FootTop from "../FootTop/FootTop";
import FootBotom from "../FootBotom/FootBotom";

export default function Footer() {
  return (
    <div className="mb-[10px]">
      <div className="container">
        <div>
          <FootTop />
          <FootBotom />
          <p className="mb-[15px] text-center mt-[15px] text-[14px] font-cera font-[400] text-[#3D3D3D]">
            © 2021 GreenShop. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
