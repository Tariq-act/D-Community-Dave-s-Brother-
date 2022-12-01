import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./Components/LandingPage/Header";
import ClientOBPage from "./Pages/ClientOBPage";
import DeveloperOBPage from "./Pages/DeveloperOBPage";
import LandingPage from "./Pages/LandingPage";
import VendorOBPage from "./Pages/VendorOBPage";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/clientOnboarding" element={<ClientOBPage />} />
          <Route path="/developerOnboarding" element={<DeveloperOBPage />} />
          <Route path="/vendorOnboarding" element={<VendorOBPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
