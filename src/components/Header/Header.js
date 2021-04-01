import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
// import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome } from "react-icons/fa";
function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div>
         <FaHome  className="Icons"/>
        </div>
        <div className="home">Inspection Points</div>
      </div>
      <section className="header-bottom">
        <div className="legend good">Good</div>
        <div className="legend fair">Fair</div>
        <div className="legend poor">Poor</div>
      </section>
    </div>
  );
}


export default Header;
