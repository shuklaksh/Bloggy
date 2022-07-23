import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widgets from './components/widgets/Widgets';
import { useDispatch, useSelector} from 'react-redux';
import { login, selectUser, logout } from './features/counter/userSlice';
import Login from './components/login/Login';
import Entry from './components/login components/Entry';
import { auth } from './components/firebase';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL
          })
        )
      } else {
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">
      {!user ? 
      <Entry /> : <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </>
      }
    </div>
  );
}

export default App;
