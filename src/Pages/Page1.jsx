import React from "react";
import Navbar from "./PageComponents/Navbar";
import Hero from "./PageComponents/Hero";
import FAQ from "./PageComponents/FAQ";
import About from "./PageComponents/About";

const Page1 = () => {
  return (
    <>
      <div className="min-h-screen max-w-screen overflow-x-hidden bg-cover bg-center bg-no-repeat bg-[url('/LandingBG.png')]">
        <div className="h-full w-full py-5 px-10 flex flex-col justify-center items-center ">
          <div className="h-full w-full flex flex-col items-center gap-2">
            <Navbar />
            <Hero />
            <About />
            <FAQ />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
