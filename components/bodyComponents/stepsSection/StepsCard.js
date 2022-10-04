import React from "react";

function StepsCard(props) {
  return (
    <>
      <div className="text-left">
        <div className="rounded-full h-20 w-20  text-left bg-black flex justify-center items-center">
          <p className="text-3xl text-white">{props.counts}</p>
        </div>
        <p className="text-xl mt-2">{props.heading}</p>
        <p className="text-sm">{props.description}</p>
      </div>
    </>
  );
}

export default StepsCard;
