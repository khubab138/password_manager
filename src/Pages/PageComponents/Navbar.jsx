import React from "react";

const Navbar = () => {
  return (
    <div className="fixed lg:top-3 top-6 w-screen lg:w-full z-50 ">
      <div className=" h-15 w-full m-2 flex justify-center ">
        <div className="h-full w-[90%] py-3 px-10   rounded-4xl   backdrop-blur-3xl shadow-2xl">
          <div className="grid grid-cols-6 gap-2 ">
            <div className="col-span-2 text-3xl font-bold heading text-teal-400  ">
              <h1>Crypture</h1>
            </div>
            <div className="col-span-2">
              <div className="flex justify-evenly text-lg">
                <a href="#home" className="hover:text-teal-300 transition">
                  Home
                </a>
                <a href="#pricing" className="hover:text-teal-300 transition">
                  Pricing
                </a>
                <a href="#about" className="hover:text-teal-300 transition">
                  About
                </a>
                <a href="#faq" className="hover:text-teal-300 transition">
                  FAQ
                </a>
              </div>
            </div>
            <div className="col-span-2  ">
              <div className="flex gap-2 justify-end">
                <button className="px-4 py-1 rounded bg-teal-600 hover:bg-teal-500 transition">
                  Login
                </button>
                <button className="px-4 py-1 rounded border border-teal-400 hover:bg-teal-400 hover:text-black transition">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
