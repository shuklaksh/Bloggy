import React from 'react'
import './HeaderOptions.css'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';


function HeaderOptions({Icon,text,onclick}) {

  return (
    <div onClick= {onclick} className='headerOptions'>
      {Icon && <Icon className='headerOptions__icon'/>}
      <h3>{text}</h3>
    </div>
  )
}

export default HeaderOptions
