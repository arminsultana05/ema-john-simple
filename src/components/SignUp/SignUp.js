import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logo from '../../images/googl.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebasa.init'

const SignUp = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [confirmPassword, setConfirmPassword] =useState('');
    const [error, setError] =useState('');
    const navigate = useNavigate()
    const [ createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)
    const[signInWithGoogle] = useSignInWithGoogle(auth)

    const handleEmailBlur=event =>{
        setEmail(event.target.value);
    }
    const hanbdlePasswordBlur =event=>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur =event=>{
        setConfirmPassword(event.target.value);
    }
    if(user){
        navigate('/shop')

    }
    const handleCreateUser =event=>{
        event.preventDefault();
        if (password!== confirmPassword){
            setError("Both Of password didn't match")
            return;
        }
        createUserWithEmailAndPassword(email,password)
    }


    return (
        <div className='auth-form-container '>
        <div className='auth-form'>
            <h1>Sign Up</h1>
            <form onSubmit={handleCreateUser}>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <div className='input-wrapper'>
                        <input onBlur={handleEmailBlur} type='text' name='email' id='email' />
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <div className='input-wrapper'>
                        <input onBlur={hanbdlePasswordBlur}
                            type='password'
                            name='password'
                            id='password'
                        />
                    </div>
                    </div>
                <div className='input-field'>
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <div className='input-wrapper'>
                        <input onBlur={handleConfirmPasswordBlur}
                            type='password'
                             name='password'
                            id='password'
                        />
                    </div>
                    </div>
                <button type='submit' className='auth-form-submit'>
                    Sign Up
                </button>
            </form>
            <p className='redirect'>
                Already have an account?
                <Link className="new-account" to='/login'>Login</Link>

               
            </p>
            <div className='horizontal-divider'>
                <div className='line-left' />
                <p>or</p>
                <div className='line-right' />
            </div>
            <div className='input-wrapper'>
                <button onClick={()=>signInWithGoogle()} className='google-auth' >
                    <img src={logo} alt='' />
                    <p> Continue with Google </p>
                </button>
            </div>
        </div>
    </div>
    );
};

export default SignUp;