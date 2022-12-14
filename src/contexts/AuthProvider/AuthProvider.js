import React, { Profiler } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase';
import { useState } from 'react';
import { useEffect } from 'react';
// import { getAuth } from 'firebase/auth'




 export const AuthContext = createContext()
 const auth =getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading] = useState(true);

    const providerLogin=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const createUser = (email, password)=>{
        setLoading(true);
      return  createUserWithEmailAndPassword(auth,email,password)
       
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser,profile);
    }
    const verifyEmail =()=>{
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect( ()=>{
    const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            console.log('inside auth state change',currentUser);
           if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser)
           }
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        providerLogin,
        setLoading,
        logOut,
        updateUserProfile,
        verifyEmail,
        createUser,
        signIn
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;