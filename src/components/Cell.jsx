import React from "react";
import "../App.css";

const Cell = ({ filled, onClick, isDisabled, label }) => {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    ></button>
  );
};

export default Cell;
