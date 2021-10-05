import React from 'react';
import { Carousel } from 'react-bootstrap';

const Caursel = () => {
    return (
        <div>
             <div className="mt-5">
                <h1 className="fw-bold mb-5 title">Up Comming Couses</h1>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://webapp99.com/wp-content/uploads/2020/04/web-development-guideline-for-2020-t0-2030.jpeg"
                            alt="First slide"
                        />
                        <Carousel.Caption className="bg-dark">
                            <h5 className="fw-bold">Web Development</h5>
                            <p>Web development is the work involved in developing a Web site for the Internet.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://webitfactory.io/wp-content/uploads/2019/12/phpwebit2.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption className="bg-dark">
                            <h5 className="fw-bold">Php-Programming</h5>
                            <p>PHP (Hypertext Preprocessor) is known as a general-purpose scripting language that can be used to develop dynamic and interactive websites.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/X_Reasons_to_learn_Javascript.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption className="bg-dark">
                            <h5 className="fw-bold">Javascript</h5>
                            <p>Adding interactive behavior to web pages. JavaScript allows users to interact with web pages.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


        </div>
    );
};

export default Caursel;