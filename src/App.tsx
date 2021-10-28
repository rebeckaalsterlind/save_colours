import React, { useState } from 'react';
import './App.css';
import LogInPage from './components/LogInPage/LogInPage';
import MainApp from './components/MainApp/MainApp'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      {!isLoggedIn 
        ? <LogInPage />
        : <MainApp />
      }
    </div>
  );
}

export default App;
