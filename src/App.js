import React from "react";

import "./static/scss/app.scss";
import "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./components/presentation/header";
import Footer from "./components/presentation/footer";
import LandingPage from "./components/presentation/landingPage";
import GettingStarted from "./components/presentation/gettingStarted";
import Login from "./components/presentation/login";
import Register from "./components/presentation/register";
import AboutUs from "./components/presentation/aboutUs";
import Contacts from "./components/presentation/contact";
import Education from "./components/presentation/education";
import Finalize from "./components/presentation/finalizePage";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/resume-templates" element={<GettingStarted />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/finalize" element={<Finalize />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
