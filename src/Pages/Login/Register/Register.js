import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {

  const [error,setError] = useState('');
  const [accepted, setAccepted] = useState(false)
  const {createUser,updateUserProfile,verifyEmail} = useContext(AuthContext);
  console.log(createUser)
   const navigate =useNavigate() 
        
    

    const handleSubmit = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoURL,email,password)

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');
            handleUpdateUserProfile(name,photoURL)
            handleEmailVerification();
            toast.success('please verify your email address.');
            navigate('/')
            form.reset();

            
        })
        .catch(e=>{
          console.error(e);
          setError(e.message);
        }); 
        
    }
    const handleUpdateUserProfile = (name,photoURL)=>{
      const profile = {
        displayName:name,
        photoURL:photoURL
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error=>console.error(error));
    }
    const handleEmailVerification=()=>{
      verifyEmail()
        .then(()=>{})
        .catch(error=>console.error(error));
      
    }
    const handleAccepted = event=>{
      setAccepted(event.target.checked)
    }
  // //  useEffect(()=>{useEffect((),)
  //   if(user){
  //   }
  //  },[user,navigate])
    return (
        <Container className='w-25'>
         <Form onSubmit={handleSubmit}>
         <Form.Label><h1 className=''>Register</h1></Form.Label>
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
        
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox"
        onClick={handleAccepted}
         label={<>Accept <Link to='/terms'>Term and condition</Link></> } />
      </Form.Group>
    
     
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <Form.Text className="text-danger">
         {error}
        </Form.Text>
     </Form>
        </Container>
    );
};

export default Register;