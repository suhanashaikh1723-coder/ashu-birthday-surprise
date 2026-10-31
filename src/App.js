
import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import LoveLetter from "./pages/LoveLetter";
import Countdown from "./pages/Countdown";
import BirthdayCake from "./pages/BirthdayCake";
import FinalSurprise from "./pages/FinalSurprise";

import "./App.css";

function App() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const startMusic = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
    } catch (error) {
      console.log("Music could not play:", error);
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      await startMusic();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <BrowserRouter>
      <audio
        ref={audioRef}
        src="/darkhaast.mp4?v=2"
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      <button className="music-button" onClick={toggleMusic}>
        {playing ? "⏸ Pause Music" : "🎵 Play Music"}
      </button>

      <Routes>
        <Route
          path="/"
          element={<Welcome onStartMusic={startMusic} />}
        />
        <Route path="/letter" element={<LoveLetter />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/cake" element={<BirthdayCake />} />
        <Route path="/gift" element={<FinalSurprise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
