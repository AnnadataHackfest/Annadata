import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

const CarouselPage = () => {
  return (
    <Carousel className="carousel-main" fade>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>One stop soultion for Farmers</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1533241242276-46a506b40d66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhcm1lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Buy Sell Rent Farming Equipments</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1598961948358-df15791f5395?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZhcm1lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Complete Information of Soil using AI</h3>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselPage;
