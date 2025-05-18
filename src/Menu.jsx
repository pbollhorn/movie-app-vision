import { useState } from "react";
import Navbar from "./Navbar.jsx";

export default function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <div id="menu">
      <div id="header">
        <div>
          <h1>Movie App Vision</h1>
        </div>
        <div>
          <button id="burgerButton" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>

      {/* Only show Navbar if menuIsOpen is true */}
      {menuIsOpen && <Navbar id="burgerNavbar"/>}
    </div>
  );
}
