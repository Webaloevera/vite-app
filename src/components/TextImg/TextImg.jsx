import React from "react";
import "./textImg.css";

const TextImg = (props) => {


  return (
    <div className={`info ${props.className}`}>
      <div className="info-img">
        <img src={props.imgUrl} alt={props.alt} />
      </div>
      <div
        className="info-text" 
      >
        <p className='info-textP'>
          {props.text}Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus architecto tempore impedit distinctio placeat laudantium
          rem? Vitae numquam quo quam perspiciatis voluptatibus tempora, cum ex,
          doloribus consectetur, labore inventore voluptate?
        </p>
      </div>
    </div>
  );
};

export default TextImg;
