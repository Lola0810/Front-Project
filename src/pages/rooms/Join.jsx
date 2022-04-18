import { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Navigate } from "react-router-dom";

import FormField from "../components/FormField";
import { getMyRoom, joinRoom } from "../../public/api";
import { verifyForm } from "../../public/utils";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this._submitForm = this._submitForm.bind(this);
    this.state = { success: false, roomID: null };
  }

  _submitForm() {
    const fieldsId = ["id"];

    if (verifyForm(...fieldsId.map((id) => document.getElementById(id)))) {
      fieldsId.push("password");
      const fields = Object.fromEntries(
        fieldsId.map((id) => [id, document.getElementById(id).value])
      );
      joinRoom(fields)
        .then(() => {
          this.setState({
            sucesss: true,
            id: fields.id,
          });
        })
        .catch((e) => {
          alert(e);
        });
    }
  }

  componentDidMount() {
    getMyRoom().then((a) => {
      this.setState({
        sucesss: a.data ? true : false,
        id: a.data ? a.data.id : null,
      });
    });
  }

  render() {
    return this.state.sucesss && this.state.id ? (
      <Navigate to={"/" + this.state.id} />
    ) : (
      <section className="member__area">
        <div className="middle__form login">
          <h1>Rejoins une partie!</h1>

          <div>
            <FormField tag="Id de la salle (5 lettres)" id="id" />
            <FormField tag="Mot de passe ? (Pas obligatoire)" id="password" />
          </div>

          <div className="bottom">
            <button className="login" onClick={this._submitForm}>
              Rejoindre
            </button>
            <span>
              Tu veux créer une partie ?{" "}
              <Link to="/create">Créer-en une !</Link>
            </span>
          </div>
        </div>
      </section>
    );
  }
}
