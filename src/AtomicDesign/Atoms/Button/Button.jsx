import React from "react";
import "./button.css";
const Button = ({ value }) => {
  return <button  className="button" type="submit">{value}</button>;
};

export default Button;
