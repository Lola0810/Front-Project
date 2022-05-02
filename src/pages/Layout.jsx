import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

// routes
import Home from "./Home";
import Party from "./party/Party";
import Rules from "./Rules";

// member area
import Login from "./memberArea/Login";
import Logout from "./memberArea/Logout";
import Register from "./memberArea/Register";

// rooms
import Create from "./rooms/Create";
import Join from "./rooms/Join";
import Error from "./components/Error";

// login
import L from "./L";

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
            <Route path="/regles" element={<Rules />} />

            <Route path="/partie/:id" element={<L />}>
              <Route path="/partie/:id" element={<Party />} />
            </Route>

            <Route path="/connexion" element={<Login />} />


            <Route path="/create" element={<L />}>
              <Route path="/create" element={<Create />} />
            </Route>

            <Route path="/join" element={<L />}>
              <Route path="/join" element={<Join />} />
            </Route>

            <Route path="/inscription" element={<Register />} />
            <Route path="/deconnexion" element={<Logout />} />

            <Route path="*" element={<Error code="404" />} />
          </Routes>
        </main>

        <footer>&copy; ThumusTeam</footer>
      </Router>
    );
  }
}
