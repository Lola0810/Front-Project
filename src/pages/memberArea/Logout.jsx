import { Component } from "react";
import { Navigate } from "react-router-dom";
import { deleteUserToken } from "../../public/api";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: false };
  }
  render() {
    deleteUserToken();
    return this.state.timer ? (
      <Navigate to="/" />
    ) : (
      <section className="member__area">
        <div className="middle__form">
          <h1>Deconnexion effectué, redirection dans 5s...</h1>
        </div>
      </section>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({timer: true})
    }, 5000)
  }
}
