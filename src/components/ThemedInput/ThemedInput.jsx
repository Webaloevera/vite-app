import React from "react";
import "./themedInput.css";

function ThemedInput({ name, value, type, onChange, label }) {
  return (
    <div className="themed-input">
      <label htmlFor={name}>{label}</label>
      <input onChange={onChange} type={type} value={value} name={name} />
    </div>
  );
}

export default ThemedInput;
