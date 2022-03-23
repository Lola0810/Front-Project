import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from './components/NavBar';

// routes
import Home from './Home';


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
          </Routes>
        </main>

        <footer>
          &copy; ThumusTeam
        </footer>
      </Router>
    )
  }

}