import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Countdown() {
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [birthdayOver, setBirthdayOver] = useState(false);

  useEffect(() => {
    const birthdayDate = new Date("2026-11-03T00:00:00+05:30");

    const updateCountdown = () => {
      const difference = birthdayDate.getTime() - Date.now();

      if (difference <= 0) {
        setBirthdayOver(true);
        return;
      }

      setBirthdayOver(false);

      setTimeLeft({
        days: Math.floor(difference / 86400000),
        hours: Math.floor((difference / 3600000) % 24),
        minutes: Math.floor((difference / 60000) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page">
      <p className="subtitle">
        THE WAIT IS ALMOST OVER 💕
      </p>

      <h1>Countdown to Your Birthday 🎂</h1>

      {birthdayOver ? (
        <div className="letter-card">
          <h2>It's Your Birthday, Jaan! ❤️</h2>
          <p>Happy Birthday, My Chotu! 🥹</p>
        </div>
      ) : (
        <div className="timer-container">
          {["days", "hours", "minutes", "seconds"].map((item) => (
            <div className="timer-box" key={item}>
              <h2>
                {String(timeLeft[item]).padStart(2, "0")}
              </h2>
              <span>{item.toUpperCase()}</span>
            </div>
          ))}
        </div>
      )}

      <p className="description">
        Every second brings me closer to celebrating you! ❤️
      </p>

      <div className="buttons">
        <button onClick={() => navigate("/letter")}>
          ← Back
        </button>

        <button onClick={() => navigate("/cake")}>
          Next →
        </button>
      </div>
    </div>
  );
}

export default Countdown;