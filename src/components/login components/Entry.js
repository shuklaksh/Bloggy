import './Entry.css'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/counter/userSlice';
import { auth } from '../firebase';
import { signInWithEmailAndPassword} from 'firebase/auth'
import { Link } from 'react-router-dom';
import Signup from './Signup';

function Entry() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[name,setName] = useState("");
    const[profile,setProfile] = useState("");
    const[display,setDisplay] = useState(true);
    const dispatch = useDispatch();

    const handleSign = () => {
        setDisplay(false);
    }

    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email, password)
        .then((userAuth)=> {
          dispatch(
            login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profile
        }))
        })
          .catch((error) => alert(error) );
    }
  return (
        <div className='entry'>
            <nav>
                <h1>BLOGGY</h1>
            </nav>
            {
                display === true ? ( <>
                <form className='form'>
                <h2>Enter you email</h2>
                <input type='email' className='input' value={email} onChange= {(e) => {setEmail(e.target.value)}} placeholder='name@gmail.com' />
                <h2>Enter you password</h2>
                <input type='password'  className='input' value={password} onChange= {(e) => {setPassword(e.target.value)}} placeholder='password' />
                <button type='submit' onClick = {loginToApp} >Log In</button>
                </form>
                <h1 className='or'>OR</h1>
                <button onClick={handleSign} className='signupbtn1'>SignUp</button> </>) : (<Signup />)
            }
        </div>
  )
}

export default Entry
