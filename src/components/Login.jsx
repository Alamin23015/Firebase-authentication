import { GoogleAuthProvider, signInWithPopup ,signOut} from 'firebase/auth';

import React ,{useState} from 'react';
import {NavLink} from 'react-router';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();
const Login = () =>{
    const [user,setUser]=useState(null);


    const handleGoogleSignIn = ()=>{

        //console.log ('google button click ')
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error=>{
            console.log(error);

        })
    }
    const handleSignOut = () =>{
        signOut(auth)
        .then(() =>{
            console.log('Sign Out done');
            setUser(null)

        })
        .catch(error=>{
            console.log (error);
        })
    
    
    }

    return(
       <div>
     <h2> Please Login </h2>
     {/* <button onClick={handleGoogleSignIn}> Sign in with google</button>
     <button onClick={handleSignOut}>Sign Out</button> */}
     {
        user ? <button onClick={handleGoogleSignIn}> Sign in with google</button> : <button onClick={handleSignOut}>Sign Out</button> 
     }
    { user && <div>
        <h3>{user?.displayName}</h3>
        <h5>Email: {user.email}</h5>
        <img src={user.photoURL} alt="" />
     </div>}
        </div>
    );
};

export default Login;