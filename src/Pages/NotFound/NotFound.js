import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center text-center" style={{height: '100vh'}}>
            <div>
                <h1>404</h1>
                <h3>Page not found.</h3>
                <Link to="/">Go to home</Link>
            </div>
        </div>
    );
};

export default NotFound;