import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
//styles
import "./Navbar.css";
import Searchbar from "./Searchbar";

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav >
        <Link to="/" className="brand">
          <h1>Cooking Student</h1>
        </Link>
        <Searchbar />
        <Link to="/create">
          <h1>Create Recipe</h1>
        </Link>
      </nav>
    </div>
  );
}
