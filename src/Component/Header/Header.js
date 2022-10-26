import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

import { FaUserTie } from "react-icons/fa";
import { Image } from 'react-bootstrap';



const Header = () => {
  const {user}=useContext(AuthContext)
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><h1 className='text-danger '>Programming Typhoon</h1>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link> <Link to={'/'}>Home</Link></Nav.Link>

          <Nav.Link > <Link to={'/courses/:id'}>Courses</Link> </Nav.Link>
            <Nav.Link> <Link to={'/faq'}>FAQ</Link></Nav.Link>
            <Nav.Link> <Link to={'/blog'}>Blog</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {user.photoURL ?
           
            <Image style={{height:'20'}} roundedCircle src ={user.photoURL}></Image>
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