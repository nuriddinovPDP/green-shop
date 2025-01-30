import React, { useState } from "react";
import { countries } from "../../countries";
import { states } from "../../states";

export default function Address() {
  const [value, setValue] = useState();
  const filterState = states.filter((el) => el.id == value);
  console.log(filterState);
  return (
    <div className="mb-[100px]">
      <p className="mt-[36px] text-[17px] font-[700] font-cera text-[#3D3D3D] mb-[21px]">
        Billing Address
      </p>
      <form action="" className="flex flex-col gap-[30px]">
        <div className="flex gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="f_name"
              className="text-[15px] font-[400] flex items-center gap-[3px] text-[#3D3D3D] font-cera"
            >
              First Name{" "}
              <span className="text-[#F03800] font-sans text-[22px]">*</span>
            </label>
            <input
              className="border-[1px] border-[#EAEAEA] rounded-[3px] w-[350px] h-[40px] pl-[13px]"
              type="text"
              id="f_name"
              name="first_name"
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="l_name"
              className="text-[15px] font-[400] flex items-center gap-[3px] text-[#3D3D3D] font-cera"
            >
              Last Name
              <span className="text-[#F03800] font-sans text-[22px]">*</span>
            </label>
            <input
              className="border-[1px] border-[#EAEAEA] rounded-[3px] w-[350px] h-[40px] pl-[13px]"
              type="text"
              id="l_name"
              name="last_name"
            />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="countr"
              className="text-[15px] font-[400] flex items-center gap-[3px] text-[#3D3D3D] font-cera"
            >
              Country <span className="font-sans">/</span>Region
              <span className="text-[#F03800] font-sans text-[22px]">*</span>
            </label>

            <select
              name="country"
              id="countr"
              onChange={(e) => setValue(e.target.value)}
              className="pl-[13px] pr-[8px] border-[1px] border-[#EAEAEA] rounded-[3px] w-[350px] h-[40px] text-[14px] font-[400] font-sans text-[#A5A5A5] "
            >
              <option disabled selected value="">
                Select a country / region
              </option>
              {countries.map((el) => (
                <option value={el.id}>{el.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="town"
              className="text-[15px] font-[400] flex items-center gap-[3px] text-[#3D3D3D] font-cera"
            >
              Town <span className="font-sans">/</span> City
              <span className="text-[#F03800] font-sans text-[22px]">*</span>
            </label>
            <input
              className="border-[1px] border-[#EAEAEA] rounded-[3px] w-[350px] h-[40px]"
              type="text"
              id="town"
              name="city"
            />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="f_name"
              className="text-[15px] font-[400] flex items-center gap-[3px] text-[#3D3D3D] font-cera"
            >
              Street Address
              <span className="text-[#F03800] font-sans text-[22px]">*</span>
            </label>
            <input
              className="border-[1px] border-[#EAEAEA] pl-[13px] rounded-[3px] w-[350px] h-[40px]"
              type="text"
              placeholder="House number and street name"
              id="f_name"
              name="first_name"
            />
          </div>

          <div className="flex flex-col gap-[10px] items-center">
            <input
              className="border-[1px] border-[#EAEAEA] rounded-[3px] w-[350px] h-[40px] pl-[13px] mt-[43px]"
              type="text"
              id="l_name"
              placeholder="Appartment, suite, unit, etc. (optional)"
              name="last_name"
            />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="states"
              className="text-[15px] font-[400] flex items-center gap-[3px] text-[#3D3D3D] font-cera"
            >
              Country <span className="font-sans">/</span>Region
              <span className="text-[#F03800] font-sans text-[22px]">*</span>
            </label>

            <select
              name="state"
              id="states"
              className="pl-[13px] pr-[8px] border-[1px] border-[#EAEAEA] rounded-[3px] w-[350px] h-[40px] ext-[14px] font-[400] font-sans text-[#A5A5A5] "
            >
              <option disabled selected value="">
                Select a country / region
              </option>
              {filterState?.map((el) => (
                <option value={el.name}>{el.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="zi"
              className="text-[15px] font-[400] flex items-center gap-[3px] text-[#3D3D3D] font-cera"
            >
              Zip
              <span className="text-[#F03800] font-sans text-[22px]">*</span>
            </label>
            <input
              className="border-[1px] border-[#EAEAEA] rounded-[3px] w-[350px] h-[40px]"
              type="text"
              id="zi"
              name="zip "
            />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="address"
              className="text-[15px] font-[400] flex items-center gap-[3px] text-[#3D3D3D] font-cera"
            >
              Email address
              <span className="text-[#F03800] font-sans text-[22px]">*</span>
            </label>
            <input
              className="border-[1px] border-[#EAEAEA] rounded-[3px] w-[350px] h-[40px] pl-[13px]"
              type="text"
              id="address"
              name="email"
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="phone_number"
              className="text-[15px] font-[400] flex items-center gap-[3px] text-[#3D3D3D] font-cera"
            >
              Phone Number
              <span className="text-[#F03800] font-sans text-[22px]">*</span>
            </label>
            <input
              className="border-[1px] border-[#EAEAEA] rounded-[3px] w-[350px] h-[40px] pl-[13px]"
              type="text"
              id="phone_number"
              name="phone"
            />
          </div>
        </div>
        <div className="flex gap-[7px] items-center">
          <input id="inp" type="radio" className="text-[#46A358]" />
          <label htmlFor="inp">Ship to a different address?</label>
        </div>
        <div className="flex flex-col gap-[10px] mt-[24px]">
          <label htmlFor="notes">Order notes (optional)</label>
          <input
            type="text"
            name="note"
            id="notes"
            className="border rounded-[3px] max-w-[350px] h-[152px]"
          />
        </div>
      </form>
    </div>
  );
}
