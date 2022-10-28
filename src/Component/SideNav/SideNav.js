import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({course}) => {
    const {id,course_name} = course;
    return (
        <div>
           <Link to={`/courses/${id}`}> <p>{course_name}</p></Link>
        </div>
    );
};

export default SideNav;