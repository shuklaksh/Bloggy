import { Avatar } from '@mui/material'
import { useState } from 'react';
import './Sidebar.css';
import { useEffect } from 'react';


function SidebarComponent({user}) {
    const [myUser, setMyUser] = useState('');

    useEffect(() => {
        setMyUser(user)
    }, [user])

    return (
        <div className='sidebar'>
          <div className="sidebar__top">
              <img src='https://hackaday.com/wp-content/uploads/2018/08/portal.png' alt='background'/>
              <Avatar className='sidebar__avatar' 
              src= {myUser.photoURL ? myUser.photoURL : ""} 
              sx={{ width: 70, height: 70}}>{myUser.displayName?.slice(0,1).toUpperCase()} </Avatar>
              <h2>{myUser.displayName}</h2>
              <h3>{myUser.email}</h3>
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
                    with each other in short messages, Whether it’s 
                    sharing breaking news, posting updates about their company or following 
                    their favourite celebrities, people are using Bloggy to connect with others 
                    and to discover new things every day.</p>
                </div>
            </div>
        </div>
      )
}

export default SidebarComponent
