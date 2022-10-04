import React from "react";
import ButtonPrimary from "../../inputs/ButtonPrimary";

function SelectionCard(props) {
  return (
    <>
      <div className="rounded border flex flex-col p-8 text-left m-3">
        <div className="rounded-full h-10 w-10  bg-black text-white flex justify-center items-center">
          {props.img}
        </div>
        <p className="text-2xl text-bold pt-3">{props.type} </p>
        <p className="py-5">{props.description}</p>
        <div className="text-left">
          <ButtonPrimary classes="" text="Explore" />
        </div>
      </div>
    </>
  );
}

export default SelectionCard;
