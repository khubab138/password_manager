import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaStackOverflow } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";

const About = () => {
  return (
    <section id="about" className="h-full w-full mt-20 px-5 ">
      <div className="flex flex-row items-center justify-evenly  my-5 ">
        <div className=" grid grid-rows-5  mx-5 ">
          <div className="heading text-4xl text-teal-400 row-span-2">
            Crypture
          </div>
          <div className="row-span-1">
            <h1 className="text-3xl">Install Crypture</h1>
          </div>
          <div className="row-span-2">
            <p className="text-xl font-thin  ">
              Install a password manager on your device or download a browser
              extension.
            </p>
          </div>
        </div>
        <div className=" grid grid-rows-5  mx-5 ">
          <div className="heading text-6xl text-teal-400 row-span-2">
            <RiLockPasswordLine />
          </div>
          <div className="row-span-1">
            <h1 className="text-3xl">Import passwords</h1>
          </div>
          <div className="row-span-2">
            <p className="text-xl font-thin  ">
              Import or manually add your passwords and other sensitive data to
              your password vault.
            </p>
          </div>
        </div>
        <div className=" grid grid-rows-5  mx-5 ">
          <div className="heading text-6xl text-teal-400 row-span-2">
            <FaStackOverflow />
          </div>
          <div className="row-span-1">
            <h1 className="text-3xl">Organize your vault</h1>
          </div>
          <div className="row-span-2">
            <p className="text-xl font-thin  ">
              Organize your passwords using folders in the password manager for
              easier access.
            </p>
          </div>
        </div>
        <div className=" grid grid-rows-5  mx-5 ">
          <div className="heading text-6xl text-teal-400 row-span-2">
            <IoShieldCheckmark />
          </div>
          <div className="row-span-1">
            <h1 className="text-3xl">Improve your security</h1>
          </div>
          <div className="row-span-2">
            <p className="text-xl font-thin  ">
              Synchronize your passwords across multiple devices and explore
              additional security features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
