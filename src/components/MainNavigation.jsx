import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainNavigation() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((prev) => !prev);
  }
  return (
    <div className="main-navigation">
      {!navOpen && (
        <button className="icon-button" onClick={toggleNav}>
          <ion-icon name="reorder-four-outline" className="icon"></ion-icon>
        </button>
      )}
      {navOpen && (
        <nav className="navigation-list">
          <button className="icon-button" onClick={toggleNav}>
            <ion-icon name="close-outline" className="icon"></ion-icon>
          </button>
          <Link to="/">Home</Link>
          <Link to="/random">RandomMeal</Link>
          <Link to="/auth/login">Log In</Link>
          <Link to="/auth/signup">Sign Up</Link>
        </nav>
      )}
    </div>
  );
}
