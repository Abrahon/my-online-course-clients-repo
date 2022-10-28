import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({course}) => {
    const {id,course_name} = course;
    return (
        <div className='ms-5 ps-5 fw-bold'>
           <Link to={`/courses/${id}`}> <p>{course_name}</p></Link>
        </div>
    );
};

export default SideNav;