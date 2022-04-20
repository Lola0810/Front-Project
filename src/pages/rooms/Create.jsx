import { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Navigate } from "react-router-dom";

import FormField from "../components/FormField";
import { createRoom } from "../../public/api";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this._submitForm = this._submitForm.bind(this);
    this.state = { success: false, roomID: null };
  }

  _submitForm() {
    const fieldsId = ["maxUsers", "privateRoom", "password"];

    const fields = Object.fromEntries(fieldsId.map(id => [id, document.getElementById(id).value]));
    createRoom(fields)
      .then(res => {
        this.setState({
          sucesss: true,
          roomID: res.data.id,
        });
      })
      .catch(e => {
        alert(e);
      });
  }

  render() {
    return this.state.sucesss && this.state.roomID ? (
      <Navigate to={"/" + this.state.roomID} />
    ) : (
      <section className="member__area">
        <div className="middle__form login">
          <h1>Créer une game !</h1>

          <div>
            <FormField tag="Privé ?" id="privateRoom" type="checkbox" />
            <FormField tag="Nombre utilisateurs (Pas obligatoire)" id="maxUsers" />
            <FormField tag="Mot de passe ? (Pas obligatoire)" id="password" />
          </div>

          <div className="bottom">
            <button className="login" onClick={this._submitForm}>
              Créer
            </button>
            <span>
              Tu veux rejoindre une partie ? <Link to="/join">Rejoins-en une !</Link>
            </span>
          </div>
        </div>
      </section>
    );
  }
}
