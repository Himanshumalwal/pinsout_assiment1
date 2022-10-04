import React from "react";
import Explore from "./Explore";
import Navbar from "./Navbar";
import SmallBar from "./SmallBar";
function Banner() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-purple-400 ">
        <div className="flex justify-center w-full">
          <Navbar />
        </div>
        <div className="">
          <Explore />
        </div>
        <div className="drop-shadow-xl drop-shadow-lg">
          <SmallBar />
        </div>
      </div>
    </>
  );
}

export default Banner;
