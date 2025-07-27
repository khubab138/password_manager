import { useState } from "react";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import KeyList from "./KeyList";
import { add } from "../../../Reducx/Slices/KeyManagementSlice";
import { Tuple } from "@reduxjs/toolkit";

const Key = () => {
  const dispatch = useDispatch();

  const [inputType, setInputType] = useState("privateKey");
  //+++++++++++++++++++++++CHECK BTC++++++++++++++++++++++++++++++++++++++++
  const [privateKey, setPrivateKey] = useState();
  const [privateKeyTypes, setPrivateKeyTypes] = useState("BTC");
  const [btc, setbtc] = useState();
  const [eth, seteth] = useState();
  const [encrypted, setEncrypted] = useState();

  //=============================================================================
  const [seedPhrase, setSeedPhrase] = useState();
  const [publicKey, setpublicKey] = useState(true);
  const [address, setAddress] = useState(true);

  function handleBTCAUTH() {
    const key = btc.trim();
    const isValid =
      (key.startsWith("5") || key.startsWith("K") || key.startsWith("L")) &&
      key.length === 52;

    if (isValid) {
      return key;
    } else {
      toast.error("WRONG_BTC_KEYS! Please Enter your Keys Carefully");
      return null;
    }
  }

  function handleETHAUTH() {
    const key = eth.trim();
    const isValid =
      (key.startsWith("0") || key.startsWith("9") || key.startsWith("F")) &&
      key.length === 64;

    if (isValid) {
      return key;
    } else {
      toast.error("WRONG_ETH_KEYS! Please Enter your Keys Carefully");
      return null;
    }
  }

  function handleEncryptedKeyAUTH() {
    const key = encrypted.trim();
    const isValid = key.startsWith("6P") && key.length === 58;

    if (isValid) {
      return key;
    } else {
      toast.error("WRONG_ENCRYPTED_KEYS! Please Enter your Keys Carefully");
      return null;
    }
  }

  async function handleAdd() {
    try {
      if (inputType === "SeedPhrase") {
        dispatch(
          add({
            key: privateKey,
            publicKey: publicKey,
            address: address,
            inputType: inputType,
            privateKeyTypes: inputType,
          })
        );
      } else if (inputType === "privateKey") {
        let validatedKey = null;

        if (privateKeyTypes === "BTC") {
          validatedKey = handleBTCAUTH();
        } else if (privateKeyTypes === "ETH") {
          validatedKey = handleETHAUTH();
        } else if (privateKeyTypes === "Encrypted_keys") {
          validatedKey = handleEncryptedKeyAUTH();
        }

        if (validatedKey) {
          dispatch(
            add({
              key: validatedKey,
              publicKey: publicKey,
              address: address,
              inputType: inputType,
              privateKeyTypes: privateKeyTypes,
            })
          );
        } else {
          toast.error("Invalid private key provided.");
        }
      }
    } catch (error) {
      console.error("Error during key validation:", error);
      toast.error("Error during key validation.");
    } finally {
      setPrivateKey("");
      setSeedPhrase("");
      setpublicKey("");
      setAddress("");
    }
  }

  return (
    <div className="flex flex-col items-center justify-between h-full w-full p-2 m-2 text-white bg-white/10 bg-opacity-0  rounded-xl   ">
      <div>
        <Toaster />
      </div>
      <div className="grid grid-row-7   place-content-center p-1 m-1   w-[100%] h-[70%]   ">
        <div className="row-span-2  ">
          <div className="">
            <div className="  flex justify-evenly">
              <label>
                <input
                  className="m-1 "
                  name="inputGroup"
                  value={"SeedPhrase"}
                  type="radio"
                  checked={inputType === "SeedPhrase"}
                  onChange={(e) => setInputType(e.target.value)}
                />
                Seed_Phrase
              </label>
              <label>
                <input
                  className="m-1"
                  name="inputGroup"
                  value={"privateKey"}
                  type="radio"
                  checked={inputType === "privateKey"}
                  onChange={(e) => setInputType(e.target.value)}
                />
                Private_Keys
              </label>
            </div>
          </div>
        </div>

        <div className=" grid grid-col-2 place-items-center">
          {inputType === "SeedPhrase" ? (
            <div className=" col-span-1 row-span-5 grid grid-col-2 m-2 justify-center gap-5  w-full  ">
              <div className="col-span-1 flex">
                <textarea
                  minLength={132}
                  maxLength={300}
                  className="col-span-2 h-25 w-140     border-white/30  placeholder-white/40 placeholder-opacity-10 border-2  p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-z0  text-white/40"
                  placeholder="Your Phrase"
                  onChange={(e) => {
                    setPrivateKey(e.target.value);
                  }}
                />
              </div>
              <div className="col-span-1 flex  ">
                <textarea
                  maxLength={130}
                  className="col-span-5 h-20 w-80 p-1 border-white/30 text-white border-2 mx-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-0"
                  type="text"
                  placeholder="Your Public Keys"
                  onChange={(e) => {
                    setpublicKey(e.target.value);
                  }}
                />
                <input
                  className="col-span-5  border-white/30 p-1 text-white border-2 mt-5 mx-3 rounded-lg hover:border-2 hover:border-slate-800 active:border-0"
                  type="text"
                  placeholder="Your Wallet Address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
            </div>
          ) : (
            inputType === "privateKey" && (
              <div className="col-span-1  row-span-5 gap-2 m-8  grid grid-rows-5   w-full ">
                {/*++++++++++++++++++++++++++ PRIVATEKEYS++++++++++++++++++++++++++++ */}
                <div className="row-span-1 ">
                  <div className=" flex  justify-evenly">
                    <div>
                      <label>
                        <input
                          className="m-1 "
                          name="privateGroup"
                          value={"BTC"}
                          type="radio"
                          checked={privateKeyTypes === "BTC"}
                          onChange={(e) => {
                            setPrivateKeyTypes(e.target.value);
                          }}
                        />
                        BTC
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          className="m-1"
                          name="privateGroup"
                          value={"ETH"}
                          type="radio"
                          checked={privateKeyTypes === "ETH"}
                          onChange={(e) => setPrivateKeyTypes(e.target.value)}
                        />
                        Ethereum
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          className="m-1"
                          name="privateGroup"
                          value={"Encrypted_keys"}
                          type="radio"
                          checked={privateKeyTypes === "Encrypted_keys"}
                          onChange={(e) => setPrivateKeyTypes(e.target.value)}
                        />
                        Encrypted or Private Keys
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row-span-4 place-items-center  ">
                  <div className="mt-2">
                    <textarea
                      minLength={26}
                      maxLength={64}
                      className="col-span-2 h-9 w-180    border-white/30  placeholder-white/40 placeholder-opacity-10 border-2  p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-z0  text-white/40"
                      placeholder={privateKeyTypes}
                      onChange={(e) => {
                        privateKeyTypes === "BTC"
                          ? setbtc(e.target.value)
                          : privateKeyTypes === "ETH"
                          ? seteth(e.target.value)
                          : privateKeyTypes === "Encrypted_keys" &&
                            setEncrypted(e.target.value);
                      }}
                    />
                  </div>
                  <div className=" flex justify-center items-end ">
                    <textarea
                      maxLength={128}
                      className="col-span-2 mx-1 h-15 w-90    border-white/30  placeholder-white/40 placeholder-opacity-10 border-2  p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-z0  text-white/40"
                      placeholder={"Your Public Keys"}
                      onChange={(e) => {
                        setpublicKey(e.target.value);
                      }}
                    />
                    <textarea
                      maxLength={42}
                      className="col-span-2 h-9 w-90    border-white/30  placeholder-white/40 placeholder-opacity-10 border-2  p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-z0  text-white/40"
                      placeholder={"Your Wallet Address"}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        {/*++++++++++++++++++++++++++ SEED_PHRASE++++++++++++++++++++++++++++ */}
        <div className=" row-span-1 h-10  flex justify-center items-center">
          <button
            onClick={handleAdd}
            className="m-1 h-full px-7 cursor-pointer  bg-teal-400 text-slate-800 font-bold   rounded-xl hover:bg-transparent hover:border-2 hover:border-teal-400 hover:text-teal-400 "
          >
            Save
          </button>
        </div>
      </div>

      <ul
        className="flex flex-col items-center w-[90%] h-full p-3  border-2 border-white/30 rounded-xl  overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent [&::-webkit-scrollbar]:w-2
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
