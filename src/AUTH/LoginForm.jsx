import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);

  function handleLOGING(e) {
    e.preventDefault();
    try {
      let EMAIL = email;
      let PASSWORD = password;
      const isValid =
        EMAIL === "muhammadkhubabsiddiqui@gmail.com" && PASSWORD === "0000";

      if (isValid) {
        toast.success("Successfully access");
        setTimeout(() => {
          navigate("/client");
        });
      } else {
        toast.error("Wrong Password");
        setAuth(false);

        return null;
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  }
  // function handleLoginButton() {
  //   auth &&
  //     setTimeout(() => {
  //       navigate("client");
  //     });
  // }

  function handleButton() {
    setTimeout(() => {
      navigate("/");
    }, 500);
  }

  return (
    <section className="h-screen    bg-cover bg-center bg-no-repeat bg-[url('BGCHECK.png')] ">
      <Toaster />
      <div className="fixed flex justify-center lg:top-3 top-6 w-screen lg:w-full z-50  h-15 m-2 ">
        <div className=" w-[80%] py-3 px-10">
          <button
            onClick={handleButton}
            className="heading text-5xl text-teal-400"
          >
            Crypture
          </button>
        </div>
      </div>
      <div className="h-full w-full flex items-center py-20">
        <div className="px-4 py-10 mx-auto w-120  rounded-2xl p-10 bg-white/10 bg-opacity-0  ">
          <h2 className="heading text-3xl font-bold mb-8 text-center text-teal-400 ">
            Login
          </h2>
          <form className="space-y-6" onSubmit={handleLOGING}>
            <div className="relative">
              <input
                //   value={formData.name}
                type="email"
                placeholder="example@gmail.com"
                id="email"
                name="email"
                required
                className="w-full mb-4 hover:border-white/20 hover:bg-white/ bg-white/5 border border-e-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-400 focus:bg-blue-500/5 "
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <input
                //   value={formData.email}
                type="password"
                placeholder="Jhon_doe>1234?"
                id="password"
                name="password"
                required
                className="w-full mb-4 hover:border-white/20 hover:bg-white/ bg-white/5 border border-e-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-400 focus:bg-blue-500/5 "
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className=" flex flex-col  ">
                <div className="my-2 flex flex-col items-start ">
                  <div
                    type="button"
                    className="text-white/50  font-bold hover:text-red-400"
                  >
                    Forgot Password?
                  </div>
                  <div
                    type="button"
                    className="text-teal-400 hover:text-slate-800"
                  >
                    Sign up! Here
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-[20%] bg-teal-400 text-white py-3 px-6 rounded-2xl font-medium transition rtelative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
