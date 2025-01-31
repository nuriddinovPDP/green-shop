import React, { useState } from "react";
import "./Header.css";
import logo from "../../../public/logo.svg";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import basket from "../../assets/basket.png";
import { IoExitOutline } from "react-icons/io5";

export default function Header() {
  const [isInp, setIsInp] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="pt-[26px]">
      <div className="container">
        <div className="flex justify-between pb-[20px] border-b border-b-1 border-b-[#46A35880]">
          <img src={logo} alt="site logo" />

          <div className="burger-menu" onClick={toggleMenu}>
            <span className="text-[30px]">☰</span>
          </div>
          <div className="flex items-center gap-[200px] justify-between">
            <ul className={`flex items-center gap-[50px] w-[355px]`}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-[16px] text-[#3D3D3D] font-[400] pb-[27px] font-cera ${
                      isActive
                        ? "font-[700] border-b-[3px] border-b-[#46A358]"
                        : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `text-[16px] text-[#3D3D3D] font-[400] pb-[27px] font-cera ${
                      isActive
                        ? "font-[700] font-[Cera Pro] border-b-[3px] border-b-[#46A358]"
                        : ""
                    }`
                  }
                  to={"/shop"}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `text-[16px] text-[#3D3D3D] font-[400] pb-[27px] font-cera ${
                      isActive
                        ? "font-[700] border-b-[3px] border-b-[#46A358]"
                        : ""
                    }`
                  }
                  to={"/care"}
                >
                  Plant Care
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `text-[16px] text-[#3D3D3D] font-[400] pb-[27px] font-cera ${
                      isActive
                        ? "font-[700] border-b-[3px] border-b-[#46A358]"
                        : ""
                    }`
                  }
                  to={"/blog"}
                >
                  Blogs
                </NavLink>
              </li>
            </ul>

            <div className="flex items-center gap-[30px] w-[210px]">
              {isInp ? (
                <input
                  name="search"
                  placeholder="Search..."
                  className="search-input"
                />
              ) : (
                <></>
              )}
              <button onClick={() => setIsInp(!isInp)}>
                {isInp ? (
                  <IoMdClose className="text-[20px]" />
                ) : (
                  <IoSearchSharp className="text-[25px] text-[#3D3D3D]" />
                )}
              </button>
              <NavLink className={"relative"}>
                <span className="w-[12px] flex items-center content-center absolute top-[0px] left-[15px] pl-[3px] pr-[3px] font-cera font-[500] text-[10px] text-[#fff] h-[12px] bg-[#46A358] rounded-full">
                  6
                </span>

                <NavLink to={"/shop/card"}>
                  <img src={basket} alt="" />
                </NavLink>
              </NavLink>
              <NavLink className="rounded-[6px] flex gap-[5px] items-center pt-[8px] pb-[8px] pl-[17px] pr-[17px] font-[500] bg-[#46A358] text-[#fff] text-[17px] font-cera">
                <IoExitOutline className="text-[17px]" /> Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className={`modal ${isMenuOpen ? "open" : ""}`}>
        <div className="modal-content">
          <ul>
            <div className="close-modal" onClick={toggleMenu}>
              &times;
            </div>
            <li>
              <NavLink to="/" className="modal-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className="modal-link">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/care" className="modal-link">
                Plant Care
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="modal-link">
                Blogs
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-[9px] flex-col">
            {isInp ? (
              <input
                name="search"
                placeholder="Search..."
                className="search-input"
              />
            ) : (
              <></>
            )}
            <button onClick={() => setIsInp(!isInp)}>
              {isInp ? (
                <IoMdClose className="text-[20px]" />
              ) : (
                <IoSearchSharp className="text-[25px] text-[#3D3D3D]" />
              )}
            </button>
            <NavLink className={"relative"}>
              <span className="w-[12px] flex items-center content-center absolute top-[0px] left-[15px] pl-[3px] pr-[3px] font-cera font-[500] text-[10px] text-[#fff] h-[12px] bg-[#46A358] rounded-full">
                6
              </span>

              <NavLink to={"/shop/card"}>
                <img src={basket} alt="" />
              </NavLink>
            </NavLink>
            <NavLink className="rounded-[6px] flex gap-[5px] items-center pt-[8px] pb-[8px] pl-[17px] pr-[17px] font-[500] bg-[#46A358] text-[#fff] text-[17px] font-cera">
              <IoExitOutline className="text-[17px]" /> Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
