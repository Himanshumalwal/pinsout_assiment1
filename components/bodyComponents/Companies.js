import React from "react";

function Companies() {
  return (
    <>
      <p className="text-3xl font-bold text-center mt-10">
        Decision makers on companies and universities <br /> around the globe to
        us
      </p>
      <p>
        Hundreds of fast growing companies from tech startups to Sems to Fortune
        500
      </p>
      <div className="flex items-center w-full justify-between py-10 ">
        <p className="text-xl font-bold"> {`<`} </p>
        <div className="flex items-center justify-center disable w-full">
          <div className=" flex justify-center items-center  h-20 w-20 bg-black rounded  mx-2  text-white">
            Logo
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className=" flex justify-center items-center  h-20 w-20 bg-black  rounded mx-2 text-white">
            Logo
          </div>
        </div>
        <div className="flex items-center justify-center disable w-full">
          <div className="  mx-2  flex justify-center items-center h-20 w-20 bg-black text-white">
            Logo
          </div>
        </div>

        <div className="flex items-center justify-center disable w-full">
          <div className="  mx-2  flex justify-center items-center h-20 w-20 bg-black text-white">
            Logo
          </div>
        </div>
        <p className="text-xl font-bold"> {`>`} </p>
      </div>
    </>
  );
}

export default Companies;
