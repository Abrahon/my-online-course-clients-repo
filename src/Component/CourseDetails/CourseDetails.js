import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const {id, course_name, title, details, price, image_url} = course;
    return (
        <div>
              <Container>
              <Card className='w-50 mb-5'>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Image className='w-100' src={image_url}></Image>
                <Card.Body>
                   
                    <Card.Title>{id}</Card.Title>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Card.Text > <h3 className='fw-bold text-success'>Price : {price}</h3>

                    </Card.Text>

                </Card.Body>
                <Container className='d-flex text-align-center justify-content-between'>
                <Link to='/checkout'><button className='bg-danger mb-3 text-align-center p-3 '>Get premium access</button></Link>
                <Link to='/checkout'><button className='bg-danger mb-3 text-align-center p-3'>Download Pdf</button></Link>
                <Link to='/checkout'><button className='bg-danger mb-3 text-align-center p-3'>Premium access</button></Link>
                
                </Container>
            </Card>
              </Container>
        </div>
    );
};

export default CourseDetails;