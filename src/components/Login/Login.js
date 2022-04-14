import React, { useState } from 'react';
import './Login.css'

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebasa.init';
const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('')
    const navigate = useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
     
    const haldleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur =event=>{
        setPassword(event.target.value);
    }
    if(user){
        navigate(from,{replace: true});
    }
    const handleUserSignin=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Login</h1>
                <form onSubmit={handleUserSignin} >
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input onBlur={haldleEmailBlur} type='text' name='email' id='email' />
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input onBlur={handlePasswordBlur}
                                type='password'

                                name='password'
                                id='password'
                            />
                        </div>
                        <p style={{color:'red'}}>{error?.message}</p>
                        {
                          loading && <p>Loading...</p>  
                        }
                        </div>
                    <button type='submit' className='auth-form-submit'>
                        Login
                    </button>
                </form>
                <p className='redirect'>
                    New to Ema john?
                    <Link className="new-account" to='/signup'>Create New Account</Link>

                    {/* <span>Create New Account</span> */}
                </p>
               
                
            </div>
        </div>
    );
};

export default Login;