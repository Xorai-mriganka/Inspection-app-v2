import React from "react";
import "../../styles/row.css";
import useToggle from "../../hooks/useToggle";
import { uuid } from "uuidv4";

function Red() {
  const [red, setRed] = useToggle();
  return (
    <>
      <button
        key={uuid}
        class="dropbtn"
        id={red ? "active-red" : ""}
        onClick={setRed}
      >
        P
      </button>
    </>
  );
}

export default Red;
