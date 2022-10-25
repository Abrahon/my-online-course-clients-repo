import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNave/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';


const Courses = () => {
    return (
        <div>
           <Container>
            <Row>
                <Col>
                <h2>First column</h2>
                <LeftSideNav></LeftSideNav>
                </Col>
                
                <Col>
                <h3>Second column</h3>
                <RightSideNav></RightSideNav>
                </Col>

            </Row>
           </Container>
           
           
        </div>
    );
};

export default Courses;