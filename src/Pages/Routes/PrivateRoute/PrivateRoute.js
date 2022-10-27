import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    
   // const {loading, setLoading} = useState(true)
    const location = useLocation();
    if(loading){
        return  <Spinner animation="border" variant="primary" />
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    
    return children;
    
       
};
export default PrivateRoute;