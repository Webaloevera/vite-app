import React, { useEffect } from "react";
import Slider from "react-slick";
import { Card } from "../components";
import FullScreenBg from "../components/FullScreenBg";
import TextImg from "../components/TextImg";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import "../styles/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useObserver from "../components/useObserver/useObserver";

const Home = () => {
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();

  const [observer, setElements, entries] = useObserver({
    treshold: 0,
    root: null,
  });

  useEffect(() => {
    const text = document.querySelectorAll(".info-textP");
    setElements(text);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const active = entry.target;
        active.classList.add("animate");
        observer.unobserve(active);
      }
    });
  }, [entries, observer]);

  useEffect(() => {
    dispatch(fetchProducts());
    document.title = "Home Page";
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
    "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
    "https://i.ytimg.com/vi/cbac6IN2Ih4/maxresdefault.jpg",
  ];

  return (
    <>
      <FullScreenBg
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/1/16/Appearance_of_sky_for_weather_forecast%2C_Dhaka%2C_Bangladesh.JPG"
        alt="sky"
      >
        <h2>Hello World</h2>
      </FullScreenBg>

      <div className="home__wrapper">
        <TextImg
          className="flex-row-reverse"
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
          alt="nature"
        />
        <TextImg
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
          alt="nature"
        />
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
        <TextImg
          className="flex-row-reverse"
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
          alt="nature"
        />
        <TextImg
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
          alt="nature"
        />
        <div className="table-wrap">
          <table className="user-info">
            <tbody>
              <tr className="table-fixed-head">
                <th>Number</th>
                <th>Name</th>
                <th>Breed</th>
                <th>Country</th>
                <th>Color</th>
                <th>Address</th>
                <th>Price</th>
                <th>Desc</th>
                <th>Phone</th>
                <th>Image</th>
                <th>ID</th>
              </tr>
              {products.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.breed}</td>
                  <td>{item.country}</td>
                  <td>{item.color}</td>
                  <td>{item.address}</td>
                  <td>{item.price}</td>
                  <td>{item.desc}</td>
                  <td>{item.phone}</td>
                  <td>{item.image}</td>
                  <td>{item._id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  products: PropTypes.array,
};

export default Home;
