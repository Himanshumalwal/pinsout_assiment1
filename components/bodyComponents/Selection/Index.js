import React from "react";
import SelectionCard from "./SelectionCard";
const data = [
  {
    img: "C",
    key: "11",

    type: "Company",
    description:
      "Create a 2D/ 3D animation in short period of time designed to promote a company product",
  },
  {
    img: "S",
    type: "Student",
    key: "1a1",

    description:
      "Make your website design/ mobile applicaiton design more colorfull and give a cool impression on the eyes of the user",
  },
  {
    img: "C/U",
    key: "1v1",

    type: "College/Univerisity",
    description:
      "Create costumizable illustrations with attractive designs that are made visually through jigh creativity",
  },
];
function Selection() {
  return (
    <>
      <div className="flex justify-evenly py-10  w-full ">
        {data.map((ev) => {
          return (
            <SelectionCard
              key={ev.key}
              img={ev.img}
              type={ev.type}
              description={ev.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default Selection;
