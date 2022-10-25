import React from 'react';
import { Outlet } from 'react-router';
// import { Col, Container, Row } from 'react-bootstrap';
// import LeftSideNav from '../Component/Courses/LeftSideNave/LeftSideNav';
// import RightSideNav from '../Component/Courses/RightSideNav/RightSideNav';
import Header from '../Component/Header/Header';


const Main = () => {
  
    return (
        <div>
            <Header></Header>
            {/* <Container>
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
           </Container> */}
          
            <Outlet></Outlet>
        </div>
    );
};

export default Main;