import React from "react";
import ButtonPrimary from "../../inputs/ButtonPrimary";
import IntersCard from "./IntersCard";

function Index() {
  const data = [
    {
      img: "W",
      key: "1",
      days: "2 days to go",
      title: "Product Designer by Whatsapp",
      location: "Noida UP, India",
      seeking: "Anywhere",
      stipend: "2,000 Month",
      tenure: "3 Months",
      description:
        "IBM India is hiring MERN developers Intern. The location of the stated internship is Noida, UP Following the jb description of the same.",
    },
    {
      img: "W",
      key: "11",

      days: "2 days to go",
      seeking: "Anywhere",
      title: "Product Designer by Whatsapp",
      location: "Noida UP, India",
      stipend: "2,000 Month",
      tenure: "3 Months",
      description:
        "IBM India is hiring MERN developers Intern. The location of the stated internship is Noida, UP Following the jb description of the same.",
    },
    {
      img: "W",
      key: "41",

      seeking: "Anywhere",
      days: "2 days to go",
      title: "Product Designer by Whatsapp",
      location: "Noida UP, India",
      stipend: "2,000 Month",
      tenure: "3 Months",
      description:
        "IBM India is hiring MERN developers Intern. The location of the stated internship is Noida, UP Following the jb description of the same.",
    },
    {
      img: "W",
      days: "2 days to go",
      key: "81",

      seeking: "Anywhere",
      title: "Product Designer by Whatsapp",
      location: "Noida UP, India",
      stipend: "2,000 Month",
      tenure: "3 Months",
      description:
        "IBM India is hiring MERN developers Intern. The location of the stated internship is Noida, UP Following the jb description of the same.",
    },
    {
      img: "W",
      days: "2 days to go",
      key: "01",

      seeking: "Anywhere",
      title: "Product Designer by Whatsapp",
      location: "Noida UP, India",
      stipend: "2,000 Month",
      tenure: "3 Months",
      description:
        "IBM India is hiring MERN developers Intern. The location of the stated internship is Noida, UP Following the jb description of the same.",
    },
    {
      img: "W",
      days: "2 days to go",
      title: "Product Designer by Whatsapp",
      seeking: "Anywhere",
      location: "Noida UP, India",
      stipend: "2,000 Month",
      tenure: "3 Months",
      key: "11a",

      description:
        "IBM India is hiring MERN developers Intern. The location of the stated internship is Noida, UP Following the jb description of the same.",
    },
  ];
  return (
    <div className="w-full px-40 pt-20  pb-20 mt-10 flex flex-col bg-purple-100 bottom-b-2">
      <div className="flex justify-between items-center bg-grey ">
        <div>
          <p className="text-3xl">Internship by top employers</p>
          <p className="text-sm pt-7"> Lorem Ispum Lorem Ispum Ispim lorem</p>
        </div>
        <ButtonPrimary
          classes="bg-black text-white"
          text="Se all Internships"
        />
      </div>
      <div className="grid grid-cols-3 gap-3 mt-10">
        {data.map((ev) => {
          return (
            <IntersCard
              location={ev.location}
              img={ev.img}
              key={ev.key}
              tenure={ev.tenure}
              days={ev.days}
              stipend={ev.stipend}
              title={ev.title}
              seeking={ev.seeking}
              description={ev.description}
            />
          );
        })}
      </div>
      <div className="flex justify-between items-center mt-10 ">
        <div>
          <p className="text-3xl">Latest Jobs For Freshers</p>
          <p className="text-sm pt-7"> Lorem Ispum Lorem Ispum Ispim lorem</p>
        </div>
        <ButtonPrimary classes="bg-black text-white" text="Se all Jobs" />
      </div>
      <div className="grid grid-cols-3 gap-3 mt-10">
        {data.map((ev) => {
          return (
            <IntersCard
              location={ev.location}
              img={ev.img}
              tenure={ev.tenure}
              days={ev.days}
              key={ev.key}
              stipend={ev.stipend}
              title={ev.title}
              seeking={ev.seeking}
              description={ev.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Index;
