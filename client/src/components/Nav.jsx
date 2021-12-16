import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../css/component-css/Nav.css";

const Nav = ({ currentUser, handleLogout }) => {
  return (
    <div className="nav-main-div">
      <div className="logo-area">
        <img className="logo-nav" src={logo} />
        <Link to="/">
          <h1 className="nav-title">Nevermore</h1>
        </Link>
      </div>

      <div className="auth-options">
        {currentUser ? <Link to="/library">Library</Link> : null}
        {currentUser ? <Link to="/library/create">Create Tome</Link> : null}
        <p>{currentUser ? `Welcome, ${currentUser.username}` : null}</p>
        {currentUser ? null : <Link to="/register">Register</Link>}
        {currentUser ? (
          <button className="signout-btn" onClick={handleLogout}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">Sign In</Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
