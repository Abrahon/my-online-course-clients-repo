import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Container, Image } from 'react-bootstrap';

const Course = ({ course }) => {
    const { id, title, course_name, details, price, image_url } = course;
    return (
        <div>

            <Container className='h-100'>
            <Card className= 'w-100 h-100 mb-3'>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Image className='w-100 h-50 object-fit-cover' src={image_url}></Image>


                <Card.Body>
                    {/* <Card.Title>{id}</Card.Title> */}
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details.slice(0, 150) + '....'}</Card.Text>
                    <Card.Text>{price}</Card.Text>



                </Card.Body>
                <Link to={`/courses/${id}`}><button>view details</button></Link>
            </Card>
            </Container>

        </div>
    );
};

export default Course;