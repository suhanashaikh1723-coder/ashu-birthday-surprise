import React from "react";
import { useNavigate } from "react-router-dom";

function LoveLetter() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <p className="subtitle">
        A little message for you Chotu💌
      </p>

      <h1>Dear Meri jaan ❤️</h1>

      <div className="letter-card">

        <h2>Happy Birthday My Boy🎂</h2>

        <p>
          Aap mere liye bhout bhout special ho jaana,🤗
          Aap mere life ke khaas insaan hai🥰
        </p>

        <p>
          Subah b aap se hi hoti hai aur sham b 😎
          Aaj apka birthday hai shona 🥳
        </p>

        <p>
          mi dua karti hu allah aapko hamesha khush rakhe 😌
          aapki har ek khwaaish ko pura kare
          aapke goals apke successful hojaye🥳
        </p>

        <p>
          Aap ki smile mere dil ko chukar aati hai
          aap har din har paal haste raho
          mera baccha😘😁
        </p>

        <p>
          aap mere the mere hai aur hamesha mere hi raheenge
          jaana💘🥳
        </p>

        <h2>lots of love uuu😘💋</h2>

        <h2>Forever yours💞</h2>

      </div>

      <div className="buttons">
        <button onClick={() => navigate("/")}>
          ← Back
        </button>

        <button onClick={() => navigate("/countdown")}>
          Next →
        </button>
      </div>
    </div>
  );
}

export default LoveLetter;