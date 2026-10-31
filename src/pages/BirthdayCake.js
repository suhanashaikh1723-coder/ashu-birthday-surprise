import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BirthdayCake() {
  const navigate = useNavigate();
  const [candlesOff, setCandlesOff] = useState(false);

  return (
    <div className="page">
      <p className="subtitle">MAKE A WISH, BABY! 💗</p>

      <h1>A Birthday Cake For You 🎂</h1>

      <div className="cake-display">
        <div className="candles">
          {candlesOff ? "🌫️ 🌫️ 🌫️" : "🕯️ 🕯️ 🕯️"}
        </div>

        <div className="cake-decoration">💗</div>
        <div className="cake-emoji">🎂</div>
      </div>

      <button onClick={() => setCandlesOff(!candlesOff)}>
        {candlesOff ? "Light Candles Again 🕯️" : "Blow Candles 💨"}
      </button>

      {candlesOff && (
        <div className="letter-card">
          <h2>Wish granted! ✨</h2>

          <p>Happy birthday to you chotu 😁</p>

          <p>May allah bless you😌 🤲</p>

          <p>
            Mai waha toh nahi aa sakti na jaanu
            isliye mi a wala cake 😅
            apke liye banaya hai apka birthday
            special feel karaane ke liye ☺️
          </p>

          <p>
            ap ka birthday is saal mi mana rahi ho 😝
          </p>

          <h2>l Love you meri jaaan💋😘</h2>
        </div>
      )}

      <div className="buttons">
        <button onClick={() => navigate("/countdown")}>
          ← Back
        </button>

        <button onClick={() => navigate("/gift")}>
          Next →
        </button>
      </div>
    </div>
  );
}

export default BirthdayCake;