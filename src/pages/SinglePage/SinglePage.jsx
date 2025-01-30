import React from "react";
import Header from "../../components/Header/Header";
import { NavLink, Outlet, useLoaderData, useParams } from "react-router-dom";
import SingleLeft from "../../components/SingleLeft/SingleLeft";
import SingleRight from "../../components/SingleRight/SingleRight";
import Item from "../../components/Item/Item";
import Info from "../../components/Info/Info";
import Footer from "../../components/Footer/Footer";

export default function SinglePage() {
  const el = useLoaderData();
  const { id } = useParams();

  const data = el?.find((item) => item._id === id);
  console.log(data);
  return (
    <>
      <Header />
      <div className="pt-[36px]">
        <div className="container">
          <div>
            <div className="flex gap-[5px] items-center">
              <NavLink
                className={({ isActive }) =>
                  `text-[#3D3D3D] font-[400] text-[15px] font-cera ${
                    isActive ? "font-[700]" : ""
                  } `
                }
              >
                Home
              </NavLink>
              <span className="text-[#3D3D3D]">/</span>
              <NavLink
                className={({ isActive }) =>
                  `text-[#3D3D3D] font-[400] text-[15px] font-cera ${
                    isActive ? "font-[700]" : "font-[400]"
                  } `
                }
              >
                Shop
              </NavLink>
            </div>
            <div className="mt-[43px] flex gap-[52px]">
              <SingleLeft />
              <SingleRight data={data} />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[120px]">
        <div className="container">
          <div>
            <ul className="flex gap-[40px] border-b-[1px] border-b-[#A3D1AC] pb-[12px] mb-[18px]">
              <li>
                <NavLink
                  to="description" // "description" nuqtasiga yo'naltiradi
                  className={({ isActive }) =>
                    `text-[16px] text-[#3D3D3D] font-[400] font-cera pb-[12px]  ${
                      isActive
                        ? "font-[700] text-[#46A358] border-b-[3px] border-b-[#46A358]" // faqat aktiv holatda
                        : ""
                    }`
                  }
                >
                  Product Description
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="review" // "review" nuqtasiga yo'naltiradi
                  className={({ isActive }) =>
                    `text-[16px] text-[#3D3D3D] font-[400] font-sans pb-[12px] ${
                      isActive
                        ? "font-[700] text-[#46A358] border-b-[3px] border-b-[#46A358]" // faqat aktiv holatda
                        : ""
                    }`
                  }
                >
                  Reviews (19)
                </NavLink>
              </li>
            </ul>

            <Outlet />
          </div>
        </div>
      </div>
      <div className="mb-[140px]">
        <div className="container">
          <div>
            <div className="w-full border-b-[1px] border-b-[#A3D1AC] pb-[12px]">
              <p className="text-[17px] font-[700] font-cera text-[#46A358]">
                Releted Products
              </p>
            </div>
            <ul className="flex gap-[30px] items-center mt-[44px]">
              {el?.map((el) => (
                <Item data={el} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Info />
      <Footer />
    </>
  );
}
