import React from "react";
import PostItem from "../PostItem/PostItem";

export default function Posts() {
  return (
    <div className="mb-[100px]">
      <div className="container">
        <div>
          <div className="mb-[35px]">
            <h2 className="text-center font-cera font-[700] text-[30px] text-[#3D3D3D] mb-[15px]">
              Our Blog Posts
            </h2>
            <p className="text-center font-cera font-[400] text-[14px] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.{" "}
            </p>
          </div>
          <ul className="flex items-center max-w-[1280px] flex-wrap gap-[33px] content-center justify-center">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
          </ul>
        </div>
      </div>
    </div>
  );
}
