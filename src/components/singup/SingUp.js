import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const SingUp = () => {
    return (
        <div>
            <div className="bg-dark border border-dark mb-4" >
                <h1 className="fw-bold">Login Here</h1>
                < >
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 mt-5 w-75 mx-auto"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel className="mb-5 w-75 mx-auto" controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </>
                <Button className="text-center me-5 fw-bold mb-4" variant="outline-light">Sing Up</Button>
              

            </div>
        </div>
    );
};

export default SingUp;