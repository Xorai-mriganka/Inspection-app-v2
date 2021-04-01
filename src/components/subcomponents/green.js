import React from "react";
import "../../styles/row.css";
import useToggle from "../../hooks/useToggle";
import { uuid } from "uuidv4";

function Green() {
  const [green, setGreen] = useToggle();
  return (
    <>
      <button
        key={uuid}
        className="dropbtn"
        id={green ? "active-green" : ""}
        onClick={setGreen}>
        G
      </button>
    </>
  );
}

export default Green;
