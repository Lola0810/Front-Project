import { Component } from "react";
import {HashLink as Link} from "react-router-hash-link";

import FormField from "../components/FormField";
import {verifyForm} from "../../public/utils";

export default class Login extends Component {

    _submitForm() {
        const fieldsId = ['name','password']
        if(verifyForm(...fieldsId.map(id => document.getElementById(id)))) {
            console.log('logged !')
        }
    }

    render() {
        return (
            <section className="member__area">
                <div className="middle__form login">
                    <h1>Connectez-vous</h1>

                    <div>
                        <FormField tag="pseudo" id="name" />
                        <FormField tag="mot de passe" id="password" />
                    </div>

                    <div className="bottom">
                        <button className="login" onClick={this._submitForm}>
                            Se connecter
                        </button>
                        <span>Pas de compte ? <Link to="/inscription">Créer-en un !</Link></span>
                    </div>

                </div>
            </section>
        )
    }

}