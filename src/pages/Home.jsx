import React, { useEffect } from 'react'
import Slider from "react-slick";
import {Card} from '../components';
import "../styles/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = (props) => {

  useEffect(() => {
    document.title = "Home Page"
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
            dots: false
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className="home__wrapper">
            <h1>Home Page</h1>
            <Slider className="home-slider" {...settings}>
          {(props.store || []).slice(0, 8).map((item) => <Card items={item} key={item.id}/>)}
        </Slider>
        </div>
    )
}

export default Home;
