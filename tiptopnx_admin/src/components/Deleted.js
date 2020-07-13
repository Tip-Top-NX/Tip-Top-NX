import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "../assets/logo192.png";

const DeletedProducts = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={logo} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={logo} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={logo} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default DeletedProducts;
