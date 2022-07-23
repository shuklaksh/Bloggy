import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import {logout } from '../../features/counter/userSlice';
import { auth, signOut} from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';




function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOut = ()=> {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className='header'>
      
      <div className="header__left">
        <h1>Bloggy</h1>
      </div>
      <div className="header__search">
            <SearchIcon />
            <input type='text' />
        </div>

      <div className="header__right">
        <HeaderOptions Icon={LogoutIcon} text='Log Out' onclick={logOut} />




      </div>

    </div>
  )
}

export default Header
