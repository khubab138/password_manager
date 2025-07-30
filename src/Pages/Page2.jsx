import React, { useState } from "react";
import ClientDashboard from "./PageComponents/Sections";
import { IoMdSettings } from "react-icons/io";
import { FaBtc } from "react-icons/fa6";
import { FaEthereum } from "react-icons/fa";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { check } from "../../Reducx/Slices/SectionSlice";

const Page2 = () => {
  const dispatch = useDispatch();
  const [section, setSection] = useState();
  const navigate = useNavigate();

  function handleSection() {
    dispatch(check({ value: section }));

    setTimeout(() => {
      navigate("/sections");
    });
  }

  return (
    <div className="min-h-screen max-w-screen flex justify-center items-center overflow-x-hidden bg-cover bg-center bg-no-repeat bg-[url('/LandingBG.png')]">
      <div className="fixed top-3 w-screen lg:w-full z-50">
        <div className="h-15 w-full flex justify-center  ">
          <div className=" flex flex-row items-center justify-between h-full w-[60%]  px-10  backdrop-blur-3xl shadow-2xl ">
            <a className="heading text-5xl cursor-pointer  text-teal-400 ">
              Crypture
            </a>
            <div className="flex justify-evenly items-center text-lg">
              <a className="hover:text-teal-300 m-2 text-lg transition">
                All Logs
              </a>
              <a className="hover:text-slate-800 text-teal-400 text-2xl m-2 transition">
                <IoMdSettings />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="h-full w-full mt-20 px-5 ">
        <div className="flex flex-row items-center justify-evenly   my-5 hover:-translate-y-0.5 ">
          <div
            onClick={() => {
              {
                setSection("Website"), handleSection();
              }
            }}
            className=" grid grid-rows-5  mx-5 p-2 hover:-translate-y-0.5  rounded-2xl bg-slate-800/80 "
          >
            <div className="heading flex gap-2 text-6xl text-teal-400 row-span-2">
              <IoLinkSharp />
              <CgWebsite />
            </div>
            <div className="row-span-1">
              <h1 className="text-3xl">Websites</h1>
            </div>
            <div className="row-span-2">
              <p className="text-xl font-thin  ">
                manually add your passwords and other sensitive data to your
                password vault.
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              {
                setSection("app"), handleSection();
              }
            }}
            className=" grid grid-rows-5  mx-5 p-2 hover:-translate-y-0.5  rounded-2xl bg-slate-800/80 "
          >
            <div className="heading flex gap-3 text-6xl text-teal-400 row-span-2">
              <FaAppStoreIos />
              <FaGooglePlay />
            </div>
            <div className="row-span-1">
              <h1 className="text-3xl">Apps and Files</h1>
            </div>
            <div className="row-span-2">
              <p className="text-xl font-thin  ">
                Organize your apps and Files using folders in the password
                manager.
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              {
                setSection("key"), handleSection();
              }
            }}
            className=" grid grid-rows-5  mx-5 p-2 hover:-translate-y-0.5  rounded-2xl bg-slate-800/80 "
          >
            <div className="heading flex gap-3 text-6xl text-teal-400 row-span-2">
              <FaBtc />
              <FaEthereum />
              <RiShieldKeyholeFill />
            </div>
            <div className="row-span-1">
              <h1 className="text-3xl">Improve security</h1>
            </div>
            <div className="row-span-2">
              <p className="text-xl font-thin  ">
                Synchronize your passwords across multiple devices and explore
                additional features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page2;
