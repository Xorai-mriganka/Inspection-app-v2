import React from 'react';
import Row from '../../row';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/row.css";
import * as ReactBootStrap from "react-bootstrap";
import '../../Mid/mid.css'

function GridExternal() {
    const names = [
      "front",
      "front bumper",
      "fenders",
      "doors",
      "roof",
      "rear",
      "rear bumper",
      "trunk",
      "trim",
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

export default GridExternal
