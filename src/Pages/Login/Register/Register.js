import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
    const handleSubmit = event=>{
        event.preventDefault();
    }
    return (
        <Container className='w-50'>
         <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="name" placeholder="Your Name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email address </Form.Label>
        <Form.Control name="email" type="text" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="password" required/>
      </Form.Group>
    
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {/* <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text> */}
     </Form>
        </Container>
    );
};

export default Register;