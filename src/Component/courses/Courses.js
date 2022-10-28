import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import Course from '../Course/Course';
import SideNav from '../SideNav/SideNav';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
      
           <div>
           

        <div className='d-flex'>
            <div>
                {/* Total data : {courses.length} */}
                <h2>Our Courses</h2>
                {
                    courses.map(course => <SideNav
                        key={course.id}
                        course={course}
                    ></SideNav>)
                }
            </div>

                <div className="row row-cols-2 m-auto ">
         
                  {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
        </div>
    );
};

export default Courses;