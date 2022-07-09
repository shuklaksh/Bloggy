import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/counter/userSlice';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import './Login.css';

function Login() {
    const[name,setName] = useState("");
    const[profile,setProfile] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
    }
    const register = () => {
        if(name == '') {
           return alert('Please Enter Full Name')
        }

       createUserWithEmailAndPassword(auth,email,password)
        .then((userAuth)=> {
          debugger;
                updateProfile(userAuth.user, {
                        displayName: name,
                        photoURL: profile,
                    }) 
                    .then(() =>{
                      debugger;
                        dispatch(
                            login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profile
                        }))
                    })

            }
        ).catch((error) => alert(error));
    }
  return (
    <div className='login'>
      <img src='https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png' />
      <form>
        <input value={name} onChange= {(e) => {setName(e.target.value)}} type="text" placeholder='Enter Full Name' />
        <br/>
        <input value={profile} onChange= {(e) => {setProfile(e.target.value)}} type="text" placeholder='Enter Profile Url' />
        <br/>
        <input value={email} onChange= {(e) => {setEmail(e.target.value)}} type="email" placeholder='Enter Email' />
        <br/>
        <input value={password} onChange= {(e) => {setPassword(e.target.value)}} type="password" placeholder='Enter Password' />
        <br />
        <button type='submit' onClick = {loginToApp}> Sign In</button>
      </form>
      <p> Not a member? {" "} 
      <span className='login__register' onClick={register}>Register now</span></p>
    </div>
  )
}

export default Login
