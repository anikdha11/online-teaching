import React from 'react';

import Navigation from '../navbar/Navigation';
import "./Header.css"

const Header = () => {
    return (
        <div className="border">
        <Navigation></Navigation>
        <h1 className="mt-0 fw-bold text-success">Welcome To My</h1>
        <h2 className="text-secondary fw-bold">Online Teaching Home</h2>
       
        </div>
    );
};

export default Header;