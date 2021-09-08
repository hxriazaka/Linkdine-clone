import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { login,logout, selectUser } from './features/counter/userSlice';
import Feed from './feed';
import Head from './head';
import Login from './Login/login';
import SideBar from './sideBar';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import Widgets from './Widgets/widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() =>{
    auth.onAuthStateChanged((userAuth) =>{
      if (userAuth) {
        //logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.profilURL,
          })
        )
      }else{
        //logged out
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="app">
      < Head />

      {!user ? (< Login />):(
      <div className="app-body">
        < SideBar />
        < Feed />
        < Widgets />
      </div>
      )}
    </div>
  );
}

export default App;
