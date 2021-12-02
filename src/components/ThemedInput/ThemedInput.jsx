import React from "react";
import "./themedInput.css";
import PropTypes from 'prop-types';

function ThemedInput({ name, value, type, onChange, label }) {
  return (
    <div className="themed-input">
      <label htmlFor={name}>{label}</label>
      <input onChange={onChange} type={type} value={value} name={name} />
    </div>
  );
}

ThemedInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
}

export default ThemedInput;
