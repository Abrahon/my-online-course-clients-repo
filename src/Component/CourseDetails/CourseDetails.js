import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const {id, course_name, title, details, price, image_url} = course;
    return (
        <div>
               <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Image src={image_url}></Image>
                <Card.Body>
                   
                    <Card.Title>{id}</Card.Title>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Card.Text>{price}</Card.Text>



                </Card.Body>
                <Link to='/checkout'><button>Get premium access</button></Link>
            </Card>
        </div>
    );
};

export default CourseDetails;