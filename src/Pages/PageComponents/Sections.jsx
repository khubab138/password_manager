import React, { useState } from "react";
import Website from "../../Components/WebsiteComponents/Website";
import Application from "../../Components/AppComponents/Application";
import Key from "../../Components/Keys/Key";
import { useSelector, useDispatch } from "react-redux";
import { check } from "../../../Reducx/Slices/SectionSlice";
import { useNavigate } from "react-router";

const Sections = () => {
  const section = useSelector((state) => state.SectionCheck.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleButton() {
    setTimeout(() => {
      navigate("/client");
    }, 500);
  }

  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen bg-[url('../public/backgound.jpg')]">
      <div className="relative h-screen w-screen flex items-center justify-center ">
        <div className="fixed top-1 w-screen lg:w-full z-50">
          <div className="h-10 w-full  flex justify-center ">
            <div className="h-full w-[60%] py-3 px-10   ">
              <div className="flex justify-evenly text-xl border-2 border-teal-400 rounded-2xl py-2">
                <a
                  onClick={() => {
                    handleButton();
                  }}
                  className="hover:text-teal-300 transition"
                >
                  Home
                </a>
                <a
                  onClick={() => {
                    dispatch(check({ value: "Website" }));
                  }}
                  className="hover:text-teal-300 transition"
                >
                  Websites
                </a>
                <a
                  onClick={() => {
                    dispatch(check({ value: "app" }));
                  }}
                  className="hover:text-teal-300 transition"
                >
                  Apps
                </a>
                <a
                  onClick={() => {
                    dispatch(check({ value: "key" }));
                  }}
                  className="hover:text-teal-300 transition"
                >
                  Keys
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="  h-[80%] w-[80%] ">
          {section === "Website" ? (
            <section name="website" className="h-full w-full ">
              <h1 className="heading text-3xl w-full   ">WEBSITES</h1>
              <Website />
            </section>
          ) : section === "app" ? (
            <section name="app" className="h-full w-full ">
              <h1 className="heading text-3xl w-full   ">APPLICATIONS</h1>
              <Application />
            </section>
          ) : section === "key" ? (
            <section name="app" className="h-full w-full ">
              <h1 className="heading text-3xl w-full   ">Crypto Keys</h1>
              <Key />
            </section>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Sections;
