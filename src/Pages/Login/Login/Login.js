import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaGoogle} from "react-icons/fa";
// import { GoogleAuthProvider } from "firebase/auth";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { GoogleAuthProvider } from 'firebase/auth';



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
    const {providerLogin}=useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGooglSignIn=()=>{
      providerLogin(googleProvider)
      .then(result=>{
        const user = result.user;

      })
      .catch(error=>console.error(error))

    }
    return (
        <div className=''>
          
            <Container className='w-25'>
              <h1>Login</h1>
              
            <Form onSubmit = {handleSubmit}>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
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
      <div className='d-flex justify-content-between'>
     
      <Button  variant="primary" type="submit">
        Login
      </Button>
      
      <Form.Text className="text-danger">
        {error}
        </Form.Text>
     
              <ButtonGroup vertical>
                <Button onClick={handleGooglSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button> 
            </ButtonGroup>
            </div>
      
    </Form>
    </Container>
        </div>
    );
};

export default Login;