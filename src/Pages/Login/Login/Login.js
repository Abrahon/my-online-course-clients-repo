import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {

    const [error, setError]= useState('');
    const {signIn,setLoading} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const handleSubmit = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =form.password;


        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            if(user.emailVerified){
              navigate(form,{replace:true});
            }
            else{
              toast.error('Your mail is  not verified.Please verified email')
            }
        })

        .catch(error=>{
          console.log(error)
          setError(error.message);
        })
        .finally(()=>{
          setLoading(false);

        })
       
         
    }
    return (
        <div>
            <Container className='w-25 bg-'>
            <Form onSubmit = {handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className="text-danger">
        {error}
        </Form.Text>
    </Form>
    </Container>
        </div>
    );
};

export default Login;