import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

const Course = ({ course }) => {
    const { id, title, course_name, details, price, image_url } = course;
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Image className='w-100' src={image_url}></Image>


                <Card.Body>


                    {/* <Card.Title>{id}</Card.Title> */}
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details.slice(0, 150) + '....'}</Card.Text>
                    <Card.Text>{price}</Card.Text>



                </Card.Body>
                <Link to={`/courses/${id}`}><button>view details</button></Link>
            </Card>

        </div>
    );
};

export default Course;