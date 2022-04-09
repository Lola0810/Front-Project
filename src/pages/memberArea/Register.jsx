import { Component } from "react";
import {HashLink as Link} from "react-router-hash-link";

import FormField from "../components/FormField";
import {verifyForm} from "../../public/utils";

export default class Register extends Component {

    _submitForm() {
        const fieldsId = ['name','email','password', 'cpassword']
        if(verifyForm(...fieldsId.map(id => document.getElementById(id)))) {
            console.log('registered !')
        }
    }

    render() {
        return (
            <section className="member__area">
                <div className="middle__form register">
                    <h1>Inscrivez-vous</h1>

                    <div>
                        <FormField tag="pseudo" id="name" type="text" />
                        <FormField tag="email" id="email" type="email" />
                        <FormField tag="mot de passe" id="password" type="password" />
                        <FormField tag="mot de passe (à nouveau)" id="cpassword" type="password" />
                    </div>

                    <div className="bottom">
                        <button className="register" onClick={this._submitForm}>
                            Créer votre compte
                        </button>
                        <span>Déjà un compte ? <Link to="/connexion">Connectez-vous</Link></span>
                    </div>

                </div>
            </section>
        )
    }

}