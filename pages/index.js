import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/bodyComponents/Banner";
import Index from "../components/bodyComponents/stepsSection/Index";
import Selection from "../components/bodyComponents/Selection/Index";
import IndustryProjects from "../components/bodyComponents/industryProjects/Index";
import TopInterns from "../components/bodyComponents/topInterns/Index";
import Students from "../components/bodyComponents/Students";
import Companies from "../components/bodyComponents/Companies";
import NewsLetter from "../components/bodyComponents/NewsLetter";
import Footer from "../components/bodyComponents/Footer";
// import Sample from "../components/sample.pdf";
// import PDFViewer from "pdf-viewer-reactjs";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="px-40 flex flex-col items-center justify-center">
        <Index />
        <Selection />
        <IndustryProjects />
      </div>
      <TopInterns />
      <div className="px-40 flex flex-col items-center justify-center">
        <Students />
        <Companies />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
}
