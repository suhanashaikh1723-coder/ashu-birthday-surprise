
import { useEffect, useRef, useState } from "react";
import "./App.css";
import PhotoGallery from "./PhotoGallery";

const wishes = [
  "You deserve all the beautiful things in life. 🌷",
  "May your dreams bloom like spring flowers. ✨",
  "Never stop being wonderfully you. 💜",
  "A little happiness for every new day. 🦋",
  "May life always surprise you in lovely ways. 🌙",
];

function App() {
  const [step, setStep] = useState(0);
  const [time, setTime] = useState({});
  const [selectedWish, setSelectedWish] = useState(null);
  const [letter, setLetter] = useState(false);
  const [gift, setGift] = useState(false);
  const [finale, setFinale] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const audioRef = useRef(null);

  // Birthday countdown
  useEffect(() => {
    const birthday = new Date("2026-11-08T00:00:00").getTime();

    const update = () => {
      const diff = birthday - Date.now();

      if (diff <= 0) {
        setTime(null);
        return;
      }

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  // Music button
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        audio.muted = false;
        audio.volume = 1;
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("Music playback error:", error);
      setMusicOn(false);
    }
  };

  // Start music on the first Next click
  const next = async () => {
    const audio = audioRef.current;

    if (audio && audio.paused) {
      try {
        audio.muted = false;
        audio.volume = 1;
        await audio.play();
      } catch (error) {
        console.error("Music playback failed:", error);
      }
    }

    setStep((current) => Math.min(current + 1, 6));
  };

  const back = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  const restart = () => {
    setStep(0);
    setLetter(false);
    setGift(false);
    setFinale(false);
    setSelectedWish(null);
  };

  const slideNames = [
    "WELCOME",
    "COUNTDOWN",
    "A LITTLE LETTER",
    "MEMORIES",
    "BIRTHDAY WISHES",
    "A LITTLE GIFT",
    "FINAL SURPRISE",
  ];

  return (
    <main className="app">

      {/* BACKGROUND MUSIC */}
      <audio
        ref={audioRef}
        src="/music/birthday-song.mp3"
        loop
        preload="auto"
        onPlay={() => setMusicOn(true)}
        onPause={() => setMusicOn(false)}
        onError={(e) =>
          console.error("Audio error:", e.currentTarget.error)
        }
      />

      <div className="floating-decor" aria-hidden="true">
        <span>✧</span>
        <span>♡</span>
        <span>✿</span>
        <span>🦋</span>
        <span>✧</span>
      </div>

      {/* HEADER */}
      <header className="presentation-header">
        <div className="brand">
          a little something <span>♡</span>
        </div>

        <button className="music-button" onClick={toggleMusic}>
          {musicOn ? "Ⅱ Music" : "♫ Music"}
        </button>
      </header>

      {/* PROGRESS */}
      <div className="presentation-progress">
        <div className="progress-info">
          <span>{slideNames[step]}</span>
          <span>{String(step + 1).padStart(2, "0")} / 07</span>
        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${((step + 1) / 7) * 100}%` }}
          />
        </div>
      </div>

      {/* PRESENTATION SLIDES */}
      <div className="presentation-stage" key={step}>

        {/* SLIDE 1 */}
        {step === 0 && (
          <section className="presentation-slide welcome-slide">
            <p className="slide-label">✧ A SPECIAL DAY IS COMING ✧</p>

            <div className="welcome-symbol">♡</div>

            <h1>
              A little world
              <br />
              <span>made for you.</span>
            </h1>

            <div className="title-line" />

            <p className="slide-description">
              Filled with beautiful wishes, sweet memories
              <br />
              and a little bit of magic.
            </p>

            <p className="handwriting">This one's all about you ♡</p>
          </section>
        )}

        {/* SLIDE 2 */}
        {step === 1 && (
          <section className="presentation-slide">
            <p className="slide-label">THE WAIT IS ALMOST OVER</p>

            <h2>Something beautiful is coming...</h2>

            {time === null ? (
              <h2 className="birthday-message">
                Happy Birthday, Sweetheart! 🎂
              </h2>
            ) : (
              <div className="countdown">
                {Object.entries(time).map(([label, value]) => (
                  <div className="time-card" key={label}>
                    <strong>{String(value).padStart(2, "0")}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            )}

            <p className="date">08 · 11 · 2026</p>

            <p className="handwriting">
              A day made a little more special ♡
            </p>
          </section>
        )}

        {/* SLIDE 3 */}
        {step === 2 && (
          <section className="presentation-slide letter-section">
            <p className="slide-label">WORDS FROM THE HEART</p>

            <h2>A little letter for you</h2>

            <p className="slide-description">
              Some words are too special to leave unsaid.
            </p>

            <button
              className="feature-button"
              onClick={() => setLetter(!letter)}
            >
              {letter ? "Close the letter ♡" : "Open your letter 💌"}
            </button>

            {letter && (
              <div className="letter-card">
                <h3>Dear Sweetheart 💗,</h3>

                <p>
                  This little corner of the internet was made
                  to remind you how special you are to me.
                  May every day bring you new reasons to smile,
                  dreams to follow and beautiful memories to keep.
                </p>

                <p>Keep shining, always. 🌷</p>

                <span>With warm wishes, ♡</span>
              </div>
            )}
          </section>
        )}

        {/* SLIDE 4 */}
        {step === 3 && (
          <section className="presentation-slide gallery-presentation">
            <PhotoGallery onNext={next} />
          </section>
        )}

        {/* SLIDE 5 */}
        {step === 4 && (
          <section className="presentation-slide">
            <p className="slide-label">A LITTLE MAGIC FOR YOU</p>

            <h2>Pick a little star ✦</h2>

            <p className="slide-description">
              Each star has a tiny wish hidden inside.
            </p>

            <div className="stars">
              {wishes.map((wish, index) => (
                <button
                  className="star"
                  key={index}
                  onClick={() => setSelectedWish(wish)}
                  aria-label={`Show wish ${index + 1}`}
                >
                  ✦
                </button>
              ))}
            </div>

            {selectedWish && (
              <div className="wish-card">
                <p>{selectedWish}</p>

                <button
                  className="feature-button"
                  onClick={() => setSelectedWish(null)}
                >
                  Pick another ♡
                </button>
              </div>
            )}

            <p className="handwriting">A wish just for you ✨</p>
          </section>
        )}

        {/* SLIDE 6 */}
        {step === 5 && (
          <section className="presentation-slide">
            <p className="slide-label">A LITTLE SURPRISE</p>

            <h2>Something special is waiting...</h2>

            <div className="gift-illustration">🎁</div>

            <button
              className="feature-button"
              onClick={() => setGift(!gift)}
            >
              {gift ? "Close your gift ♡" : "Unwrap your gift"}
            </button>

            {gift && (
              <div className="gift-reveal">
                <h3>A wish for your happiness! 🌸</h3>

                <p>
                  May your world always be filled with
                  sunshine, kindness, laughter and
                  little moments worth remembering. 🩷
                </p>
              </div>
            )}
          </section>
        )}

        {/* SLIDE 7 */}
        {step === 6 && (
          <section className="presentation-slide final-section">
            <p className="slide-label">ONE LAST LITTLE SURPRISE</p>

            {!finale ? (
              <>
                <div className="final-symbol">✧</div>

                <h2>Ready for the final magic?</h2>

                <p className="slide-description">
                  There's one last message waiting for you.
                </p>

                <button
                  className="feature-button"
                  onClick={() => setFinale(true)}
                >
                  Reveal the magic ✨
                </button>
              </>
            ) : (
              <div className="final-reveal">
                <p className="handwriting">A little wish for you ♡</p>

                <h1>
                  Advance Happy
                  <br />
                  <span>Birthday!</span>
                </h1>

                <div className="final-symbol">🎂 ✨ 🦋</div>

                <p className="slide-description">
                  Wishing you a birthday filled with happiness,
                  laughter and beautiful memories.
                  May all your dreams come true and may this
                  new chapter bring you endless joy.
                </p>

                <h2>Happy Birthday, Sweetheart! 💜</h2>

                <p className="handwriting">
                  Keep shining, keep smiling ♡
                </p>
              </div>
            )}
          </section>
        )}

      </div>

      {/* BOTTOM NAVIGATION */}
      <footer className="presentation-footer">
        <button
          className="nav-button previous-button"
          onClick={back}
          disabled={step === 0}
        >
          ← Previous
        </button>

        <span className="footer-note">
          made with a little magic ♡
        </span>

        {step === 6 ? (
          <button className="nav-button next-button" onClick={restart}>
            Start again ↻
          </button>
        ) : step === 3 ? (
          <span className="gallery-nav-note">
            Use the gallery's Next button
          </span>
        ) : (
          <button className="nav-button next-button" onClick={next}>
            Next →
          </button>
        )}
      </footer>

    </main>
  );
}

export default App;
