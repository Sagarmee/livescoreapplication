import React from "react";
import spinner from "../asset/round-spinner.gif";

export default function Spinner() {
  return (
    <div
      style={{
        zIndex: "2",
        top: "38%",
        left: "48%",
        position: "fixed",
        width: "3%",
      }}
    >
      <img src={spinner} alt="Loading"></img>
    </div>
  );
}
