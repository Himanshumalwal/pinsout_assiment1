import React from "react";
import IpCard from "./IpCard";

function Index() {
  const data = [
    {
      title: "Design & Development",
      description: "150 available jobs",
      key: "a1x",
    },
    {
      title: "Design & Development",
      description: "150 available jobs",
      key: "a1f",
    },
    {
      title: "Design & Development",
      description: "150 available jobs",
      key: "a15",
    },
    {
      title: "Design & Development",
      description: "150 available jobs",
      key: "a18",
    },
    {
      title: "Design & Development",
      description: "150 available jobs",
      key: "a11",
    },
    {
      title: "Design & Development",
      description: "150 available jobs",
      key: "a1ss",
    },
    {
      title: "Design & Development",
      description: "150 available jobs",
      key: "a1q",
    },
    {
      title: "Design & Development",
      description: "150 available jobs",
      key: "a1aas",
    },
  ];
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-3xl">Explore Industry Projects</p>
          <p className="text-sm pt-7"> Lorem Ispum Lorem Ispum Ispim lorem</p>
        </div>
        <p className="text-xl">All Category</p>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-10">
        {data.map((ev) => {
          return (
            <IpCard
              key={ev.key}
              title={ev.title}
              description={ev.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Index;
