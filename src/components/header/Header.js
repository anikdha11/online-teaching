import React from 'react';

import Navigation from '../navbar/Navigation';
import "./Header.css"

const Header = () => {
    return (
        <div className="border">
        <Navigation></Navigation>
        <h1 className="p-5 mt-0 fw-bold text-success bg-img">Online Teaching Home</h1>
       
        </div>
    );
};

export default Header;