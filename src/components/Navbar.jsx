import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>🏆 Team Counter</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
