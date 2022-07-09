import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widgets from './components/widgets/Widgets';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Login from './components/sidebar/login/Login';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
      {!user ? 
      <Login /> : <>
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
