const headshots = Object.values(
  import.meta.glob('../assets/headshots/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  }),
);

export default function Headshots() {
  return (
    <>
      <div className="page-intro">
        <h1>Headshots</h1>
        <p>View and download Denisse Ponce's headshot.</p>
      </div>
      <section>
        <div className="headshot-grid">
          {headshots.map((image, index) => (
            <a className="headshot-card" href={image} target="_blank" rel="noreferrer" key={image}>
              <img src={image} alt={`Denisse Ponce headshot ${index + 1}`} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
