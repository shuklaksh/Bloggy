import React from 'react'
import './HeaderOptions.css'
import Avatar from '@mui/material/Avatar';


function HeaderOptions({Icon,avatar,text}) {
  return (
    <div className='headerOptions'>
      {Icon && <Icon className='headerOptions__icon'/>}
      {avatar &&
        <Avatar className='headerOptions__icon' src={avatar} />
      }
      <h3>{text}</h3>
    </div>
  )
}

export default HeaderOptions
