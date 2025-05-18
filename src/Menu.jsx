import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div id="menu">
      <div id="header">
        <div>
          <h1>Movie App Vision</h1>
        </div>
        <div>
          <button id="burgerButton">☰</button>
        </div>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/vision">Vision</Link>
        <Link to="/endpoints">Endpoints</Link>
      </nav>
    </div>
  );
}
