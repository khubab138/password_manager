import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-full w-full  mt-17 ">
      <div className="grid grid-cols-2 gap-2 ">
        <div className="col-span-1 p-5  flex flex-col items-start  ">
          <div>
            <h1 className="text-6xl font-bold my-4 text-teal-400">
              Secure and intuitive password manager
            </h1>
            <p className="text-2xl my-2 text-white/30">
              Organize your complex passwords and keep them securely in a single
              place
              <span className="heading text-3xl mx-2 text-teal-400 ">
                Crypture
              </span>
              the Encrypted and futuristic
            </p>
          </div>
          <div className="flex my-2 justify-center items-center">
            <button className="  m-1 h-full px-5 py-1 cursor-pointer  bg-teal-400 text-slate-800 font-bold   rounded-xl hover:bg-transparent hover:border-2 hover:border-teal-400 hover:text-teal-400 ">
              Get Crypture
            </button>
          </div>
        </div>
        <div className="col-span-1  ">
          <div className="relative h-full w-full bg-cover bg-center bg-no-repeat rounded-4xl   bg-[url('/Hero.jpg')]">
            <div className="absolute  inset-0 bg-teal-400/40 z-0  rounded-4xl "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
