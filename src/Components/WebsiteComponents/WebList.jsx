import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import {
  passToggle,
  webdelete,
  webEdit,
  add,
  editToggle,
} from "../../../Reducx/Slices/WebsiteManagementSlices";

const WebList = () => {
  const WEB = useSelector((state) => state.WebManagement);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(webdelete(id));
  }
  function handleEdit(id) {
    dispatch(webEdit(id));
    dispatch(editToggle(id));
  }

  function handleStartEditing(id) {
    handleEdit(id);
    handleValue(id);
  }

  function handleToggle(id) {
    dispatch(passToggle(id));
  }
  const [webLink, setWebLink] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEditToggle(id) {
    dispatch(
      add({
        id: uuidv4(),
        website: webLink,
        email: email,
        password: password,
      })
    );
    dispatch(webdelete(id));
    setWebLink("");
    setEmail("");
    setPassword("");
  }

  function handleToggleDelete(index) {
    return WEB.filter((web) => web.index !== index);
  }

  function handleValue(id) {
    const web = WEB.find((web) => web.id === id);
    if (web) {
      setWebLink(web.website);
      setEmail(web.email);
      setPassword(web.password);
    }
  }

  return (
    <>
      {WEB.map((web, index) =>
        web.edit //_____________________INPUT SECTION________________________
          ? web.website.length > 1 && (
              <li
                key={index}
                className=" INPUT_SECTION grid grid-cols-10 gap-2 place-content-center m-1 w-full h-[13%] bg-transparent font-roboto  "
              >
                <input
                  value={webLink}
                  onChange={(e) => setWebLink(e.target.value)}
                  className="col-span-4 my-5  truncate  rounded-lg bg-slate-800 text-white/40  "
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="col-span-3 my-5 px-1 truncate   rounded-lg bg-slate-800 text-white/40 "
                />
                <div className="col-span-2 grid  my-5 grid-cols-8 place-content-center font-bold text-lg px-1 turncate text-white/40  rounded-lg bg-slate-800  ">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={web.toggle ? "text" : "password"}
                    className="col-span-7 truncate"
                  />
                  <button
                    onClick={() => {
                      handleToggle(web.id), handleToggleDelete(index);
                    }}
                    className="text-teal-400"
                  >
                    {web.toggle ? <IoEye /> : <IoEyeOff />}
                  </button>
                </div>

                <div className="col-span-1 my-5 flex justify-evenly items-center text-teal-400   ">
                  <button
                    onClick={() => handleEditToggle(web.id)}
                    className="  h-full px-5 cursor-pointer  bg-teal-400 text-slate-800 font-bold   rounded-xl hover:bg-transparent hover:border-2 hover:border-teal-400 hover:text-teal-400 "
                  >
                    Save
                  </button>
                </div>
              </li>
            )
          : web.website.length > 1 && (
              <li
                key={web.id}
                className=" grid grid-cols-10 gap-4 place-content-center m-1 p-2 w-full h-[13%] bg-slate-800 border-2 border-white/30 rounded-lg "
              >
                <div className="col-span-4 m-1 px-1 truncate border-2 border-white/30 rounded-lg bg-white text-slate-800  ">
                  {web.website}
                </div>
                <div className="col-span-3 m-1 px-1 truncate border-2 border-white/30  rounded-lg bg-white text-slate-800 ">
                  {web.email}
                </div>
                <div className="col-span-2 grid grid-cols-8 place-content-center font-bold text-lg m-1 px-1 turncate border-2 border-white/30  rounded-lg bg-white text-slate-800 ">
                  <div className="col-span-7 truncate">
                    {web.toggle
                      ? web.password
                      : "*".repeat(web.password.length)}
                  </div>
                  <button
                    onClick={() => handleToggle(web.id)}
                    className="text-slate-800"
                  >
                    {web.toggle ? <IoEye /> : <IoEyeOff />}
                  </button>
                </div>
                <div className="col-span-1 flex justify-evenly items-center text-teal-400   ">
                  <button onClick={() => handleStartEditing(web.id)}>
                    {web.edit ? (
                      <MdEdit className="text-2xl hover:text-green-600 " />
                    ) : (
                      <MdEdit className="text-2xl hover:text-blue-600 " />
                    )}
                  </button>
                  <button onClick={() => handleDelete(web.id)}>
                    <MdDelete className="text-2xl hover:text-red-500 " />
                  </button>
                </div>
              </li>
            )
      )}
    </>
  );
};

export default WebList;
