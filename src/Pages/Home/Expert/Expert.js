import React from 'react';

const Expert = ({expert}) => {
    const {name, position, img} = expert
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <img className="img-fluid" src={img} alt="" />
            <h3>{name}</h3>
            <h5>{position}</h5>
        </div>
    );
};

export default Expert;