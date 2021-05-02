import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import UserContext from "../UserContext";

function Nav(props) {
  const context = useContext(UserContext);
  const LoggedIn = () => {
    return (
      <>
        <li className="navlink">
          <Link to="/submit-log" className="link_style">
            Submit Log
          </Link>
        </li>
        <li className="navlink">
          <Link to="/logs" className="link_style">
            View Logs
          </Link>
        </li>
        <li className="logout_btn_container">
          <button
            className="logout_btn link_style"
            onClick={props.handleLogout}
          >
            Log Out {context.username}
          </button>
        </li>
      </>
    );
  };

  const LoggedOut = () => {
    return (
      <>
        <li className="navlink">
          <Link to="signup" className="link_style">
            Create Account
          </Link>
        </li>
        <li className="navlink">
          <Link to="login" className="link_style">
            Log In
          </Link>
        </li>
      </>
    );
  };

  return (
    <nav className="nav">
      <ul className="navbar">
        <li className="navlink">
          <Link to="/" className="link_style">
            Home
          </Link>
        </li>
        {props.loggedIn ? LoggedIn() : LoggedOut()}
      </ul>
    </nav>
  );
}

export default Nav;
