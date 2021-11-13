import React, { useEffect } from 'react';
import { store } from './store';
import { logIn } from './actions';
import LogInPage from './components/LogInPage/LogInPage';
import MainApp from './components/MainApp/MainApp';
import './App.css';
import './style.css';


function App() {

  //checking user against localsStorage. if true => fetch user object to set redux data
  useEffect(() => {

    if (localStorage.userId && !store.getState().username) {
      let user: any = localStorage.getItem("userId")
  
      fetch(`https://mads-colour-backend.herokuapp.com/api/users/${user}`, {
        method: "GET",
      })
        .then(res => res.json())
        .then(response => {
  
          if (response.username) {
            store.dispatch(logIn({ 
              isTrue: true, 
              username: response.username, 
              user: response 
            }));
          };

        });

      };
  
  });


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
