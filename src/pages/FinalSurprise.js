import React from "react";
import { useNavigate } from "react-router-dom";

function FinalSurprise() {
  const navigate = useNavigate();

  return (
    <div className="page final-page">

      <div className="hearts">💗 💕 ❤️ 💖 💘</div>

      <p className="subtitle">A SPECIAL SURPRISE FOR YOU 💌</p>

      <h1>Surprise meri jaan! ❤️</h1>

      <div className="letter-card">

        <p>
          Aap mere liye bhout special ho🥰😍
        </p>

        <p>
          Mi apki hamesha rahungi jaan apko kabhi b
          chod kar nahi jaungi kitni b mushkil ho
          har paal mi apka saath dungi jaana😚
        </p>

        <p>
          muje kehna nahi aata lekin ni itna keh sakti hu
          ke Aap mere liye bhout special person ho
          meri life ke😎🥳
        </p>

        <p>
          mi apko kabhi khona nahi chahti Chotu😁😘
        </p>

        <h2>I love you soooo muchhhhhh😘😘</h2>

        <h1>ummmmmmmahhhh💋💋💋</h1>

      </div>

      <div className="big-heart">❤️</div>

      <button onClick={() => navigate("/")}>
        Read Again, My Love 💗
      </button>

      <p className="footer-text">
        Forever yours, Ashu's love 💞
      </p>

    </div>
  );
}

export default FinalSurprise;