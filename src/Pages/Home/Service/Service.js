import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, price, img, description} = service
    return (
        <div className="col-md-6 col-lg-4 p-4">
            <img className="img-fluid" src={img} alt="" />
            <h3 className="m-2">{name}</h3>
            <p>Price: {price}</p>
            <p className="lead p-2">{description}</p>
            <Link to={`booking/${id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;