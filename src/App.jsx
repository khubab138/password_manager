import React from "react";

import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import LoginForm from "./AUTH/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sections from "./Pages/PageComponents/Sections";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />{" "}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/client" element={<Page2 />} />
        <Route path="/sections" element={<Sections />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
