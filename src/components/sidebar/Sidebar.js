import { Avatar } from '@mui/material'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import './Sidebar.css';
import {db} from '../firebase'
import { useEffect } from 'react';

function Sidebar() {
    const user = useSelector(selectUser);

    const items = (hashtag) => {
        return(
            <h3 className='item'># {hashtag}</h3>
        )
    }
    
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
          <img src='https://hackaday.com/wp-content/uploads/2018/08/portal.png'/>
          <Avatar className='sidebar__avatar' 
          src= {user.photoURL} 
          sx={{ width: 70, height: 70}}>{user.displayName[0].toUpperCase()} </Avatar>
          <h2>{user.displayName}</h2>
          <h3>{user.email}</h3>
      </div>
        
        <div className="sidebar__bottom">
            <p>Introduction</p>
            <div className="recentItems">
                {/* {items('reactjs')}
                {items('frondend')}
                {items('DSA')}
                {items('MAANGA')}
                {items('softwareengineering')}
                {items('design')}
                {items('javascript')} */}
                <p>Bloggy is an open social network that people use to converse 
                with each other in short messages, known as tweets. Whether it’s 
                sharing breaking news, posting updates about their company or following 
                their favourite celebrities, people are using Bloggy to connect with others 
                and to discover new things every day.</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
