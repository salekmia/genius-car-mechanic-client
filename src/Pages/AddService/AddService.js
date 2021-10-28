import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://evening-thicket-73558.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId) {
                reset();

            }
        })
    };
    return (
        <div className="add-user">
            <h2>Please Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="img URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;