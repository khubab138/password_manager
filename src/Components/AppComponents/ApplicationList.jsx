import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import {
  add,
  passToggle,
  appdelete,
  appEdit,
  editToggle,
} from "../../../Reducx/Slices/ApplicationManagementSlice";

const ApplicationList = () => {
  const APP = useSelector((state) => state.AppManagement);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(appdelete(id));
  }
  function handleEdit(id) {
    dispatch(appEdit(id));
    dispatch(editToggle(id));
  }

  function handleStartEditing(id) {
    handleEdit(id);
    handleValue(id);
  }

  function handleToggle(id) {
    dispatch(passToggle(id));
  }
  const [file, setfile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEditToggle(id) {
    dispatch(
      add({
        id: uuidv4(),
        file: file,
        email: email,
        password: password,
      })
    );
    dispatch(webdelete(id));
    setfile("");
    setEmail("");
    setPassword("");
  }

  function handleToggleDelete(index) {
    return APP.filter((app) => app.index !== index);
  }

  function handleValue(id) {
    const app = APP.find((app) => app.id === id);
    if (app) {
      setfile(app.website);
      setEmail(app.email);
      setPassword(app.password);
    }
  }

  return (
    <>
      {APP.map((app, index) =>
        app.edit //_____________________INPUT SECTION________________________
          ? app.file.length > 1 && (
              <li
                key={index}
                className=" INPUT_SECTION grid grid-cols-10 gap-2 place-content-center m-1 w-full h-[13%] bg-transparent font-roboto  "
              >
                <input
                  value={file}
                  onChange={(e) => setfile(e.target.value)}
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
                    type={app.toggle ? "text" : "password"}
                    className="col-span-7 truncate"
                  />
                  <button
                    onClick={() => {
                      handleToggle(app.id), handleToggleDelete(index);
                    }}
                    className="text-teal-400"
                  >
                    {app.toggle ? <IoEye /> : <IoEyeOff />}
                  </button>
                </div>

                <div className="col-span-1 my-5 flex justify-evenly items-center text-teal-400   ">
                  <button
                    onClick={() => handleEditToggle(app.id)}
                    className="  h-full px-5 cursor-pointer  bg-teal-400 text-slate-800 font-bold   rounded-xl hover:bg-transparent hover:border-2 hover:border-teal-400 hover:text-teal-400 "
                  >
                    Save
                  </button>
                </div>
              </li>
            )
          : app.file.length > 1 && (
              <li
                key={app.id}
                className=" grid grid-cols-10 gap-4 place-content-center m-1 p-2 w-full h-[13%] bg-slate-800 border-2 border-white/30 rounded-lg "
              >
                <div className="col-span-4 m-1 px-1 truncate border-2 border-white/30 rounded-lg bg-white text-slate-800  ">
                  {app.website}
                </div>
                <div className="col-span-3 m-1 px-1 truncate border-2 border-white/30  rounded-lg bg-white text-slate-800 ">
                  {app.email}
                </div>
                <div className="col-span-2 grid grid-cols-8 place-content-center font-bold text-lg m-1 px-1 turncate border-2 border-white/30  rounded-lg bg-white text-slate-800 ">
                  <div className="col-span-7 truncate">
                    {app.toggle
                      ? app.password
                      : "*".repeat(app.password.length)}
                  </div>
                  <button
                    onClick={() => handleToggle(app.id)}
                    className="text-slate-800"
                  >
                    {app.toggle ? <IoEye /> : <IoEyeOff />}
                  </button>
                </div>
                <div className="col-span-1 flex justify-evenly items-center text-teal-400   ">
                  <button onClick={() => handleStartEditing(app.id)}>
                    {app.edit ? (
                      <MdEdit className="text-2xl hover:text-green-600 " />
                    ) : (
                      <MdEdit className="text-2xl hover:text-blue-600 " />
                    )}
                  </button>
                  <button onClick={() => handleDelete(app.id)}>
                    <MdDelete className="text-2xl hover:text-red-500 " />
                  </button>
                </div>
              </li>
            )
      )}
    </>
  );
};

export default ApplicationList;
