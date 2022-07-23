import './Signup.css'
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../../features/counter/userSlice';
import { auth } from '../firebase';

function Signup() {
    const[name,setName] = useState("");
    const[profile,setProfile] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();
        if(name == '') {
           return alert('Please Enter Full Name')
        }

       createUserWithEmailAndPassword(auth,email,password)
        .then((userAuth)=> {
                updateProfile(userAuth.user, {
                        displayName: name,
                        photoURL: profile,
                    }) 
                    .then(() =>{
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
    <div className='signup'>
      <form className='signupForm' >
            <h2>Enter your Name</h2>
            <input  value={name} onChange= {(e) => {setName(e.target.value)}} type='text' className='signupInput' placeholder='Name' />
            <h2>Enter Photo URL </h2>
            <input value={profile} onChange= {(e) => {setProfile(e.target.value)}} type='text' className='signupInput' placeholder='www.yourphoto.com' />
            <h2>Enter your email</h2>
            <input value={email} onChange= {(e) => {setEmail(e.target.value)}} type='email' className='signupInput' placeholder='name@gmail.com' />
            <h2>Set password</h2>
            <input value={password} onChange= {(e) => {setPassword(e.target.value)}} type='password' className='signupInput' placeholder='*******' />
            <button classname='signupBtn'  onClick={register} type='submit'> SignUp</button>
      </form>
    </div>
  )
}

export default Signup
