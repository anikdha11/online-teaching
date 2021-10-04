import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CourseItems = (props) => {
    const { course, sir, img,price } = props.course;
    return (
        <div className="me-5 mt-4 mb-5 border border-3 border-danger bg-light">
            <Card style={{ width: '18rem'}}>
                <Card.Img  variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{course}</Card.Title>
                    <Card.Text>
                        Teacher: {sir}
                        <p className="fw-bold">{price}</p>
                    </Card.Text>
                    <Button variant="outline-dark">More Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseItems;