import React, { useState } from "react";
import { Range } from "react-range";
import tit from "../../../public/tit.png";
import img from "../../../public/sale_img.svg";
import SuperSale from "../SuperSale/SuperSale";

export default function Category() {
  const [minPrice, setMinPrice] = useState(39);
  const [maxPrice, setMaxPrice] = useState(1230);

  return (
    <div className="max-w-[310px] bg-[#FBFBFB]">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Categories</h2>
        <ul className="space-y-2">
          <li className="flex justify-between text-[#46A358] text-[15px] font-[700] font-cera">
            <span className="font-cera">House Plants</span>
            <span className="text-[#46A358] font-sans">(33)</span>
          </li>
          <li className="flex justify-between text-gray-700">
            <span className="font-cera">Potter Plants</span>
            <span className="text-gray-500">(12)</span>
          </li>
          <li className="flex justify-between text-gray-700">
            <span className="font-cera">Seeds</span>
            <span className="text-gray-500">(65)</span>
          </li>
          <li className="flex justify-between text-gray-700">
            <span className="font-cera">Small Plants</span>
            <span className="text-gray-500">(39)</span>
          </li>
          <li className="flex justify-between text-gray-700">
            <span className="font-cera">Big Plants</span>
            <span className="text-gray-500">(23)</span>
          </li>
          <li className="flex justify-between text-gray-700">
            <span className="font-cera">Succulents</span>
            <span className="text-gray-500">(17)</span>
          </li>
          <li className="flex justify-between text-gray-700">
            <span className="font-cera">Terrariums</span>
            <span className="text-gray-500">(19)</span>
          </li>
          <li className="flex justify-between text-gray-700">
            <span className="font-cera">Gardening</span>
            <span className="text-gray-500">(13)</span>
          </li>
          <li className="flex justify-between text-gray-700">
            <span className="font-cera">Accessories</span>
            <span className="text-gray-500">(18)</span>
          </li>
        </ul>

        {/* Price Range */}
        <h2 className="text-lg font-bold text-gray-800 mt-6 mb-4">
          Price Range
        </h2>

        <div className="mb-4">
          <Range
            values={[minPrice, maxPrice]}
            step={1}
            min={39}
            max={1230}
            onChange={(values) => {
              setMinPrice(values[0]);
              setMaxPrice(values[1]);
            }}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "2px",
                  backgroundColor: "#46A358 ",
                  borderRadius: "2px",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#46A358",
                }}
              />
            )}
          />
        </div>

        <p className="text-sm text-gray-600 mb-2">
          Price:{" "}
          <span className="font-semibold text-gray-800">
            ${minPrice} - ${maxPrice}
          </span>
        </p>
        <button className="w-full bg-[#46A358] text-white py-2 rounded-lg font-bold hover:bg-[#3a8d4a]">
          Filter
        </button>
        <p className="text-[16px] font-[500] font-cera mt-[50px] mb-[10px]">
          Size
        </p>
        <ul className="space-y-2">
          <li className="flex justify-between text-gray-700">
            <span className="font-cera">Small</span>
            <span className="text-gray-500">(119)</span>
          </li>
          <li className="flex justify-between text-gray-700">
            <span className="font-cera">Medium</span>
            <span className="text-gray-500">(86)</span>
          </li>{" "}
          <li className="flex justify-between text-gray-700">
            <span className="font-cera">Large</span>
            <span className="text-gray-500">(78)</span>
          </li>
        </ul>
      </div>

      <SuperSale tit={tit} img={img} />
    </div>
  );
}
