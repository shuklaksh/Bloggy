import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';



function Header() {
  return (
    <div className='header'>
      
      <div className="header__left">
        <img src='https://www.svgrepo.com/show/81143/linkedin.svg' />
        <div className="header__search">
            <SearchIcon />
            <input type='text' />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} text='Home' />
        <HeaderOptions Icon={SupervisorAccountIcon} text='My Networks' />
        <HeaderOptions Icon={BusinessCenterIcon} text='Jobs' />
        <HeaderOptions Icon={ChatIcon} text='Messages' />
        <HeaderOptions Icon={NotificationsActiveIcon} text='Notifications' />
        <HeaderOptions avatar="https://avatarfiles.alphacoders.com/855/85557.png" text='Me' />




      </div>

    </div>
  )
}

export default Header
