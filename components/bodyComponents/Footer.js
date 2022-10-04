import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-purple-100 px-20">
        <div className="flex justiy-between w-full mt-10 pt-10 boder-b-1">
          <div className="w-6/12">
            <div className="pl-10 font-bold">
              <p>Qollab</p>
              <p>
                Open the doors of brilliant <br /> idea to flow to you
              </p>
            </div>
            <div className="flex items-center w-full justify-between py-10 ">
              <div className="flex items-center justify-center  w-full">
                <div className=" flex justify-center items-center  h-10 w-10 bg-black rounded-full   text-white">
                  F
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className=" flex justify-center items-center  h-10 w-10 bg-black  rounded-full text-white">
                  G
                </div>
              </div>
              <div className="flex items-center justify-center  w-full">
                <div className="  rounded-full flex justify-center items-center h-10 w-10 bg-purple-500 text-white">
                  V
                </div>
              </div>

              <div className="flex items-center justify-center w-full">
                <div className="  rounded-full flex justify-center items-center h-10 w-10 bg-black text-white">
                  I
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly w-full">
            <div>
              <p className="font-bold">Home</p>
              <p>Companies</p>
              <p>Students</p>
              <p>college/universities</p>
              <p>About Us</p>
            </div>
            <div>
              <p className="font-bold">Home</p>
              <p>Companies</p>
              <p>Students</p>
              <p>college/universities</p>
              <p>About Us</p>
            </div>
            <div>
              <p className="font-bold">Home</p>
              <p>Companies</p>
              <p>Students</p>
              <p>college/universities</p>
              <p>About Us</p>
            </div>
          </div>
        </div>
        <p className="text-center">
          {" "}
          Copyright@Qollab 2022, All rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
