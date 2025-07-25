import { useDispatch } from "react-redux";
import { add } from "../../../Reducx/Slices/ApplicationManagementSlice";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import ApplicationList from "./ApplicationList";
import toast, { Toaster } from "react-hot-toast";
const Application = () => {
  const dispatch = useDispatch();
  const [toggle, settoggel] = useState(true);

  const [inputType, setInputTpe] = useState("file");
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const [file, setfile] = useState(true);
  const [name, setName] = useState(true);
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const isValid =
        file.name.endsWith(".exe") ||
        file.name.endsWith(".apk") ||
        file.name.endsWith("zip");
      if (isValid) {
        setfile(file.name);
      } else {
        toast.error("Only .exe or .apk files allowed");
        e.target.value = "";
        setfile("");
      }
    }
  }

  function handleAdd() {
    inputType === "file"
      ? dispatch(
          add({
            file: file,
            email: email,
            password: password,
            inputType: inputType,
          })
        )
      : dispatch(
          add({
            file: name,
            email: email,
            password: password,
            inputType: inputType,
          })
        );
    setfile("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-2 m-2 text-white bg-white/10 bg-opacity-0  rounded-xl   ">
      <div>
        <Toaster />
      </div>
      <div className="grid grid-cols-7  gap-6 place-content-center   p-4 w-[90%] h-[10%] m-3  ">
        <div className="col-span-1 flex flex-col justify-center">
          <div>
            <label htmlFor="Upload">
              <input
                className="m-1 "
                name="inputGroup"
                value={"file"}
                type="radio"
                checked={inputType === "file"}
                onChange={(e) => setInputTpe(e.target.value)}
              />
              Upload File
            </label>
          </div>
          <div>
            <label htmlFor="Name or Link">
              <input
                className="m-1"
                name="inputGroup"
                value={"name"}
                type="radio"
                checked={inputType === "name"}
                onChange={(e) => setInputTpe(e.target.value)}
              />
              Name or link
            </label>
          </div>
        </div>
        <input
          className={`col-span-2 place-content-center border-white/30  placeholder-white/40 placeholder-opacity-10 border-2  p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-0  text-white 
            "file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold   file:bg-slate-700 file:text-white  hover:file:bg-slate-600
             `}
          type={inputType === "file" ? "file" : "url"}
          placeholder={inputType === "file" ? "" : "url"}
          onChange={(e) => {
            inputType === "file"
              ? (setfile(e.target.files[0]), handleFileChange(e))
              : setName(e.target.value);
          }}
        />
        <input
          className="col-span-2 border-white/30 text-white border-2 p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-0"
          type="email"
          placeholder="Email or Phone Number"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="col-span-1 grid grid-cols-6 gap-1  place-content-center">
          <input
            className="col-span-5  border-white/30 text-white border-2 p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-0"
            type={toggle ? "password" : "text"}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={() => {
              settoggel(!toggle);
            }}
          >
            {toggle ? <IoEye /> : <IoEyeOff />}
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleAdd}
            className=" col-span-1 m-1 h-full px-5 cursor-pointer  bg-teal-400 text-slate-800 font-bold   rounded-xl hover:bg-transparent hover:border-2 hover:border-teal-400 hover:text-teal-400 "
          >
            Save
          </button>
        </div>
      </div>

      <ul
        className="flex flex-col items-center w-[90%] h-[75%] p-5   m-3 border-2 border-white/30 rounded-xl  overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-slate-800
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-teal-400
   "
      >
        <ApplicationList />
      </ul>
    </div>
  );
};

export default Application;
