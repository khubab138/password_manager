import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

import toast, { Toaster } from "react-hot-toast";
import KeyList from "./KeyList";

const Key = () => {
  const dispatch = useDispatch();
  const [toggle, settoggel] = useState(true);

  const [inputType, setInputTpe] = useState("SeedPhrase");
  //+++++++++++++++++++++++CHECK BTC++++++++++++++++++++++++++++++++++++++++
  const [privateKey, setPrivateKey] = useState(true);
  const [btc, setbtc] = useState();
  const [eth, seteth] = useState();
  const [encrypted, setEncrypted] = useState();

  //=============================================================================
  const [seedPhrase, setSeedPhrase] = useState(true);
  const [publicKey, setpublicKey] = useState(true);
  const [address, setAddress] = useState(true);

  function handleBTCAUTH(e) {
    const key = e.target.value;
    if (key) {
      const isValid =
        key.startsWith("5") || key.startsWith("K") || key.startsWith("L");
      key.length === 52;
      if (isValid) {
        setPrivateKey(key);
      } else {
        toast.error("WRONG_BTC_KEYS! Please Enter your Keys Carefully");
        setPrivateKey("");
      }
    }
  }

  function handleETHAUTH(e) {
    const key = e.target.value;
    if (key) {
      const isValidKey =
        key.startsWith("0") || key.startsWith("9a") || key.startsWith("F");
      const isValid = isValidKey && key.length === 64;
      if (isValid) {
        setPrivateKey(key);
      } else {
        toast.error("WRONG_ETH_KEYS! Please Enter your Keys Carefully");
        setPrivateKey("");
      }
    }
  }
  function handleEncryptedKey(e) {
    const key = e.target.value;
    if (key) {
      const isValidKey = key.startsWith("6P");
      const isValid = isValidKey && key.length === 58;
      if (isValid) {
        setPrivateKey(key);
      } else {
        toast.error("WRONG_ENCRYPTED_KEYS! Please Enter your Keys Carefully");
        setPrivateKey("");
      }
    }
  }

  function handleAdd() {
    inputType === "SeedPhrase"
      ? dispatch(
          add({
            key: seedPhrase,
            email: email,
            password: password,
            inputType: inputType,
          })
        )
      : dispatch(
          add({
            key: privateKey,
            email: email,
            password: password,
            inputType: inputType,
          })
        );
    setPrivateKey("");
    setSeedPhrase("");
    setpublicKey("");
    setAddress("");
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-2 m-2 text-white bg-white/10 bg-opacity-0  rounded-xl   ">
      <div>
        <Toaster />
      </div>
      <div className="grid grid-row-8   place-content-center p-1 m-1   w-[90%] h-[70%]   ">
        <div className="row-span-2  ">
          <div className=" flex  justify-evenly">
            <div>
              <label>
                <input
                  className="m-1 "
                  name="inputGroup"
                  value={"SeedPhrase"}
                  type="radio"
                  checked={inputType === "SeedPhrase"}
                  onChange={(e) => setInputTpe(e.target.value)}
                />
                Seed_Phrase
              </label>
            </div>
            <div>
              <label>
                <input
                  className="m-1"
                  name="inputGroup"
                  value={"Private_Keys"}
                  type="radio"
                  checked={inputType === "Private_Keys"}
                  onChange={(e) => setInputTpe(e.target.value)}
                />
                Private_Keys
              </label>
            </div>
          </div>
        </div>
        <div className="row-span-5 grid grid-col-2 m-2 justify-center gap-5  w-full  ">
          <div className="col-span-1 flex">
            <textarea
              minLength={132}
              maxLength={300}
              className="col-span-2 h-25 w-140    border-white/30  placeholder-white/40 placeholder-opacity-10 border-2  p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-z0  text-white/40"
              placeholder={inputType === "file" ? "" : "url"}
              onChange={(e) => {}}
            />
          </div>
          <div className="col-span-1 flex  ">
            <textarea
              maxLength={130}
              className="col-span-5 h-20 w-80 border-white/30 text-white border-2 mx-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-0"
              type="email"
              placeholder="Email or Phone Number"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="col-span-5  border-white/30 text-white border-2 mt-5 mx-3 rounded-lg hover:border-2 hover:border-slate-800 active:border-0"
              type="text"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className=" row-span-1 h-10  flex justify-center items-center">
          <button
            onClick={handleAdd}
            className="m-1 h-full px-7 cursor-pointer  bg-teal-400 text-slate-800 font-bold   rounded-xl hover:bg-transparent hover:border-2 hover:border-teal-400 hover:text-teal-400 "
          >
            Save
          </button>
        </div>
      </div>
      //============================================LIST========================================================
      <ul
        className="flex flex-col items-center w-[90%] h-[40%] p-5   m-3 border-2 border-white/30 rounded-xl  overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-slate-800
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-teal-400
   "
      >
        <KeyList />
      </ul>
    </div>
  );
};

export default Key;
