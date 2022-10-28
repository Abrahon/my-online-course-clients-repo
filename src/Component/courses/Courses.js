import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import Course from '../Course/Course';
import SideNav from '../SideNav/SideNav';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
      
           <div>
           

        <div className='d-flex justify-content-center '>
            <div>
                {/* Total data : {courses.length} */}
                <h3 className='ms-5 w-100 text-success'>Our Courses</h3>
                {
                    courses.map(course => <SideNav
                        key={course.id}
                        course={course}
                    ></SideNav>)
                }
            </div>

                <div className="row row-cols-2 flex-direction-column m-5 ">
         
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