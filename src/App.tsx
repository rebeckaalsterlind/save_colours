import React from 'react';
import { store } from './store';
import './App.css';
import LogInPage from './components/LogInPage/LogInPage';
import MainApp from './components/MainApp/MainApp'


function App() {
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
