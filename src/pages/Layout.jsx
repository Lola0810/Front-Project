import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

// routes
import Home from "./Home";
import Game from "./Game";
import NF from "./NF/NotFound";
import Wait from "./wait/Wait";
import Party from './party/Party';
import Rules from './Rules';

// member area
import Login from "./memberArea/Login";
import Logout from "./memberArea/Logout";
import Register from "./memberArea/Register";

// rooms
import Create from "./rooms/Create";
import Join from "./rooms/Join";

// login
import { getUserMe, getUserToken } from "../public/api";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, set: false };
  }

  componentDidMount() {
    const token = getUserToken();
    console.log(token);
    if (!token) {
      return this.setState({ set: true });
    }
    getUserMe()
      .then(res => this.setState({ user: res.data, set: true }))
      .catch(() => {
        this.setState({ set: true });
      });
  }

  render() {
    return (
      <Router>
        <header>
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route exact path="/" element={<Home user={this.state.user} />} />
            <Route path="/regles" element={<Rules />} />

            <Route path="/partie/:id" element={<Party />} />

            <Route path="/connexion" element={<Login />} />
            <Route path="/create" element={this.state.set ? this.state.user ? <Create user={this.state.user} /> : <Login /> : <Wait />} />
            <Route path="/join" element={this.state.set ? this.state.user ? <Join user={this.state.user} /> : <Login /> : <Wait />} />
            <Route path="/inscription" element={<Register />} />
            <Route path="/deconnexion" element={<Logout />} />

            <Route path="/:id" element={this.state.set ? this.state.user ? <Game user={this.state.user} /> : <Login /> : <Wait />} />

            <Route path="*" element={<NF />} />
          </Routes>
        </main>

        <footer>&copy; ThumusTeam</footer>
      </Router>
    );
  }
}
