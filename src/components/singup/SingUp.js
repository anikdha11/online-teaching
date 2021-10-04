import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const SingUp = () => {
    return (
        <div>
            <div className="ms-5 bg-success border border-dark mb-4" >
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
                <a href="#@"> <h4 className="text-center me-5 fw-bold text-light mb-4">Sing Up <small>Here</small></h4></a>

            </div>
        </div>
    );
};

export default SingUp;