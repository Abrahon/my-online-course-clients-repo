import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const RightSideNav = () => {
    const {providerLogin}= useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
    .then(result=>{
        const user =result.user;
        console.log(user);
    })
    .catch(error=>console.error(error))

    }
    return (
        <div>
            <h3>Right side nav</h3>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> Login with Google</Button>
                <Button variant="outline-dark"> Login with Github</Button>
            </ButtonGroup>

        </div>
    );
};

export default RightSideNav;