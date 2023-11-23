export default function FormBox({
  children,
  getVal,
  handleDefault,
  setGetVal,
}) {
  return (
    <section className="formbox">
      <form className="formbox" onSubmit={handleDefault}>
        <input
          value={getVal}
          className="input"
          onChange={(e) => setGetVal(e.target.value)}
          type="text"
          placeholder="Write location..."
        />
      </form>
      {children}
    </section>
  );
}
