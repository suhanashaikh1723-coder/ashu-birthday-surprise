
import "./PhotoGallery.css";

function PhotoGallery({ onNext }) {
  const photos = [
    "/photos/photo1.jpg",
    "/photos/photo2.jpg",
    "/photos/photo3.jpg",
    "/photos/photo4.jpg",
  ];

  return (
    <div className="photo-gallery">
      <div className="gallery-heading">
        <span>🦋 ✨ 🌸</span>
        <h1>A Little Spotlight on You ✨</h1>
        <p>Because you deserve your own spotlight 🦋</p>
      </div>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="photo-card" key={photo}>
            <img src={photo} alt={`Memory ${index + 1}`} />
            <span className="photo-heart">♡</span>
          </div>
        ))}
      </div>

      <p className="gallery-note">
        Every picture has its own little story 💗
      </p>

      <button className="next-button" onClick={onNext}>
        Next surprise →
      </button>
    </div>
  );
}

export default PhotoGallery;
