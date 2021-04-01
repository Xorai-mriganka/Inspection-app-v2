import React from "react";
import Row from "../../row";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/row.css";
import * as ReactBootStrap from "react-bootstrap";
import "../../Mid/mid.css";

function GridInternal() {
  const names = [
    "Radiator",
    "AC Compressor",
    "Battery",
    "doors",
    "Axle",
    "Alternator",
    "Brakes",
    "Transmission",
    "Shock Absorbers",
  ];

  return (
    <ReactBootStrap.Table className="main-container">
      <thead>
        {names.map((name, i) => (
          <Row key={i} name={name} purpose="note" />
        ))}
      </thead>
    </ReactBootStrap.Table>
  );
}

export default GridInternal;
