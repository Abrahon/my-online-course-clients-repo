import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import { FaUserTie } from "react-icons/fa";
 import { ButtonToolbar, Image } from 'react-bootstrap';
// import  {Component} from 'react';
// import {render} from 'react-dom';
// import Switch from 'react-toggle-switch'



const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><h1 className='text-danger '>Programming Typhoon</h1>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto text-success">
          <Nav.Link> <Link to={'/'}>Home</Link></Nav.Link>

          <Nav.Link > <Link to={'/courses'}>Courses</Link> </Nav.Link>
            <Nav.Link> <Link to={'/faq'}>FAQ</Link></Nav.Link>
            <Nav.Link> <Link to={'/blog'}>Blog</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user?.uid?
                <>
                <span>{user?.displayName}</span>
              <Button variant='light' onClick={handleLogOut}>Log out</Button>
                </>
                :
                <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                </>
              }
              </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {user?.photoURL ?
           
            <Image style={{height:'25'}} roundedCircle src ={user?.photoURL}></Image>
            :<FaUserTie></FaUserTie>
}  
            
           
            </Nav.Link>
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    );
};

export default Header;