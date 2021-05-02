import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header className="header_link_container">
      <Link to="/" className="header_link">
        <FontAwesomeIcon icon={faChartLine} /> MyHealthHacker{" "}
        <FontAwesomeIcon icon={faHeartbeat} />
      </Link>
    </header>
  );
}

export default Header;
