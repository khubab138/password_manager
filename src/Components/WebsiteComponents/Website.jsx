import WebList from "./WebList";
import { useDispatch } from "react-redux";
import { add } from "../../../Reducx/Slices/WebsiteManagementSlices";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const Website = () => {
  const dispatch = useDispatch();
  const [webLink, setWebLink] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, settoggel] = useState(true);

  function handleAdd() {
    dispatch(
      add({
        website: webLink,
        email: email,
        password: password,
      })
    );
    setWebLink("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-2 m-2 text-white bg-white/10 bg-opacity-0  rounded-xl   ">
      <div className="grid grid-cols-7  gap-6 place-content-center   p-4 w-[90%] h-[10%] m-3  ">
        <input
          value={webLink}
          className="col-span-3 border-white/30 text-white border-2  p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-0"
          type="url"
          placeholder="Enter URL..."
          onChange={(e) => {
            setWebLink(e.target.value);
          }}
        />
        <input
          value={email}
          className="col-span-2 border-white/30 text-white border-2 p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-0"
          type="email"
          placeholder="Login Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="col-span-1 grid grid-cols-6 gap-1  place-content-center">
          <input
            className="col-span-5  border-white/30 text-white border-2 p-1 rounded-lg hover:border-2 hover:border-slate-800 active:border-0"
            value={password}
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
        <WebList />
      </ul>
    </div>
  );
};

export default Website;
