import React, { useState, useEffect } from 'react';
import { store } from './store';
import './App.css';
import LogInPage from './components/LogInPage/LogInPage';
import MainApp from './components/MainApp/MainApp'
import './style.css';

interface State {
  loggedIn: boolean
}

function App({}, state: State) {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("user"));

  useEffect(() => {
    setLoggedIn(localStorage.getItem("user"))
  }, [store.getState().loggedIn])

  return (
    <div className="App">
      {!loggedIn
        ? <LogInPage />
        : <MainApp />
      }
    </div>
  );
}


export default App;
