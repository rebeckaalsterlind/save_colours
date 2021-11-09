import React, { useState, useEffect } from 'react';
import { store } from './store';
import { logIn } from './actions';
import './App.css';
import LogInPage from './components/LogInPage/LogInPage';
import MainApp from './components/MainApp/MainApp'
import './style.css';

function App() {

  if (localStorage.getItem("userId")) {
      
    fetch(`http://localhost:3000/api/users/${localStorage.getItem("userId")}`)
    .then(res => res.json())
    .then(response => {
      if(response.username) {
        store.dispatch(logIn({ isTrue: true, username: response.username, user: response }));
      }
    });

  }

  return (
    <div className="App">
      {!store.getState().loggedIn
        ? <LogInPage />
        : <MainApp />
      }
    </div>
  );
}


export default App;
