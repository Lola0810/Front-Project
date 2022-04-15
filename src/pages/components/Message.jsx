export default function Message({ pseudo, message, timestamp }) {
  return (
    <div className="message" style={{height: "fit-content"}}>
      <span className="author">{pseudo}</span>
      <p>{message}</p>
      <span className="date">Envoyé à {timestamp}</span>
    </div>
  );
}
