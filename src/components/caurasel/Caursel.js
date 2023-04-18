import React from "react";
import { Carousel } from "react-bootstrap";

const Caursel = () => {
  return (
    <div>
      <div className="mt-5 w-75 mx-auto">
        <h1 className="fw-bold mb-5 title">Up Comming Couses</h1>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
            <Carousel.Caption className="">
              <h1 className="fw-bold text-light">Web Development</h1>
              {/* <p>
                Web development is the work involved in developing a Web site
                for the Internet.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />
            <Carousel.Caption className="">
              <h1 className="fw-bold text-light">Php-Programming</h1>
              {/* <p>
                PHP (Hypertext Preprocessor) is known as a general-purpose
                scripting language that can be used to develop dynamic and
                interactive websites.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
            <Carousel.Caption className="">
              <h1 className="fw-bold text-light">Javascript</h1>
              {/* <p>
                Adding interactive behavior to web pages. JavaScript allows
                users to interact with web pages.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Caursel;
