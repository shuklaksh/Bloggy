import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import PhotoIcon from '@mui/icons-material/Photo';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventIcon from '@mui/icons-material/Event';
import DescriptionIcon from '@mui/icons-material/Description';
import Post from './Post';
import {db} from '../firebase'
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';

function Feed() {
    const user = useSelector(selectUser) 
    const[input,setInput] = useState('')
    const[posts,setPosts] = useState([]);
    
     useEffect(()=> {
        db.collection('posts').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        })
     },[])

    const sendPost = (e)=> {
         e.preventDefault();

         db.collection('posts').add({
             name: user.displayName,
             description: user.email,
             message: input,
             photoURL: user.photoURL || "",
             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         })
         setInput('');
    }
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
          <div className="feed__input">
              <CreateIcon />
              <form >
                <input value={input} onChange = {(event) =>{ setInput(event.target.value) }} type='text' placeholder='Start a post' />
                <button type='submit' onClick={sendPost}>Post</button>
              </form>
          </div>
          <div className="feed__inputOptions">
                <InputOption Icon={PhotoIcon} text='Photo' color='#7085f9' />
                <InputOption Icon={OndemandVideoIcon} text='Video' color='#e7a33e'/>
                <InputOption Icon={EventIcon} text='Event' color='#c0cbcd'/>
                <InputOption Icon={DescriptionIcon} text='Write' color='7fc15e'/>
          </div>
      </div>
      <div className="feed__post">
      <FlipMove>
        {posts.map(({id, data:{name,description,photoURL,message}})=>(
            <Post 
                key={id}
                name={name}
                description={description}
                avatar={photoURL}
                message={message}
            />
        ))}
      </FlipMove>
      </div>
    </div>
  )
}

export default Feed
