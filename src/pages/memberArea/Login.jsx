import { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Navigate } from "react-router-dom";

import FormField from "../components/FormField";
import { verifyForm } from "../../public/utils";
import { changeToken, loginUser, storeUserToken } from "../../public/api";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this._submitForm = this._submitForm.bind(this)
    this.state = { success: false};
  }

  _submitForm() {
    const fieldsId = ["username", "password"];

    if (verifyForm(...fieldsId.map((id) => document.getElementById(id)))) {
      const fields = Object.fromEntries(
        fieldsId.map((id) => [id, document.getElementById(id).value])
      );
      loginUser(fields)
        .then((res) => {
          storeUserToken(res.data.token);
          changeToken();
          this.setState({
              sucesss: true
          })
        })
        .catch((e) => {
          alert(e);
        });
    }
  }

  render() {
    return this.state.sucesss ? (
      <Navigate replace to="/" />
    ) : (
      <section className="member__area">
        <div className="middle__form login">
          <h1>Connectez-vous</h1>

          <div>
            <FormField tag="pseudo" id="username" />
            <FormField tag="mot de passe" id="password" />
          </div>

          <div className="bottom">
            <button className="login" onClick={this._submitForm}>
              Se connecter
            </button>
            <span>
              Pas de compte ? <Link to="/inscription">Créer-en un !</Link>
            </span>
          </div>
        </div>
      </section>
    );
  }
}
