import React from "react";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  function handleButton() {
    setTimeout(() => {
      navigate("/login");
    }, 500);
  }
  return (
    <section id="home" className="h-full w-full  mt-17 ">
      <div className="grid grid-cols-2 gap-2 ">
        <div className="col-span-1 p-5  grid grid-row-5  ">
          <div className="row-span-4 grid-rows-5 ">
            <h1 className="row-span-2 text-6xl font-bold my-4 text-teal-400">
              Secure and intuitive password manager
            </h1>
            <p className="row-span-2 text-2xl my-2 text-white/30">
              Organize your complex passwords and keep them securely in a single
              place
              <span
                onClick={handleButton}
                className="heading text-3xl mx-2 text-teal-400 "
              >
                Crypture
              </span>
              the Encrypted and futuristic
            </p>
            <button
              onClick={handleButton}
              className="row-span-1  m-1 px-5 py-2 cursor-pointer  bg-teal-400/80 text-slate-800 font-bold   rounded-xl hover:bg-teal-400  "
            >
              Get Crypture
            </button>
          </div>
        </div>
        <div className="col-span-1 h-full  ">
          <div className="relative h-full w-full bg-cover bg-center bg-no-repeat rounded-4xl   bg-[url('/Hero.jpg')]">
            <div className="absolute  inset-0 bg-teal-400/40 z-0  rounded-4xl "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
