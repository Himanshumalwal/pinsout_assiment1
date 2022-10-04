import React from "react";
import StepsCard from "./StepsCard";
import Image from "next/image";
const data = [
  {
    key: "11",
    counts: "01",
    heading: "Create a profile",
    description:
      "Create  your free  account  with google  Facebook, Linkedln or simplify create  a Qollab account  using your email ID",
  },
  {
    counts: "02",
    key: "12",
    heading: "Explore Opportuinites",
    description:
      "Search, seleact and join from over hundred of real industry projects OR simplify apply for an internship or a job posted by employers",
  },
  {
    counts: "03",
    key: "61",

    heading: "Showcase Capabilities",
    description:
      "Submit your work to shwocase your capabilities and impres top imployers, get noticed",
  },
  {
    counts: "04",
    key: "91",

    heading: "Get Certified",
    description:
      "Complete all project milestones, get your project work evaluated by senior experts & earn valuable certification",
  },
];
function Index() {
  return (
    <>
      <div className="flex items-center flex-col mt-10 ">
        <p className="text-3xl font-bold pb-10">How it Works</p>
        <div className="grid grid-cols-4 gap-3">
          {data.map((ev) => {
            return (
              <StepsCard
                key={ev.key}
                counts={ev.counts}
                heading={ev.heading}
                description={ev.description}
              />
            );
          })}
        </div>
        <div className="items-center grid grid-cols-2 gap-4 mt-20">
          <div>
            <p className="text-5xl">
              Work on real industry projects & showcase capabilities
            </p>
            <p className="text-sm pt-10">
              Stand out off the competition with savvy marketing strategies,
              state of the art careers sites, engaging job ads, and an easy
              hiring process-not just for your candidates, but for your own team
              too.
            </p>
          </div>
          <div className="w-full bg-black h-full text-white flex justify-center items-center">
            Image here
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
