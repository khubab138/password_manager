import React from "react";
import Website from "./Components/WebsiteComponents/Website";
import Application from "./Components/AppComponents/Application";

const App = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat h-screen bg-[url('../public/backgound.jpg')]">
        <div className="relative h-screen w-screen flex items-center justify-center ">
          <div className="  h-[80%] w-[80%] ">
            {/* <section name="website" className="h-full w-full ">
              <h1 className="heading text-3xl w-full   ">WEBSITES</h1>
              <Website />
            </section> */}
            <section name="app" className="h-full w-full ">
              <h1 className="heading text-3xl w-full   ">APPLICATIONS</h1>
              <Application />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
