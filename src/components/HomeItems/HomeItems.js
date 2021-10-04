import React from 'react';
import { Button, Card} from 'react-bootstrap';


const HomeItems = (props) => {
    const { course, img, sir } = props.four;

    return (
        <div className="me-5 mt-4 mb-5 border border-3 border-danger bg-light">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{course}</Card.Title>
                    <Card.Text>
                        <h3>Teacher: {sir}</h3>
                    </Card.Text>
                    <Button variant="outline-dark">More Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeItems;
