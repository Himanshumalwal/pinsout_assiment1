import React from "react";
import ButtonPrimary from "../../inputs/ButtonPrimary";

function IntersCard(props) {
  return (
    <>
      <div className=" grid grid-row-3 bg-white border p-5">
        <div className="flex text-sm justify-between items-center">
          <div className="rounded-full h-10 w-10 text-left bg-black text-white flex justify-center items-center">
            {props.img}
          </div>
          <p>{props.days}</p>
        </div>
        <p className="text-xl pt-2">{props.title}</p>
        <p className="text-xs pt-2">{props.location}</p>
        <div className="flex flex-col pt-2">
          <div className="flex flex-between items-center">
            <p className="text-sm">Stipend: {props.stipend}</p>
            <p className="text-sm  px-2">|</p>
            <p className="text-sm">Tenure: {props.tenure}</p>
          </div>
          <p className=" text-sm text-bold">
            Seeking Students from: {props.seeking}
          </p>
          <div className="w-full flex justify-between py-2 ">
            <ButtonPrimary classes="bg-grey rounded" text="Stack Development" />
            <ButtonPrimary classes="bg-grey rounded" text="MERN" />
            <ButtonPrimary classes="bg-grey rounded" text="MEAN" />
          </div>
          <p className="text-sm">{props.description}</p>
          <ButtonPrimary classes="mt-4 bg-black  text-white" text="Apply Now" />
        </div>
      </div>
    </>
  );
}

export default IntersCard;
