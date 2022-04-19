import { HashLink as Link } from "react-router-hash-link";

export default function NavBar() {
    return (
        <nav>
            <ul>
              <Link to="/">
                <li>Accueil</li>
              </Link>
              <Link to="/regles">
                <li>Règles</li>
              </Link>
              <Link to="/classement">
                <li>Classement</li>
              </Link>
            </ul>
        </nav>
    )
}