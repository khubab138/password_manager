import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { FaEthereum } from "react-icons/fa";
import { FcDataEncryption } from "react-icons/fc";
import { TbSortAZ } from "react-icons/tb";

import { useDispatch, useSelector } from "react-redux";
import { keydelete, add } from "../../../Reducx/Slices/KeyManagementSlice";

const KeyList = () => {
  const KEY = useSelector((state) => state.KeyManagement);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(keydelete(id));
  }

  return (
    <>
      {KEY.map((key, index) => (
        <li
          key={key.id}
          className=" grid grid-cols-20  place-content-center m-1 p-2  h-[28%] w-[100%] bg-slate-800 border-2 border-white/30 rounded-lg "
        >
          <div className="col-span-1 place-content-center text-2xl text-white ">
            {key.KeyTypes === "BTC" ? (
              <PiCurrencyBtcFill />
            ) : key.KeyTypes === "ETH" ? (
              <FaEthereum />
            ) : key.KeyTypes === "Encrypted_keys" ? (
              <FcDataEncryption />
            ) : (
              key.KeyTypes === "SeedPhrase" && <TbSortAZ />
            )}
          </div>
          <div className="col-span-7  mx-1 px-1 truncate border-2 border-white/30 rounded-lg bg-white text-slate-800  ">
            {key.key}
          </div>
          <div className="col-span-7 mx-1 px-1 truncate border-2 border-white/30 rounded-lg bg-white text-slate-800  ">
            {key.publicKey}
          </div>
          <div className="col-span-4 mx-1 px-1 truncate border-2 border-white/30  rounded-lg bg-white text-slate-800 ">
            {key.address}
          </div>
          <div className="col-span-1 flex justify-evenly items-center text-teal-400   ">
            <button onClick={() => handleDelete(key.id)}>
              <MdDelete className="text-2xl hover:text-red-500 " />
            </button>
          </div>
        </li>
      ))}
    </>
  );
};
export default KeyList;
