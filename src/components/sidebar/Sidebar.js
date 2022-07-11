import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import './Sidebar.css';

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

      <div className="sidebar__stats">
          <div className="sidebar__stat">
              <p>Who's viewed your profile?</p>
              <p className='sidebar__statNumber'> 108 </p>
          </div>
          <div className="sidebar__stat">
              <p>Impression of your posts</p>
              <p className='sidebar__statNumber'> 54 </p>
          </div>
        </div>
        
        <div className="sidebar__bottom">
            <p>Recent</p>
            <div className="recentItems">
                {items('reactjs')}
                {items('frondend')}
                {items('DSA')}
                {items('MAANGA')}
                {items('softwareengineering')}
                {items('design')}
                {items('javascript')}
            </div>
        </div>
    </div>
  )
}

export default Sidebar
