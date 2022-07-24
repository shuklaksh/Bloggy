import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widgets from './components/widgets/Widgets';
import { useDispatch, useSelector} from 'react-redux';
import { login, selectUser, logout } from './features/counter/userSlice';
import Entry from './components/login components/Entry';
import { auth } from './components/firebase';


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
  },[dispatch])

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
