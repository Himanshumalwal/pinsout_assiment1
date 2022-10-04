import React from "react";
import ButtonPrimary from "../inputs/ButtonPrimary";

function NewsLetter() {
  return (
    <>
      <div className="text-center">
        <p className="text-3xl font-bold mt-10">Subscribe to NewsLetter</p>
        <p className="text-sm px-40 pt-10">
          this Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </div>
      <div className="flex  items-center justify-center  w-5/12 mt-20">
        <input type="text" className="p-4 w-full border" />
        <ButtonPrimary classes="bg-black text-white py-4" text="Submit" />
      </div>
    </>
  );
}

export default NewsLetter;
