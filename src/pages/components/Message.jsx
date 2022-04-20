export default function Message({ pseudo, message, timestamp }) {
  return (
    <div className="message" style={{ height: "fit-content" }}>
      {pseudo ? <span className="author">{pseudo}</span> : ""}
      <p>{message}</p>
      {timestamp ? <span className="date">Envoyé à {timestamp}</span> : ""}
    </div>
  );
}
