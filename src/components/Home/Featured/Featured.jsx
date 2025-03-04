import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";


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
      price: " 500.000 €",
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

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
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
    <div>
      <h1 className="font-bold text-4xl text-center">
        Featured <span className="text-yellow-400">Cars</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti
        voluptatibus dolores libero! Ab, dolor dicta. Id numquam, suscipit, sint
        iusto iste, exercitationem ex mollitia nemo totam magni harum! Deserunt.
      </p>
      <div>
        <Slider {...settings}>
          {carsData.map((item) => (
            <FeaturedCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price} 
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
