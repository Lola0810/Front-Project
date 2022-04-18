export default function User({ name }) {
  return (
    <div className="user">
      <img src={require("../../public/images/test.jfif")} alt="user" />
      <h4>{name}</h4>
    </div>
  );
}
