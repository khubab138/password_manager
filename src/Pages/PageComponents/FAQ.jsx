import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const FAQ = () => {
  const succesToast = () =>
    toast.success("Successfully sent!", {
      style: {
        border: "1px solid #007595",
        padding: "10px",
        color: "#3B82F6",
        backgroundColor: "rgb(29, 29, 29)",
      },
      iconTheme: {
        primary: "#007595",
        secondary: "#FFFAEE",
      },
    });
  const failToast = () => toast.error("Oops! Something went wrong");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const SERVICEID = "service_6avxjkm";
  const TEMPLATEID = "template_p8hv65b";
  const PUBLICKEY = "ytyoALOeB0Grq0bkX";
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICEID, TEMPLATEID, e.target, PUBLICKEY)
      .then((result) => {
        succesToast();
      })
      .catch(() => failToast());
  };

  return (
    <section id="faq" className="min-h-screen flex items-center py-20">
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
      <div className="px-4 mx-auto w-150">
        <h2 className="heading text-3xl font-bold mb-8 text-center text-emerald-400 ">
          FAQ's
        </h2>
        <form action="" className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              value={formData.name}
              type="text"
              placeholder="Name..."
              id="name"
              name="name"
              required
              className="w-full mb-4 hover:border-white/20 hover:bg-white/ bg-white/5 border border-e-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-400 focus:bg-blue-500/5 "
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              value={formData.email}
              type="email"
              placeholder="example@gmail.com"
              id="email"
              name="from_email"
              required
              className="w-full mb-4 hover:border-white/20 hover:bg-white/ bg-white/5 border border-e-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-400 focus:bg-blue-500/5 "
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              value={formData.message}
              placeholder="Your Message"
              id="message"
              name="message"
              rows={5}
              className="w-full mb-4 hover:border-white/20 hover:bg-white/ bg-white/5 border border-e-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-400 focus:bg-blue-500/5 "
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button
              type="submit"
              className="w-full bg-teal-400 text-white py-3 px-6 rounded font-medium transition rtelative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FAQ;
