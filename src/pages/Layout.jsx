import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from './components/NavBar';

// routes
import Home from './Home';
import Game from './Game';

// member area
import Login from "./memberArea/Login";
import Register from "./memberArea/Register";


export default class Layout extends Component {

  render() {
    return (
      <Router>
        <header>
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/jouer" element={<Game />} />

            <Route path="/connexion" element={<Login />} />
            <Route path="/inscription" element={<Register />} />
          </Routes>
        </main>

        <footer>
          &copy; ThumusTeam
        </footer>
      </Router>
    )
  }

}