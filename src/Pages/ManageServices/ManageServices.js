import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState()
    useEffect(() => {
        fetch('https://evening-thicket-73558.herokuapp.com/services/')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    }, [])
    

    const hangleDelete = id => {
        const url = `https://evening-thicket-73558.herokuapp.com/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remaining = services.filter(service => service._id !== id)
            setServices(remaining)
        })
    }
    return (
        <div>
            <h1>This is ManageServices</h1>
            {
                services?.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={()=> hangleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;