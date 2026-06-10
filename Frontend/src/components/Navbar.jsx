import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">CineVerse</h2>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/booking">Booking</Link>
      </div>

    </nav>
  );
}

export default Navbar;