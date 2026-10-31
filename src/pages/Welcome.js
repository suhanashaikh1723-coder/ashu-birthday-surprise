import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="page welcome-page">
      <div className="hearts">💕 ❤️ 💗 💖 💕</div>

      <p className="subtitle">A SPECIAL DAY FOR YOU 💗</p>

      <h1>
        Happy Birthday
        <br />
        <span>Meri Jaan! ❤️</span>
      </h1>

      <p className="description">
        I made something special just for you
        <br />
        Ashu 😘💘
      </p>

      <div className="big-heart">💝</div>

      <button onClick={() => navigate("/letter")}>
        Open Your Surprise 🎁
      </button>

      <p className="footer-text">
        Made with endless love ❤️
      </p>
    </div>
  );
}

export default Welcome;