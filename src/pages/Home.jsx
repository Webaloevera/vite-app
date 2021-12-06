import React, { useEffect } from "react";
import Slider from "react-slick";
import { Card } from "../components";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import "../styles/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    document.title = "Home Page";
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home__wrapper">
      <h1>Home Page</h1>
      <Slider className="home-slider" {...settings}>
        {(products || []).slice(0, 8).map((item) => (
          <Card
            id={item._id}
            image={item.image}
            name={item.name}
            breed={item.breed}
            key={item._id}
          />
        ))}
      </Slider>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.array,
};

export default Home;
