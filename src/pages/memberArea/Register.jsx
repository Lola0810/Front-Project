import { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Navigate } from "react-router-dom";

import FormField from "../components/FormField";
import { verifyForm } from "../../public/utils";
import { changeToken, siginUser, storeUserToken } from "../../public/api";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this._submitForm = this._submitForm.bind(this);
    this.state = { success: false };
  }

  _submitForm() {
    const fieldsId = ["username", "email", "password", "cpassword"];
    if (verifyForm(...fieldsId.map(id => document.getElementById(id)))) {
      const fields = Object.fromEntries(fieldsId.map(id => [id, document.getElementById(id).value]));
      siginUser(fields)
        .then(res => {
          storeUserToken(res.data.token);
          changeToken();
          this.setState({
            sucesss: true,
          });
        })
        .catch(e => {
          alert(e);
        });
    }
  }

  render() {
    return this.state.sucesss ? (
      <Navigate to="/" />
    ) : (
      <section className="member__area">
        <div className="middle__form register">
          <h1>Inscrivez-vous</h1>

          <div>
            <FormField tag="pseudo" id="username" type="text" />
            <FormField tag="email" id="email" type="email" />
            <FormField tag="mot de passe" id="password" type="password" />
            <FormField tag="mot de passe (à nouveau)" id="cpassword" type="password" />
          </div>

          <div className="bottom">
            <button className="register" onClick={this._submitForm}>
              Créer votre compte
            </button>
            <span>
              Déjà un compte ? <Link to="/connexion">Connectez-vous</Link>
            </span>
          </div>
        </div>
      </section>
    );
  }
}
