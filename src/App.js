import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Pages/authPages/Auth";
import ManufactureLanding from "./Pages/AppPages/ManufactureLanding";
import TransporterLanding from "./Pages/AppPages/TransporterLanding";
import bootstrap from "bootstrap";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="manu-landing" element={<ManufactureLanding />} />
        <Route path="trans-landing" element={<TransporterLanding />} />
      </Routes>
    </>
  );
}

export default App;
