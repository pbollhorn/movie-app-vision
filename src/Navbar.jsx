import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav id="navbar">
        <Link to="/">Home</Link>
        <Link to="/vision">Vision</Link>
        <Link to="/endpoints">Endpoints</Link>
      </nav>
  );
}