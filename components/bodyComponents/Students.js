import React from "react";

function Students() {
  return (
    <>
      <div className="w-full">
        <p className="text-3xl font-bold text-left pt-10">
          What are students saying about Qollab
        </p>
        <p className="text-sm pt-5">
          Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum{" "}
        </p>
        <div className="flex items-center w-full justify-between py-10 ">
          <p className="text-xl font-bold"> {`<`} </p>
          <div className="flex items-center justify-center disable w-full">
            <div className=" flex justify-center items-center  h-10 w-10 bg-black rounded  mx-2  text-white">
              P
            </div>
            <div>
              <p className="text-xl">Priya Singh Bhatia</p>
              <p className="text-sm"> Intern at WhatsApp</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className=" flex justify-center items-center  h-20 w-20 bg-black  rounded mx-2 text-white">
              P
            </div>
            <div>
              <p className="text-2xl">Priya Singh Bhatia</p>
              <p className="text-xl"> Intern at WhatsApp</p>
            </div>
          </div>
          <div className="flex items-center justify-center disable w-full">
            <div className="  mx-2  flex justify-center items-center h-10 w-10 bg-black text-white">
              P
            </div>
            <div>
              <p className="text-xl">Priya Singh Bhatia</p>
              <p className="text-sm"> Intern at WhatsApp</p>
            </div>
          </div>
          <p className="text-xl font-bold"> {`>`} </p>
        </div>
      </div>
      <div className="bg-black rounded-md flex  flex-col p-14 jutify-center items-center">
        <div className="rounded flex justify-center items-center  h-10 w-10 bg-white  rounded mx-2 text-black p-8">
          LOGO
        </div>
        <p className="text-xl text-white text-center pt-9">
          this Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </div>
    </>
  );
}

export default Students;
