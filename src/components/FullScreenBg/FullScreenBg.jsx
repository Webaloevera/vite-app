import React from "react";
import "./fullScreenBg.css";

const FullScreenBg = (props) => {
  return (
    <div className="background-full">
      <img
        src={props.imgUrl}
        alt={props.alt}
      />
      <div>{props.children}</div>
    </div>
  );
};

export default FullScreenBg;
