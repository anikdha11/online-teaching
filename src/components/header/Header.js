import React from 'react';
import Navigation from '../navbar/Navigation';
import "./Header.css"

const Header = () => {
    return (
        <div className="border">
            <Navigation></Navigation>
        </div>
    );
};

export default Header;