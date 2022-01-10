import React from "react";
import './input.css'

const Input = ({ name, value, onChange }) => {
  return <input type="text" className='input' name={name} onChange={onChange} value={value} />;
}

export default Input;
