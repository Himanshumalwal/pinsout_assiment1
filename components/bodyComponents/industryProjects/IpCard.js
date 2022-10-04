import React from "react";

function IpCard(props) {
  return (
    <div className="border rounded p-9 text-bold">
      <p className="text-2xl">{props.title}</p>
      <p className="text-sm pt-2">{props.description}</p>
    </div>
  );
}

export default IpCard;
