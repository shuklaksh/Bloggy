import React from 'react'
import './HeaderOptions.css'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';


function HeaderOptions({Icon,avatar,text,onclick}) {

  const user = useSelector(selectUser);
  
  return (
    <div onClick= {onclick} className='headerOptions'>
      {Icon && <Icon className='headerOptions__icon'/>}
      {avatar &&
        <Avatar className='headerOptions__icon' src={user.photoURL}> {user.displayName[0]}</Avatar>
      }
      <h3>{text}</h3>
    </div>
  )
}

export default HeaderOptions
