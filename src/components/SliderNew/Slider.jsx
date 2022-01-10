import React, { useState, useEffect, useRef } from "react";
import SliderContainer from "./SliderContainer";
import Slide from "./Slide";
import "./slider.css";

const WIDTH = 100;
const TRANSIT = 0.4;

const Slider = ({ slides }) => {
  
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: WIDTH,
    transition: TRANSIT,
    transitioning: false,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { activeSlide, translate, _slides, transition, transitioning } = state;
  const transitionRef = useRef();
  const sliderRef = useRef();
  const throttleRef = useRef();

  useEffect(() => {
    transitionRef.current = smoothTransition;
    throttleRef.current = throttleArrows;
  });

  useEffect(() => {
    const slider = sliderRef.current;

    const smooth = (e) => {
      if (e.target.className.includes("slider__container")) {
        transitionRef.current();
      }
    };

    const throttle = (e) => {
      if (e.target.className.includes("slider__container")) {
        throttleRef.current();
      }
    };

    const transitionStart = slider.addEventListener("transitionstart", throttle);
    const transitionEnd = slider.addEventListener("transitionend", smooth);

    return () => {
      slider.removeEventListener("transitionend", transitionStart);
      slider.removeEventListener("transitionend", transitionEnd);
    };
  }, []);

  useEffect(() => {
    if (transition === 0)
      setState({ ...state, transition: TRANSIT, transitioning: false });
  }, [transition]);

  const throttleArrows = () => {
    setState({ ...state, transitioning: true });
  };

  const nextSlide = () => {
    if (transitioning) return;
    setState({
      ...state,
      translate: translate + WIDTH,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const prevSlide = () => {
    if (transitioning) return;
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });
  };

  const smoothTransition = () => {
    let _slides = [];
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2);
    setState({
      ...state,
      _slides,
      transition: 0,
      translate: WIDTH,
    });
  };

  return (
    <section className="slider">
      <div className="slider__window" ref={sliderRef}>
        <SliderContainer
          translate={translate / _slides.length}
          transition={transition}
          width={WIDTH * _slides.length}
        >
          {_slides.map((_slide, i) => (
            <Slide width={WIDTH} key={_slide + i} content={_slide} />
          ))}
        </SliderContainer>
        <div className="left" onClick={prevSlide}>
          &#10094;
        </div>
        <div className="right" onClick={nextSlide}>
          &#10095;
        </div>
      </div>
    </section>
  );
};

export default Slider;
