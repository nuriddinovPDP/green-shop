import React from "react";

export default function SuperSale({ tit, img }) {
  return (
    <div className="mt-8 bg-green-50 rounded-lg shadow-md p-4 text-center">
      <img src={tit} alt="" />
      <p className="text-[23px] font-[700] font-cera text-gray-700">
        UP TO 75% OFF
      </p>
      <div className="mt-4">
        <img src={img} alt="Plant" className="mx-auto rounded-lg" />
      </div>
    </div>
  );
}
