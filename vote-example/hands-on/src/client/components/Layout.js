import React from 'react';
import { Link } from 'react-router';

export default function Layout ({children}) {
    return (
        <div className="Background">
            <div className="Header">
                <div className="Title">
                    Vote as a Service
                </div>
            </div>
            
            <Link to='/about'>about us</Link>

            <div className="Main">
                <div className="Container">
                    {children}
                </div>
            </div>
        </div>
    );
}

Layout.propTypes = {
    children: React.PropTypes.element.isRequired
};