export default function InfoBox({ children, display }) {
  return (
    <section className="infobox">
      <h2>{display?.location?.country}</h2>

      <p className="localtime">{display?.location?.localtime}</p>
      {children}
    </section>
  );
}
