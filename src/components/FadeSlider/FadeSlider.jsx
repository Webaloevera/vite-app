import React, { Children, cloneElement, useEffect, useState } from "react";
import "./slider.css";

const TRANSITION = 300;
const WIDTH = 100;

function FadeSlider({ children, infinite }) {
  const [offset, setOffset] = useState(0);
  const [pages, setPages] = useState([]);
  const [clones, setClones] = useState({ head: 0, tail: 0 });
  const [transit, setTransit] = useState(TRANSITION);

  useEffect(() => {
    if (infinite) {
      setPages([
        cloneElement(children[Children.count(children) - 1]),
        ...children,
        cloneElement(children[0]),
      ]);
      setClones({ head: 1, tail: 1 });
      return;
    }
    setPages(children);
  }, [children, infinite]);

  useEffect(() => {
    if (!infinite) return;
    if (offset == 0) {
      setTimeout(() => {
        setTransit(0);
        setOffset(-(WIDTH * (pages.length - 1 - clones.tail)));
      }, TRANSITION);
      return;
    }
    if (offset == -(WIDTH * (pages.length - 1))) {
      setTimeout(() => {
        setTransit(0);
        setOffset(-(clones.head * WIDTH));
      }, TRANSITION);
      return;
    }
  }, [infinite, WIDTH, offset, pages, clones]);

  useEffect(() => {
    setOffset(-clones.head * WIDTH);
  }, [WIDTH, clones]);

  useEffect(() => {
    if (transit === 0) {
      setTimeout(() => {
        setTransit(TRANSITION);
      }, TRANSITION);
    }
  }, [transit]);

  const handleRightClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - WIDTH;
      const maxOffset = -(WIDTH * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  const handleLeftClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + WIDTH;
      return Math.min(newOffset, 0);
    });
  };

  return (
    <div className="slider">
      <div className="slider__window">
        <div
          className="slider__container"
          style={{
            transitionDuration: `${transit}ms`,
            transform: `translateX(${offset}%)`,
          }}
        >
          {pages}
        </div>
      </div>
      <p className="prev" onClick={handleLeftClick}>
        &#10094;
      </p>
      <p className="next" onClick={handleRightClick}>
        &#10095;
      </p>
    </div>
  );
}

export default FadeSlider;
