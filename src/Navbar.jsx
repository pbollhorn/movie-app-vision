import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/vision">Vision</Link>
        </li>
        <li>
          <Link to="/endpoints">Endpoints</Link>
        </li>
      </ul>
    </nav>
  );
}
