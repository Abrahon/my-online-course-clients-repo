import React from 'react';
import { useLoaderData } from 'react-router';

const Checkout = () => {
    const course = useLoaderData()
    const {course_name, id} = course;
    return (
        <div>
            <p>Successfully Accessed for {course_name} course.</p>
            <p>{id}</p>
        </div>
    );
};

export default Checkout;