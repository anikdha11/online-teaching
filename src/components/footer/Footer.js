import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col className="link">
                       <div className="mb-5">
                       <Link className="me-3" to="/home">
                            <Button variant="outline-light">Home</Button>
                        </Link>
                        <Link to="/service">
                            <Button variant="outline-light">Service</Button>
                        </Link>
                       </div>
                        <div>
                        <Link className="me-2" to="/About">
                            <Button variant="outline-light">About</Button>
                        </Link>
                        <Link to="/features">
                            <Button variant="outline-light">Features</Button>
                        </Link>
                        </div>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Comments box</Form.Label>
                                <Form.Control as="textarea" rows={3} />

                            </Form.Group>
                            <Button variant="outline-danger">Submit</Button>{' '}
                        </Form>
                    </Col>
                    <Col>
                     <h3 className="text-danger text-end">Get in touch</h3>
                        <div className="d-flex flex-column text-end">
                            <h4>Send a Message</h4>
                            <h4>Contacts</h4>
                            <h4>Request a Callback</h4>
                        </div>
                     <div className="text-end icon">
                     <a href="#@"><i class="fab fa-facebook-square fs-1"></i></a>
                      <a href="#@"><i class="fab fa-twitter fs-1 ms-2"></i></a>
                      <a href="#@"><i class="fab fa-instagram fs-1 ms-2"></i></a>
                      <a href="#@"><i class="fab fa-line fs-1 ms-2"></i></a>
                     </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;