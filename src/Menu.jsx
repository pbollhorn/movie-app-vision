import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/vision">Vision</Link>
        <Link to="/endpoints">Endpoints</Link>
      </nav>
      <button id="burgerButton">☰</button>
    </>
  );
}
