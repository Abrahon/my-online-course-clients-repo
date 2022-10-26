import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import LeftSideNav from '../LeftSideNave/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';


const Courses = () => {
    const selectedCourses =useLoaderData();

    return (
       
        <div>
           <Container>
            <Row>
                <Col lg="4">
                <h2>First column</h2>
                <LeftSideNav></LeftSideNav>
                </Col>
                
                <Col lg="8">
                <h3>Second column</h3>
                <RightSideNav></RightSideNav>
                </Col>

            </Row>
           </Container>
           <div>
            {/* <h3>This courses:{selectedCourses.length}</h3> */}
            {/* {
                selectedCourses.map(courses=><RightSideNav key={courses.id} courses={courses}></RightSideNav>)
            } */}

           </div>
           
           
        </div>
    );
};

export default Courses;