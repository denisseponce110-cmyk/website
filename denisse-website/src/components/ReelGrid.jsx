export default function ReelGrid({ reels }) {
  return (
    <>
      <div className="reel-grid">
        {reels.map((reel) => (
          <div className="reel-card" key={reel.title}>
            <div className="video-wrap">
              <iframe src={reel.embedUrl} title={reel.title} allowFullScreen />
            </div>
            <div className="caption">{reel.title}</div>
          </div>
        ))}
      </div>
      <p className="placeholder-note">
        Edit src/data/reels.js to swap in real YouTube/Vimeo links, or add more entries.
      </p>
    </>
  );
}
