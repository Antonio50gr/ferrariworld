import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Featured = () => {
  const carsData = [
    {
      id: 0,
      img: "/src/assets/img/imgferrari2.jpg",
      name: "Ferrari SP-8",
      price: "361.000 €", 
    },
    {
      id: 1,
      img: "/src/assets/img/imgferrari3.jpg",
      name: "Ferrari SP38",
      price: "500.000 €",
    },
    {
      id: 2,
      img: "/src/assets/img/imgferrari4.jpg",
      name: "2023 Ferrari 296 GTS",
      price: "369.900 €",
    },
    {
      id: 3,
      img: "/src/assets/img/imgferrari5.jpg",
      name: "2025 Ferrari 12Cilindri",
      price: "750.000 €",
    },
    {
      id: 4,
      img: "/src/assets/img/imgferrari6.jpg",
      name: "2013 Ferrari F12 Berlinetta",
      price: "300.000 €",
    },
    {
      id: 5,
      img: "/src/assets/img/imgferrari7.jpg",
      name: "2024 Ferrari 499P Modificata ",
      price: "5.100.000 €",
    },
  ];

  const CustomPrevArrow = (props) => (
    <div 
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 p-2 rounded-full"
      onClick={props.onClick}
    >
      <FaArrowLeft className="text-white text-2xl" />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div 
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 p-2 rounded-full"
      onClick={props.onClick}
    >
      <FaArrowRight className="text-white text-2xl" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
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
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-red-600 relative p-5">
      <h1 className="font-bold text-4xl text-center">
        Coches <span className="text-yellow-400">Destacados</span>
      </h1>
      <p className="text-center">Algunos de nuestros modelos disponibles</p>
      <div className="relative">
        <Slider {...settings}>
          {carsData.map((item) => (
            <FeaturedCard key={item.id} img={item.img} name={item.name} price={item.price} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
