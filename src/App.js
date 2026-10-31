import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import LoveLetter from "./pages/LoveLetter";
import Countdown from "./pages/Countdown";
import BirthdayCake from "./pages/BirthdayCake";
import FinalSurprise from "./pages/FinalSurprise";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/letter" element={<LoveLetter />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/cake" element={<BirthdayCake />} />
        <Route path="/gift" element={<FinalSurprise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;