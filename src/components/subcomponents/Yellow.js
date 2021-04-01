import React from "react";
import "../../styles/row.css";
import useToggle from "../../hooks/useToggle";
import { uuid } from "uuidv4";

function Yellow() {
  const [yellow, setYellow] = useToggle();
  return (
    <>
      <button
        key={uuid}
        class="dropbtn"
        id={yellow ? "active-yellow" : ""}
        onClick={setYellow}
      >
        F
      </button>
    </>
  );
}

export default Yellow;
